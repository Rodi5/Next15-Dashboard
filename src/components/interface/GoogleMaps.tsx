"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ErrorBoundary } from "../ErrorBoundary"

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] rounded-lg border border-gray-200 bg-gray-50 animate-pulse" />,
})

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

const mapLocations: MapLocation[] = [
  {
    id: "chicago",
    title: "Map Style 1",
    center: { lat: 41.85, lng: -87.65 },
    zoom: 3,
    marker: {
      title: "Chicago, IL",
      infoContent: "Welcome to Chicago!",
    },
  },
  {
    id: "tokyo",
    title: "Map Style 2",
    center: { lat: 35.717, lng: 139.731 },
    zoom: 8,
  },
  {
    id: "sydney",
    title: "Map Style 3",
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    marker: {
      title: "Sydney Area",
    },
  },
  {
    id: "custom",
    title: "Map Style 4",
    center: { lat: 20.192828, lng: 85.853742 },
    zoom: 12,
    marker: {
      title: "Ramble!",
      animation: true,
    },
  },
  {
    id: "cairo",
    title: "Map Style 5",
    center: { lat: 30.0444, lng: 31.2357 },
    zoom: 11,
    marker: {
      title: "Cairo, Egypt",
      infoContent: "Welcome to Cairo!",
    },
  },
  {
    id: "australia-overview",
    title: "Map Style 6",
    center: { lat: -25.2744, lng: 133.7751 },
    zoom: 4,
    marker: {
      title: "Australia",
    },
  },
  {
    id: "central-australia",
    title: "Map Style 7",
    center: { lat: -23.7, lng: 133.8756 },
    zoom: 6,
    marker: {
      title: "Alice Springs Region",
    },
  },
  {
    id: "australia-coast",
    title: "Map Style 8",
    center: { lat: -33.8688, lng: 151.2093 },
    zoom: 5,
  },
]

export default function GoogleMaps() {
  return (
    <div className="container mx-auto p-4 relative z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mapLocations.map((location) => (
          <div key={location.id} className="flex flex-col">
            <h2 className="text-lg font-medium mb-2">{location.title}</h2>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="w-full h-[300px] rounded-lg border border-gray-200 bg-gray-50 animate-pulse" />
                }
              >
                <MapComponent location={location} />
              </Suspense>
            </ErrorBoundary>
          </div>
        ))}
      </div>
    </div>
  )
}

