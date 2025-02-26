import { Suspense } from "react"
import { FaSearch } from "react-icons/fa"
import dynamic from "next/dynamic"

// Regular imports for smaller components
import AdmissionCard from "@/components/AdmissionCard"
import AnalysisProgress from "@/components/AnalysisProgress"
import AnalysisProgress2 from "@/components/AnalysisProgress2"

// Dynamic imports for larger components
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: true,
  loading: () => <div className="w-52 bg-white animate-pulse" />,
})

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white animate-pulse" />,
})

const PieCharts = dynamic(() => import("@/components/PieChart"), {
  loading: () => <div className="h-80 bg-white animate-pulse" />,
})

const last24hData = [
  { value: 34 }, { value: 43 }, { value: 43 }, { value: 35 },
  { value: 44 }, { value: 32 }, { value: 44 }, { value: 52 },
]

const weekData = [
  { value: 24 }, { value: 43 }, { value: 43 }, { value: 55 },
  { value: 44 }, { value: 62 }, { value: 44 }, { value: 72 },
]

const monthData = [
  { value: 74 }, { value: 43 }, { value: 23 }, { value: 55 },
  { value: 54 }, { value: 32 }, { value: 24 }, { value: 12 },
]

const avgTimeData = [
  { value: 24 }, { value: 43 }, { value: 33 }, { value: 55 },
  { value: 64 }, { value: 72 }, { value: 44 }, { value: 22 },
]

const Analytics = () => {
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
            {/* Search Bar */}
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

            {/* Analysis Progress Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <AnalysisProgress2 title="95%" fees="Server down 4:32 pm" grow={95} color="#006DF0" />
                  <AnalysisProgress2 title="85%" fees="Server down 8:32 pm" grow={85} color="#933EC5" />
                  <AnalysisProgress2 title="80%" fees="Server down 10:32 pm" grow={80} color="#65b12d" />
                  <AnalysisProgress2 title="93%" fees="Server down 10:32 pm" grow={93} color="#DC3545" />
                </div>
              </section>
            </Suspense>

            {/* Admission Cards Section */}
            <Suspense fallback={<div className="h-60 bg-white animate-pulse mt-4"/>}>
              <section>
                <div className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <AdmissionCard title="Visits in last 24h" value="5600" data={last24hData} color="#006df0" />
                    <AdmissionCard title="Visits week" value="3400" data={weekData} color="#933ec5" />
                    <AdmissionCard title="Last month" value="3300" data={monthData} color="#65b12d" />
                    <AdmissionCard title="Average time" value="00:06:40" data={avgTimeData} color="#d80027" />
                  </div>
                </div>
              </section>
            </Suspense>

            {/* Pie Charts Section */}
            <Suspense fallback={<div className="h-80 bg-white animate-pulse mt-4" />}>
              <section className="mt-4">
                <PieCharts />
              </section>
            </Suspense>

            {/* Analysis Progress Section */}
            <Suspense fallback={<div className="h-60 bg-white animate-pulse mt-4" />}>
              <section className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <AnalysisProgress title="Usage" fees="Server down since 1:32 pm." grow={90} color="#006DF0" />
                  <AnalysisProgress title="Memory" fees="Server down since 12:32 pm." grow={70} color="#933EC5" />
                  <AnalysisProgress title="Data" fees="Server down since 8:32 pm." grow={50} color="#65b12d" />
                  <AnalysisProgress title="Space" fees="Server down since 5:32 pm." grow={40} color="#DC3545" />
                </div>
              </section>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analytics