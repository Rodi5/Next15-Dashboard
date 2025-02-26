import { Suspense } from "react"
import { FaSearch } from "react-icons/fa"
import dynamic from "next/dynamic"

// Regular imports for smaller components
import WidgetView from "@/components/WidgetView"
import WidgetBox from "@/components/WidgetBox"
import WidgetText from "@/components/WidgetText"
import WidgetTask from "@/components/WidgetTask"

import { FaDesktop, FaUser, FaCoins, FaEnvelope, FaChartPie, FaPaperPlane, FaChartBar, FaStarHalfStroke} from "react-icons/fa6"

// Dynamic imports for larger components
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: true,
  loading: () => <div className="w-52 bg-white animate-pulse" />,
})

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white animate-pulse" />,
})

const sampleTasks = [
  { task: "Lorem ipsum", date: "Jul 14, 2013" },
  { task: "Lorem ipsum", date: "Jul 09, 2015" },
  { task: "Lorem ipsum", date: "Jul 24, 2014" },
]

const Widgets = () => {
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

            {/* Widget View Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <WidgetView
                  title="Pages Views"
                  icon={<FaDesktop size={28} color="#333" />}
                  price={`160k+`}
                  color="#006DF0"
                />
                <WidgetView
                  title="Active Views"
                  icon={<FaUser size={28} color="#333" />}
                  price={`462`}
                  color="#933EC5"
                />
                <WidgetView title="Earning" icon={<FaCoins size={28} color="#333" />} price={`$2000`} color="#65b12d" />
                <WidgetView
                  title="Messages"
                  icon={<FaEnvelope size={28} color="#333" />}
                  price={`680`}
                  color="#D80027"
                />
              </section>
            </Suspense>

            {/* Widget Box Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <WidgetBox icon={<FaStarHalfStroke size={28} color="#333" />} color="#006DF0" />
                <WidgetBox icon={<FaChartPie size={28} color="#333" />} color="#933EC5" />
                <WidgetBox icon={<FaPaperPlane size={28} color="#333" />} color="#65b12d" />
                <WidgetBox icon={<FaChartBar size={28} color="#333" />} color="#D80027" />
              </section>
            </Suspense>

            {/* Widget Text Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <WidgetText color="#006DF0" value={20} />
                <WidgetText color="#933EC5" value={160} />
                <WidgetText color="#65b12d" value={750} />
                <WidgetText color="#D80027" value={0.43} />
              </section>
            </Suspense>

            {/* Widget Task Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <WidgetTask tasks={sampleTasks} color="#006DF0" />
                <WidgetTask tasks={sampleTasks} color="#933EC5" />
                <WidgetTask tasks={sampleTasks} color="#65b12d" />
                <WidgetTask tasks={sampleTasks} color="#D80027" />
              </section>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Widgets