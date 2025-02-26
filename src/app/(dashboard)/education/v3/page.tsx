import { Suspense } from "react"
import { FaSearch, FaHeart } from "react-icons/fa"
import dynamic from "next/dynamic"


// Regular imports for smaller components
import Card from "@/components/Card"
import UniversityEarningsBarChart from '@/components/BarChart';
import CardSide from '@/components/CardSide';
import Review from "@/components/Review"
import AdmissionChart from "@/components/AdmissionChart"
import AnalysisProgress from "@/components/AnalysisProgress"
import Image from "next/image"

// Dynamic imports for larger components
const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: true,
  loading: () => <div className="w-52 bg-white animate-pulse" />,
})

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white animate-pulse" />,
})

const SocialStatus = dynamic(() => import("@/components/home/SocialStatus"))
const ProfileCard = dynamic(() => import("@/components/home/ProfileCard"))
const ProductCard = dynamic(() => import("@/components/home/ProductCard"))
const BrowserStatus = dynamic(() => import("@/components/home/BrowserStatus"))
const CountryVisits = dynamic(() => import("@/components/home/CountryVisits"))


export default function DashboardV3 () {
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

            {/* Cards Section */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse mt-6" />}>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 mt-6">
                <Card title="Computer Technologies" price={5000} fees="Tuition Fees" grow={20} color="#006DF0" />
                <Card title="Accounting Technologies" price={3000} fees="Tuition Fees" grow={30} color="#933EC5" />
                <Card title="Electrical Engineering" price={2000} fees="Tuition Fees" grow={60} color="#65b12d" />
                <Card title="Chemical Engineering" price={3500} fees="Tuition Fees" grow={80} color="#D80027" />
              </section>
            </Suspense>

            {/* Charts Section */}
            <Suspense fallback={<div className="h-80 bg-white animate-pulse mb-8" />}>
              <section className="mb-8 flex flex-col md:flex-row justify-between">
                <UniversityEarningsBarChart />
                <CardSide />
              </section>
            </Suspense>

            {/* Social Stats */}
            <Suspense fallback={<div className="h-40 bg-white animate-pulse" />}>
              <SocialStatus />
            </Suspense>

            {/* Profile and Review Section */}
            <Suspense fallback={<div className="h-96 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProfileCard />
                <Review />
                <ProductCard />
              </section>
            </Suspense>

            {/* Analysis Section */}
            <Suspense fallback={<div className="h-80 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6 xl:gap-1">
                <div className="lg:col-span-2 xl:col-span-3">
                  <AdmissionChart />
                </div>
                <div className="space-y-4 md:hidden lg:block lg:col-span-2 xl:col-span-1">
                  <AnalysisProgress title="Usage" fees="Server down since 1:32 pm." grow={90} color="#006DF0" />
                  <AnalysisProgress title="Memory" fees="Server down since 12:32 pm." grow={70} color="#933EC5" />
                  <AnalysisProgress title="Data" fees="Server down since 8:32 pm." grow={50} color="#65b12d" />
                  <AnalysisProgress title="Space" fees="Server down since 5:32 pm." grow={40} color="#DC3545" />
                </div>
              </section>
            </Suspense>

            {/* Browser and Country Stats */}
            <Suspense fallback={<div className="h-96 bg-white animate-pulse mt-6" />}>
              <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <BrowserStatus />
                <CountryVisits />
                <div className="bg-white relative max-w-sm md:hidden xl:block">
                  <div className="relative w-full h-56">
                    <Image
                      width={300}
                      height={250}
                      src="/img/courses/1.jpg"
                      alt="Course thumbnail"
                      className="w-80 h-full px-4 pt-4"
                      decoding="async"
                      priority
                    />
                  </div>
                  {/* Course details */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-[#444]">
                      Apps Development
                    </h3>
                    <div className="flex space-x-4 text-sm mt-2 text-[#333]">
                      <span>1 Year</span>
                      <span className="flex items-center">
                        <FaHeart className="mr-1" />
                        50
                      </span>
                      <span>
                        <strong>$</strong> 500
                      </span>
                    </div>
                    <div className="mt-2 text-sm space-y-1 text-[#303030]">
                      <p>
                        <strong>Duration:</strong> 6 Months
                      </p>
                      <p>
                        <strong>Professor:</strong> Jane Doe
                      </p>
                      <p>
                        <strong>Students:</strong> 100+
                      </p>
                    </div>
                    <button className="mt-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-sm hover:bg-blue-600 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </section>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
}

