"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import type { FeatureCollection, Geometry } from "geojson"
import { feature } from "topojson-client"

interface MapProps {
  type: string,
  data?: Record<string, any>
}

interface MapConfig {
  defaultFill: string
  highlightFill: string
  strokeColor: string
  strokeWidth: number
}

// Pre-colored regions for different map types
const preColoredRegions = {
  highlighted: ["USA", "840", "BRA", "076", "RUS", "643", "DEU", "276"],
  usa: ["NY", "36", "CA", "06", "NE", "31"],
  connections: ["USA", "840", "BRA", "076", "RUS", "643", "AUS", "036", "POL", "616", "DEU", "276"],
  americas: ["USA", "840", "CAN", "124", "MEX", "484", "GRL", "304", "BLZ", "084", "HND", "340", "GTM", "320"],
}

const regionColors: Record<string, string> = {
  // For multicolor map (Style 5)
  USA: "#d92223",
  840: "#d92223", // USA numeric code
  CAN: "#9966cc",
  124: "#9966cc", // Canada numeric code
  GRL: "#8c564b",
  RUS: "#228b22",
  643: "#228b22", // Russia numeric code
  BRA: "#ff7f0e",
  "076": "#ff7f0e", // Brazil numeric code
  IND: "#ff69b4",
  356: "#ff69b4", // India numeric code
  AUS: "#fa0fa0",
  "036": "#fa0fa0", // Australia numeric code
  DEU: "#fa0fa0",
  "276": "#fa0fa0", // Germany numeric code
  ITA: "#fa0fa0",
  "380": "#fa0fa0", // Italy numeric code
  SA: "#8c564b",
  "710": "#8c564b", // South Africa numeric code
  JAP: "#fa0fa0",
  392: "#fa0fa0", // Japan numeric code

  // For americas map (Style 6)
  USA_AMERICAS: "#9966cc", // Purple
  MEX: "#228b22", // Green
  484: "#228b22", // Mexico numeric code
  CAN_AMERICAS: "#4169e1", // Blue
  GRL_AMERICAS: "#8c564b", // Greenland
  304: "#8c564b", // Greenland numeric code
  GTM: "#e377c2", // Guatemala
  "320": "#e377c2", // Guatemala numeric code
  HND: "#ff7f0e", // Honduras
  "340": "#ff7f0e", // Honduras numeric code
  BLZ: "#0fa0fa", // Belize
  "084": "#0fa0fa", // Belize numeric code
}

const config: MapConfig = {
  defaultFill: "#f0f0f0",
  highlightFill: "#3b82f6",
  strokeColor: "#ffffff",
  strokeWidth: 0.75,
}

