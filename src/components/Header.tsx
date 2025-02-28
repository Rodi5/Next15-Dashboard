"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback, memo } from "react"
import Image from "next/image"
import { FaBell, FaEnvelope, FaAngleDown, FaHome, FaUser, FaMoneyBill, FaCog, FaLock } from "react-icons/fa"
import { FaCloud, FaEraser, FaChartLine, FaCheck } from "react-icons/fa6"

// Memoized dropdown components
const MessageDropdown = memo(({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg overflow-hidden z-50">
      <div className="px-4 py-3 border-b border-gray-200 text-center">
        <h3 className="text-md text-[#303030]">Message</h3>
      </div>
      <div className="max-h-[200px] overflow-y-auto">
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Image
                width={60}
                height={60}
                src="/img/contact/1.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
                priority
              />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Advanda Cro</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Image
                width={60}
                height={60}
                src="/img/contact/4.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
                priority
              />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Sulaiman din</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Image
                width={60}
                height={60}
                src="/img/contact/3.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
                priority
              />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Victor Jara</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Image
                width={60}
                height={60}
                src="/img/contact/2.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
                priority
              />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Victor Jara</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center border-t border-gray-200">
        <a href="#" className="text-sm text-[#ccc]">
          View All Messages
        </a>
      </div>
    </div>
  )
})

MessageDropdown.displayName = "MessageDropdown"

const NotificationDropdown = memo(({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg overflow-hidden z-50">
      <div className="px-4 py-3 border-b border-gray-200 text-center">
        <h3 className="text-md text-[#303030]">Notifications</h3>
      </div>
      <div className="max-h-[200px] overflow-y-auto">
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-[#444] rounded-full w-14 h-14 flex justify-center items-center">
              <FaCheck className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Advanda Cro</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-[#444] rounded-full w-14 h-14 flex justify-center items-center">
              <FaCloud className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Sulaiman din</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-[#444] rounded-full w-14 h-14 flex justify-center items-center">
              <FaEraser className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Victor Jara</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-[#444] rounded-full w-14 h-14 flex justify-center items-center">
              <FaChartLine className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0 text-[#303030]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Victor Jara</p>
                <p className="text-sm">16 Sept</p>
              </div>
              <p className="text-sm mt-1">Please done this project as soon possible.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center border-t border-gray-200">
        <a href="#" className="text-sm text-[#ccc]">
          View All Messages
        </a>
      </div>
    </div>
  )
})

NotificationDropdown.displayName = "NotificationDropdown"

const ProfileDropdown = memo(({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <ul className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-50">
      <li className="hover:bg-gray-100">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700">
          <FaHome className="w-4 h-4 mr-2" />
          My Account
        </a>
      </li>
      <li className="hover:bg-gray-100">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700">
          <FaUser className="w-4 h-4 mr-2" />
          My Profile
        </a>
      </li>
      <li className="hover:bg-gray-100">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700">
          <FaMoneyBill className="w-4 h-4 mr-2" />
          User Billing
        </a>
      </li>
      <li className="hover:bg-gray-100">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700">
          <FaCog className="w-4 h-4 mr-2" />
          Settings
        </a>
      </li>
      <li className="hover:bg-gray-100">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700">
          <FaLock className="w-4 h-4 mr-2" />
          Log Out
        </a>
      </li>
    </ul>
  )
})

ProfileDropdown.displayName = "ProfileDropdown"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(false)

  const messageRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  // Memoized click handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
      setMessageOpen(false)
    }
    if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
      setNotificationOpen(false)
    }
    if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
    if (projectRef.current && !projectRef.current.contains(event.target as Node)) {
      setProjectOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleClickOutside])


  return (
    <div className="shadow-md lg:fixed top-0 left-52 right-0 h-16 z-20 bg-[#006DF0]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 ">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Navigation Links */}
            <ul className="hidden lg:flex space-x-8">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li className="relative group">
                <div ref={projectRef}>
                  <button className="text-white flex items-center" onClick={() => setProjectOpen(!projectOpen)}>
                    Projects
                    <FaAngleDown className="ml-2" />
                  </button>
                </div>
                {/* Dropdown */}
                {projectOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded z-50">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700">
                        Documentation
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700">
                        Expert Backend
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700">
                        Expert FrontEnd
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#" className="text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Messages */}
            <div className="relative hidden sm:block" ref={messageRef}>
              <button onClick={() => setMessageOpen(!messageOpen)} className="relative">
                <FaEnvelope size={24} className="text-white cursor-pointer" />
                <span className="absolute -top-1 -right-2 inline-block h-1.5 w-1.5 bg-white rounded-full"></span>
              </button>
              <MessageDropdown isOpen={messageOpen} />
              <span className="absolute -top-1 -right-2 inline-block h-1.5 w-1.5 bg-white rounded-full"></span>
            </div>

            {/* Notifications */}
            <div className="relative hidden sm:block" ref={notificationRef}>
              <button onClick={() => setNotificationOpen(!notificationOpen)} className="relative">
                <FaBell size={24} className="text-white cursor-pointer" />
                <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 bg-white rounded-full"></span>
              </button>
              <NotificationDropdown isOpen={notificationOpen} />
              <span className="absolute -top-1 right-0 inline-block h-1.5 w-1.5 bg-white rounded-full"></span>
            </div>

            {/* Profile */}
            <div className="relative inline-block text-left" ref={profileRef}>
              {/* Dropdown Trigger */}
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center focus:outline-none">
                <Image
                  src="/img/product/pro4.jpg"
                  alt="Profile"
                  width={20}
                  height={20}
                  priority
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-white font-medium">Prof. Anderson</span>
                <FaAngleDown className="ml-2 text-white" />
              </button>

              {/* Dropdown Menu */}
              <ProfileDropdown isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)

