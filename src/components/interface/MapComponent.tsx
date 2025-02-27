"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapLocation {
  id: string
  title: string
  center: { lat: number; lng: number }
  zoom: number
  marker?: {
    title?: string
    icon?: string
    animation?: boolean
    infoContent?: string
  }
}

interface MapComponentProps {
  location: MapLocation
}

export default function MapComponent({ location }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Fix for Leaflet icon issue in Next.js
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })

    // Set a small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      setMapReady(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!mapReady) return

    // Create map instance
    const map = L.map(`map-${location.id}`).setView([location.center.lat, location.center.lng], location.zoom)
    mapRef.current = map

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add marker if specified
    if (location.marker) {
      const marker = L.marker([location.center.lat, location.center.lng])
      markerRef.current = marker
      marker.addTo(map)

      // Add popup if content is specified
      if (location.marker.infoContent || location.marker.title) {
        marker.bindPopup(
          `<div class="p-2 text-sm">
            <b>${location.marker.infoContent || location.marker.title}</b>
          </div>`,
        )
      }
    }

    // Add zoom changed listener
    map.on("zoomend", () => {
      const zoom = map.getZoom()
      console.log(`Zoom level for ${location.title}: ${zoom}`)
    })

    // Add center changed listener
    map.on("moveend", () => {
      if (location.marker) {
        setTimeout(() => {
          map.panTo([location.center.lat, location.center.lng])
        }, 3000)
      }
    })

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [mapReady, location])

  return (
    <div
      id={`map-${location.id}`}
      className="w-full h-[300px] rounded-lg overflow-hidden border border-gray-200 shadow-lg relative z-0"
      aria-label={`Map showing ${location.title}`}
    />
  )
}