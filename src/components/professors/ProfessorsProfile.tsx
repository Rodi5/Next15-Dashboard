"use client"

import { useState } from "react"
import Image from "next/image"
import { FaEye, FaFacebook, FaGoogle, FaHeart, FaThumbsUp, FaTwitter } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6"
import ProfileBiography from "./ProfileBiography"
import ProfileUpdate from "./ProfileUpdate"

type Tab = "activity" | "biography" | "update"

export default function ProfessorsProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("activity")

  const renderTabContent = () => {
    switch (activeTab) {
      case "biography":
        return <ProfileBiography />
      case "update":
        return <ProfileUpdate />
      default:
        return (
          <div className="space-y-4">
            {[
              {
                name: "Michael Smith",
                date: "Mon Jan 26 2015 - 18:39:23",
                message:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                actions: ["Like", "Love"],
                img: "/img/contact/1.jpg",
              },
              {
                name: "Karl Jordan",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.",
                actions: ["Like", "Love2", "Message"],
                img: "/img/contact/2.jpg",
              },
              {
                name: "Michael Smith",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
                actions: [""],
                img: "/img/contact/3.jpg",
              },
              {
                name: "Alice Jordan",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
                actions: ["Like", "Nudge"],
                img: "/img/contact/4.jpg",
              },
              {
                name: "Mark Smith",
                date: "Mon Jan 26 2015 - 18:39:23",
                message:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                actions: ["Like", "Love"],
                img: "/img/contact/1.jpg",
              },
              {
                name: "Karl Jordan",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.",
                actions: ["Like", "Love2", "Message"],
                img: "/img/contact/2.jpg",
              },
              {
                name: "Michael Smith",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
                actions: [""],
                img: "/img/contact/3.jpg",
              },
              {
                name: "Alice Jordan",
                date: "Fri Jan 25 2015 - 11:12:36",
                message:
                  "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
                actions: ["Like", "Love2"],
                img: "/img/contact/4.jpg",
              }
            ].map((post, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-10 h-10 bg-gray-200 rounded-full">
                  <Image
                    src={post.img || "/placeholder.svg"}
                    width={100}
                    height={100}
                    alt="profile"
                    className="rounded-full"
                    priority
                  />
                </div>
                <div className="flex-1 px-4 py-2" style={{ backgroundColor: "#f7f8fa" }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{post.name}</span>
                    <span className="text-sm text-gray-700">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm">{post.message}</p>
                  <div className="flex gap-0.5 sm:gap-2">
                    {post.actions.map((action, i) => (
                      <button key={i}>
                        {action === "Like" ? (
                          <div className="flex justify-center items-center gap-1 text-sm bg-white px-1 border hover:bg-gray-100 rounded-sm">
                            <FaThumbsUp size={12} /> Like
                          </div>
                        ) : action === "Love" ? (
                          <div
                            className="flex justify-center items-center gap-1 text-sm text-white px-1 rounded-sm"
                            style={{ backgroundColor: "#006DF0" }}
                          >
                            <FaHeart size={12} /> Love
                          </div>
                        ) : action === "Love2" ? (
                          <div className="flex justify-center items-center gap-1 text-sm border bg-white hover:bg-gray-100 px-1 rounded-sm">
                            <FaHeart size={12} /> Love
                          </div>
                        ) : action === "Message" ? (
                          <div
                            className="flex justify-center items-center gap-1 text-sm text-white px-1 rounded-sm"
                            style={{ backgroundColor: "#933EC5" }}
                          >
                            <FaPencil size={12} /> Message
                          </div>
                        ) : action === "Nudge" ? (
                          <div
                            className="flex justify-center items-center gap-1 text-sm text-white px-1 rounded-sm"
                            style={{ backgroundColor: "#65b12d" }}
                          >
                            <FaEye size={12} /> Nudge
                          </div>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Left Profile Section */}
      <div className="w-full md:w-80 bg-white shadow-md p-4 self-start">
        <div className="text-center">
          <Image
            src="/img/profile/1.jpg"
            alt="Profile"
            width={280}
            height={280}
            className="w-full h-full mx-auto mb-4"
            priority
          />
          <div className="text-left space-y-4 mb-6" style={{ color: "#333" }}>
            <div className="flex justify-around text-center">
              <div className="flex justify-between flex-col">
                <span className="font-semibold">Name</span>
                <span className="text-sm">Fly Zend</span>
              </div>
              <div className="flex justify-between flex-col">
                <span className="font-semibold">Designation</span>
                <span className="text-sm">Head of Dept.</span>
              </div>
            </div>
            <div className="flex justify-around text-center">
              <div className="flex justify-between flex-col">
                <span className="font-semibold">Email ID</span>
                <span className="text-sm">fly@gmail.com</span>
              </div>
              <div className="flex justify-between flex-col">
                <span className="font-semibold">Phone</span>
                <span className="text-sm">+01962067309</span>
              </div>
            </div>
          </div>
          <div className="text-center mb-6">
            <div className="font-semibold mb-2">Address</div>
            <div className="text-sm">E104, catn-2, Chandlodia Ahmedabad Gujarat, UK.</div>
          </div>

          <div className="flex justify-around items-center pt-4" style={{ color: "#333" }}>
            <div className="flex flex-col items-center space-y-1">
              <FaFacebook size={20} />
              <div className="text-xl">500</div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaTwitter size={20} />
              <div className="text-xl">900</div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <FaGoogle size={20} />
              <div className="text-xl">600</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 bg-white shadow-md p-4">
        <div className="border-b mb-4">
          <div className="flex flex-col sm:flex-row gap-1">
            <button
              className={`px-3 py-2 font-medium ${
                activeTab === "activity"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("activity")}
            >
              Activity
            </button>
            <button
              className={`px-3 py-2 font-medium ${
                activeTab === "biography"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("biography")}
            >
              Biography
            </button>
            <button
              className={`px-3 py-2 font-medium ${
                activeTab === "update"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("update")}
            >
              Update Details
            </button>
          </div>
        </div>

        {renderTabContent()}
      </div>
    </div>
  )
}