export default function DataMaps({ type, data }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [tooltipContent, setTooltipContent] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight
    svg.attr("viewBox", `0 0 ${width} ${height}`)

    svg.selectAll("*").remove()

    const projection = getProjection(type, width, height)
    const path = d3.geoPath().projection(projection)

    const dataUrl =
      type === "usa"
        ? "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
        : "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

    d3.json(dataUrl).then((topology: any) => {
      if (!topology || !topology.objects) {
        console.error("Error loading TopoJSON data", topology)
        return
      }

      const geojson =
        type === "usa"
          ? (feature(topology, topology.objects.states) as unknown as FeatureCollection<Geometry>)
          : (feature(topology, topology.objects.countries) as unknown as FeatureCollection<Geometry>)

      if (!geojson || !geojson.features) {
        console.error("Error converting TopoJSON to GeoJSON")
        return
      }

      svg.append("rect").attr("width", width).attr("height", height).attr("fill", "#ffffff")

      const g = svg.append("g")

      g.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", path as any)
        .attr("fill", (d: any) => getFillColor(d, type))
        .attr("stroke", config.strokeColor)
        .attr("stroke-width", config.strokeWidth)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)

      if (type === "connections" || type === "americas") {
        drawConnections(svg, projection, type)
      }
    })

    return () => {
      svg.selectAll("*").remove()
    }
  }, [type])

  function getProjection(type: string, width: number, height: number) {
    switch (type) {
      case "americas":
        return d3
          .geoOrthographic()
          .rotate([80, -10, 0])
          .fitSize([width, height], { type: "Sphere" })
          .translate([width / 2, height / 2])
      case "usa":
        return d3.geoAlbersUsa().fitSize([width, height], { type: "Sphere" })
      default:
        return d3
          .geoMercator()
          .fitSize([width, height], { type: "Sphere" })
          .translate([width / 2, height / 2])
    }
  }

  function isPreColored(d: any, type: string): boolean {
    const id = d.id || d.properties?.iso_a3 || d.properties?.postal || "unknown"

    if (type === "usa") {
      return preColoredRegions.usa.includes(id) || preColoredRegions.usa.includes(d.id.toString())
    }

    if (type === "highlighted" && preColoredRegions.highlighted.includes(id)) {
      return true
    }
    if (type === "connections" && preColoredRegions.connections.includes(id)) {
      return true
    }
    if (type === "americas" && preColoredRegions.americas.includes(id)) {
      return true
    }
    return false
  }

  function getFillColor(d: any, type: string) {
    const id = d.id || d.properties?.iso_a3 || d.properties?.postal || "unknown"

    // Handle pre-colored regions for highlighted, usa, and connections types
    if (["highlighted", "usa", "connections"].includes(type) && isPreColored(d, type)) {
      return config.highlightFill
    }

    // Handle multicolor map (Style 5)
    if (type === "multicolor") {
      if (typeof d.id === "number") {
        return regionColors[d.id.toString()] || config.defaultFill
      }
      return regionColors[id] || config.defaultFill
    }

    // Handle americas map (Style 6)
    if (type === "americas") {
      if (id === "USA" || id === "840") return regionColors.USA_AMERICAS
      if (id === "CAN" || id === "124") return regionColors.CAN_AMERICAS
      if (id === "MEX" || id === "484") return regionColors.MEX
      if (id === "GRL" || id === "304") return regionColors.GRL_AMERICAS
      if (id === "GTM" || id === "320") return regionColors.GTM
      if (id === "HND" || id === "340") return regionColors.HND
      if (id === "BLZ" || id === "084") return regionColors.BLZ
      return config.defaultFill
    }

    return config.defaultFill
  }

  function handleMouseOver(event: any, d: any) {
    // For americas map, always show highlight color on hover
    if (type === "americas") {
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr("fill", config.highlightFill)
        .attr("stroke-width", config.strokeWidth * 2)
    }
    // For other maps, only highlight non-pre-colored regions
    else if (!isPreColored(d, type)) {
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr("fill", config.highlightFill)
        .attr("stroke-width", config.strokeWidth * 2)
    }

    const name = d.properties?.name || "Unknown"
    setTooltipContent(name)
    const bounds = event.currentTarget.getBoundingClientRect()
    const svgBounds = svgRef.current?.getBoundingClientRect()
    if (svgBounds) {
      setTooltipPosition({
        x: bounds.left - svgBounds.left + bounds.width / 2,
        y: bounds.top - svgBounds.top,
      })
    }
  }

  function handleMouseOut(event: any, d: any) {
    // For americas map, always return to original color
    if (type === "americas") {
      const defaultFill = getFillColor(d, type)
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr("fill", defaultFill)
        .attr("stroke-width", config.strokeWidth)
    }
    // For other maps, only handle non-pre-colored regions
    else if (!isPreColored(d, type)) {
      const defaultFill = getFillColor(d, type)
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr("fill", defaultFill)
        .attr("stroke-width", config.strokeWidth)
    }

    setTooltipContent("")
  }

  function drawConnections(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, projection: any, type: string) {
    const connections =
      type === "americas"
        ? [
            { source: [-80, 40], target: [-55, -15] }, // USA to Brazil connection
          ]
        : [
            { source: [-95.7129, 37.0902], target: [105.3188, 61.524] }, // USA to Russia
            { source: [-95.7129, 37.0902], target: [10.4515, 51.1657] }, // USA to Germany
            { source: [-95.7129, 37.0902], target: [19.1451, 51.9194] }, // USA to Poland
            { source: [-95.7129, 37.0902], target: [133.7751, -25.2744] }, // USA to Australia
            { source: [-95.7129, 37.0902], target: [-51.9253, -14.235] }, // USA to Brazil
          ]

    connections.forEach((connection) => {
      const curve = d3.line().curve(d3.curveBasis)
      const controlPoint = [
        (connection.source[0] + connection.target[0]) / 2,
        (connection.source[1] + connection.target[1]) / 2 - 30,
      ]

      const points = [
        projection(connection.source as [number, number]),
        projection(controlPoint as [number, number]),
        projection(connection.target as [number, number]),
      ].filter(Boolean) as [number, number][]

      if (points.length < 3) return

      svg
        .append("path")
        .attr("d", curve(points))
        .attr("fill", "none")
        .attr("stroke", type === "americas" ? "#ff69b4" : "#3b82f6")
        .attr("stroke-width", 2.5)
        .attr("stroke-dasharray", "5,5")
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .style("opacity", 0.8)
    })
  }

  return (
    <div className="relative w-full h-full">
      <svg ref={svgRef} className="w-full h-full" style={{ minHeight: "400px" }} preserveAspectRatio="xMidYMid meet" />
      {tooltipContent && (
        <div
          className="absolute z-50 px-2 py-1 text-sm text-white bg-black rounded pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  )
}