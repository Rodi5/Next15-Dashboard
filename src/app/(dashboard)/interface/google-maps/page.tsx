import { Suspense } from "react"
import dynamic from "next/dynamic"
import { FaSearch } from "react-icons/fa"
import { ErrorBoundary } from "@/components/ErrorBoundary"

// Dynamic imports for larger components
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: true,
  loading: () => <div className="w-52 bg-white animate-pulse" />,
})

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white animate-pulse" />,
})

const GoogleMaps = dynamic(() => import("@/components/interface/GoogleMaps"), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="w-full h-[300px] rounded-lg bg-gray-100 animate-pulse" />
      ))}
    </div>
  ),
})

export default function GoogleMapPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Suspense fallback={<div className="w-52 bg-white animate-pulse" />}>
        <Sidebar />
      </Suspense>

      <div className="flex flex-col flex-1 overflow-hidden lg:ml-52">
        <Suspense fallback={<div className="h-16 bg-white animate-pulse" />}>
          <Header />
        </Suspense>

        <main className="flex-1 overflow-y-auto p-6 lg:mt-16">
          <div className="container mx-auto">
            <div className="flex items-center bg-white w-full h-20 px-4">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="px-4 py-1 border border-gray-300 rounded-full outline-none"
                aria-label="Search"
              />
              <FaSearch className="relative right-7 text-gray-500 cursor-pointer" size={12} />
            </div>

            <div className="mt-8">
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full h-[300px] rounded-lg bg-gray-100 animate-pulse" />
                      ))}
                    </div>
                  }
                >
                  <GoogleMaps />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

