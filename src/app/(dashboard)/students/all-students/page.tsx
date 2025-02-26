import { FaSearch } from 'react-icons/fa';
import { Suspense } from "react"
import dynamic from "next/dynamic"

const Sidebar = dynamic(() => import("@/components/Sidebar"), {
  ssr: true,
  loading: () => <div className="w-52 bg-white animate-pulse" />,
})

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white animate-pulse" />,
})

const StudentsList = dynamic(() => import("@/components/students/AllStudents"), {
  loading: () => <div className="h-80 bg-white animate-pulse" />,
})

const AllStudents = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* sidebar */}
      <Sidebar />

      {/* main content */}
      <div className="flex flex-col flex-1 overflow-hidden lg:ml-52">
        {/* header */}
        <Header />

        {/* page content */}
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

            <Suspense fallback={<div className="h-80 bg-white animate-pulse mt-8" />}>
              <div className="bg-gray-100 mt-8">
                <StudentsList/>
              </div>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AllStudents;

// AllStudents
// StudentsList