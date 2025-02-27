"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useCallback, memo, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  FaHome,
  FaCalendarAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaBookOpen,
  FaBuilding,
  FaEnvelope,
  FaDesktop,
  FaChartBar,
  FaFileAlt,
  FaChevronLeft,
  FaChevronDown,
  FaBars,
  FaPagelines,
} from "react-icons/fa"
import type { IconType } from "react-icons"

interface MenuItemProps {
  icon: IconType
  label: string
  onClick: () => void
  isOpen: boolean
  children?: React.ReactNode
  isActive: boolean
  hasSubmenu: boolean
}


const MenuItem: React.FC<MenuItemProps> = memo(({ icon: Icon, label, onClick, isOpen, children, isActive, hasSubmenu }) => (
  <li className={`hover:bg-gray-100 p-3 ${isActive ? "bg-blue-100" : ""}`}>
    <button onClick={onClick} className="hover:bg-gray-100 flex items-center justify-between w-full text-left">
      <a className="flex items-center">
        <Icon className={`w-5 h-5 mr-3 ${isActive ? "text-blue-600" : ""}`} />
        <span className={isActive ? "text-blue-600" : ""}>{label}</span>
      </a>
      {hasSubmenu &&
        (isOpen ? (
          <FaChevronDown className="w-4 h-4 text-gray-400" />
        ) : (
          <FaChevronLeft className="w-4 h-4 text-gray-400" />
        ))}
    </button>
    {isOpen && children}
  </li>
))
MenuItem.displayName = "MenuItem"

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = useCallback(
    (menu: string, hasSubmenu: boolean, path: string) => {
      if (!hasSubmenu) {
        router.push(path)
      } else {
        setOpenMenu(openMenu === menu ? null : menu)
      }
    },
    [openMenu, router]
  )

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen])

  const menuItems = useMemo(
    () => [
      {
        icon: FaHome,
        label: "Education",
        path: "/",
        submenu: [
          { label: "Dashboard v1", path: "/" },
          { label: "Dashboard v2", path: "/education/v2" },
          { label: "Dashboard v3", path: "/education/v3" },
          { label: "Analytics", path: "/education/analytics" },
          { label: "Widgets", path: "/education/widgets" },
        ],
      },
      { icon: FaCalendarAlt, label: "Events", path: "/events" },
      {
        icon: FaChalkboardTeacher,
        label: "Professors",
        path: "/professors",
        submenu: [
          { label: "All Professors", path: "/professors/all-professors" },
          { label: "Add Professor", path: "/professors/professors-info" },
          { label: "Edit Professor", path: "/professors/professors-edit" },
          { label: "Professor Profile", path: "/professors/professor-profile" },
        ],
      },
      {
        icon: FaUserGraduate,
        label: "Students",
        path: "/students",
        submenu: [
          { label: "All Students", path: "/students/all-students" },
          { label: "Add Student", path: "/students/students-info" },
          { label: "Edit Student", path: "/students/students-edit" },
          { label: "Student Profile", path: "/students/students-profile" },
        ],
      },
      {
        icon: FaBook,
        label: "Courses",
        path: "/courses",
        submenu: [
          { label: "All Courses", path: "/courses/all-courses" },
          { label: "Add Course", path: "/courses/add-course" },
          { label: "Edit Course", path: "/courses/edit-course" },
          { label: "Courses Info", path: "/courses/course-info" },
          { label: "Courses Payment", path: "/courses/courses-payment" },
        ],
      },
      {
        icon: FaBookOpen,
        label: "Library",
        path: "/library",
        submenu: [
          { label: "Library Assets", path: "/library/library-assets" },
          { label: "Add Library Asset", path: "/library/add-library" },
          { label: "Edit Library Asset", path: "/library/edit-library" },
        ],
      },
      {
        icon: FaBuilding,
        label: "Departments",
        path: "/departments",
        submenu: [
          { label: "Departments List", path: "/departments/departments-list" },
          { label: "Add Departments", path: "/departments/add-departments" },
          { label: "Edit Departments", path: "/departments/edit-departments" },
        ],
      },
      {
        icon: FaEnvelope,
        label: "MailBox",
        path: "/mailbox",
        submenu: [
          { label: "Inbox", path: "/mailbox/inbox" },
          { label: "View Mail", path: "/mailbox/view-mail" },
          { label: "Compose Mail", path: "/mailbox/compose-mail" },
        ],
      },
      {
        icon: FaDesktop,
        label: "Interface",
        path: "/interface",
        submenu: [
          { label: "Google Map", path: "/interface/google-maps" },
          { label: "Data Maps", path: "/interface/data-maps" },
          { label: "X-Editable", path: "/interface/x-editable" },
          { label: "Code Editor", path: "/interface/code-editor" },
          { label: "Tree View", path: "/interface/tree-view" },
          { label: "Preloader", path: "/interface/preloader" },
          { label: "Images Cropper", path: "/interface/images-cropper" },
        ],
      },
      {
        icon: FaChartBar,
        label: "Charts",
        path: "/charts",
        submenu: [
          { label: "Bar Charts", path: "/charts/bar-charts" },
          { label: "Line Charts", path: "/charts/line-charts" },
          { label: "Area Charts", path: "/charts/area-charts" },
          { label: "Rounded Charts", path: "/charts/rounded-charts" },
          { label: "C3 Charts", path: "/charts/c3-charts" },
          { label: "Sparkline Charts", path: "/charts/sparkline-charts" },
          { label: "Peity Charts", path: "/charts/peity-charts" },
        ],
      },
      {
        icon: FaFileAlt,
        label: "Data Tables",
        path: "/tables",
        submenu: [
          { label: "Static Table", path: "/tables/static-tables" },
          { label: "Data Table", path: "/tables/data-tables" },
        ],
      },
      {
        icon: FaPagelines,
        label: "Pages",
        path: "/pages",
        submenu: [
          { label: "Login", path: "/pages/login" },
          { label: "Register", path: "/pages/register" },
          { label: "Lock", path: "/pages/lock" },
          { label: "Password Recovery", path: "/pages/password-recovery" },
          { label: "404 Page", path: "/pages/error-404" },
          { label: "500 Page", path: "/pages/error-500" },
        ],
      },
    ],
    [],
  )

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed  bg-gray-800 text-white p-2 rounded ${isSidebarOpen ? "right-4 top-4 z-50" : "top-4 left-4 z-50"}`}
      >
        <FaBars size={20} />
      </button>
      <aside
        className={`fixed top-0 left-0 h-full overflow-y-auto w-52 bg-white shadow-lg transform custom-scrollbar ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
        style={{ color: "#8d9498" }}
      >
        <div className="p-4">
          <Link href="/">
            <Image
              width={200}
              height={100}
              src="/img/logo/logo.png"
              alt="Logo"
              priority
              className="mx-auto w-52 h-12"
            />
          </Link>
        </div>
        <nav className="flex-1 overflow-auto">
          <ul>
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                onClick={() => toggleMenu(item.label, !!item.submenu, item.path)}
                isOpen={openMenu === item.label}
                isActive={pathname === item.path}
                hasSubmenu={!!item.submenu}
              >
                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label} className="hover:bg-blue-100 rounded transition-colors duration-200">
                        <Link
                          href={subItem.path}
                          className={`block p-2 ${pathname === subItem.path ? "text-blue-600" : "hover:text-blue-600"}`}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </aside>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden z-30" onClick={toggleSidebar}></div>
      )}
    </>
  )
}

export default memo(Sidebar)