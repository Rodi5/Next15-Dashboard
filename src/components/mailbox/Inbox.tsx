"use client"

import { FaArrowLeft, FaArrowRight, FaCheck, FaEnvelope, FaFlag, FaInfoCircle, FaPaperclip } from "react-icons/fa"
import {
  FaPaperPlane,
  FaPencil,
  FaTrash,
  FaPlane,
  FaChartLine,
  FaUsers,
  FaRotate,
  FaEye,
  FaExclamation,
  FaTrashCan,
  FaTag,
  FaGears,
} from "react-icons/fa6"

interface Email {
  sender: string
  content: string
  date: string
  tag?: string
  hasAttachment?: boolean
  hasBg?: boolean
  hasBold?: boolean
}

const emails: Email[] = [
  {
    sender: "Jeremy Massey",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Tue, Nov 25",
    hasAttachment: true,
    hasBold:true,
  },
  { sender: "Marshall Horne", content: "Praesent nec nisl sed neque ornare maximus at ac enim.", date: "Wed, Jan 13" },
  {
    sender: "Grant Franco",
    content: "Etiam maximus tellus a turpis tempor mollis.",
    date: "Mon, Oct 19",
    tag: "Finance",
    hasBg:true,
  },
  {
    sender: "Ferdinand Meadows",
    content: "Aenean hendrerit ligula eget augue gravida semper.",
    date: "Sat, Aug 29",
    hasAttachment: true,
    hasBg:true,
    hasBold:true,
  },
  { sender: "Ivor Rios", content: "Sed quis augue in nunc venenatis finibus.", date: "Sat, Dec 12", tag: "Social",hasAttachment: true, },
  { sender: "Maxwell Murphy", content: "Quisque eu tortor quis justo viverra cursus.", date: "Sun, May 17" },
  {
    sender: "Henry Patterson",
    content: "Aliquam nec justo interdum, ornare mi non, elementum lacus.",
    date: "Thu, Aug 06",
    hasAttachment: true,
  },
  { sender: "Brent Rasmussen", content: "Nam nec turpis sed quam tristique sodales.", date: "Sun, Nov 15" },
  {
    sender: "Joseph Hurley",
    content: "Nullam tempus leo id urna sagittis blandit.",
    date: "Sun, Aug 10",
    hasAttachment: true,
    hasBold:true,
  },
  {
    sender: "Alan Matthews",
    content: "Quisque quis turpis ac quam sagittis scelerisque vel ut urna.",
    date: "Sun, Mar 27",
  },
  {
    sender: "Colby Lynch",
    content: "Donec non enim pulvinar, ultrices metus eget, condimentum mi.",
    date: "Thu, Dec 31",
    tag: "Travel",
    hasBg: true,
  },
  {
    sender: "Jeremy Massey",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Tue, Nov 25",
    hasAttachment: true,
    hasBold:true,
  },
  { sender: "Marshall Horne", content: "Praesent nec nisl sed neque ornare maximus at ac enim.", date: "Wed, Jan 13" },
  {
    sender: "Grant Franco",
    content: "Etiam maximus tellus a turpis tempor mollis.",
    date: "Mon, Oct 19",
    tag: "Finance",
    hasBg:true,
  },
  {
    sender: "Ferdinand Meadows",
    content: "Aenean hendrerit ligula eget augue gravida semper.",
    date: "Sat, Aug 29",
    hasAttachment: true,
    hasBg:true,
    hasBold:true,
  },
  { sender: "Ivor Rios", content: "Sed quis augue in nunc venenatis finibus.", date: "Sat, Dec 12", tag: "Social",hasAttachment: true },
  { sender: "Maxwell Murphy", content: "Quisque eu tortor quis justo viverra cursus.", date: "Sun, May 17" },
  {
    sender: "Henry Patterson",
    content: "Aliquam nec justo interdum, ornare mi non, elementum lacus.",
    date: "Thu, Aug 06",
    hasAttachment: true,
  },
  { sender: "Brent Rasmussen", content: "Nam nec turpis sed quam tristique sodales.", date: "Sun, Nov 15" },
  {
    sender: "Joseph Hurley",
    content: "Nullam tempus leo id urna sagittis blandit.",
    date: "Sun, Aug 10",
    hasAttachment: true,
  },
  {
    sender: "Alan Matthews",
    content: "Quisque quis turpis ac quam sagittis scelerisque vel ut urna.",
    date: "Sun, Mar 27",
  }
]

export default function Inbox() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-4">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-4 rounded-sm self-start">
        <nav className="space-y-1">
          <div className="flex items-center px-3 py-2 text-gray-700 font-medium bg-gray-100 border">
            <FaEnvelope size={15} className="text-black"/>
            <span className="text-sm ml-2.5 font-semibold">Inbox</span>
            <span className="ml-auto font-semibold text-sm">12</span>
          </div>
          <SidebarItem icon={<FaPaperPlane size={15} className="text-black"/>} label="Sent" />
          <SidebarItem icon={<FaPencil size={15} className="text-black"/>} label="Draft" />
          <SidebarItem icon={<FaTrash size={15} className="text-black"/>} label="Trash" />
          <div className="border-t my-4"></div>
          <SidebarItem icon={<FaPlane size={15} className="-rotate-45" style={{color: '#e74c3c'}}/>} label="Travel" />
          <SidebarItem icon={<FaChartLine size={15} style={{color: '#ffb606'}}/>} label="Finance" />
          <SidebarItem icon={<FaUsers size={15} style={{color: '#3498db'}}/>} label="Social" />
          <SidebarItem icon={<FaTag size={15} style={{color: '#3c763d'}}/>} label="Promos" />
          <SidebarItem icon={<FaFlag size={15} style={{color: '#337ab7'}}/>} label="Updates" />
          <div className="border-t my-4"></div>
          <SidebarItem icon={<FaGears size={15} className="text-black"/>} label="Settings" />
          <SidebarItem icon={<FaInfoCircle size={15} className="text-black"/>} label="Support" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-auto space-y-2 md:space-y-0">
        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200 bg-white rounded-sm">
          <div className="flex items-center text-sm">
            <input type="text" placeholder="Search email in your inbox..." className="w-full px-4 py-2 border border-gray-300 outline-blue-500 "/>
            <button className="px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white transition-all border border-l-0 border-gray-300">Search</button>
          </div>
          <div className="hidden sm:flex justify-between">
            <div className="flex items-center mt-4 border w-fit" style={{color: '#303030'}}>
                <button className="px-2 py-1 transition-all flex items-center gap-1 hover:bg-blue-500 hover:text-white">
                    <FaRotate size={13}/>
                <span className="text-sm">Refresh</span>
                </button>
                <button className="px-2 py-2 border-l border-r transition-all hover:bg-blue-500 hover:text-white">
                    <FaEye size={13}/>
                </button>
                <button className="px-2 py-2 transition-all hover:bg-blue-500 hover:text-white">
                    <FaExclamation size={13}/>
                </button>
                <button className="px-2 py-2 border-l border-r  transition-all hover:bg-blue-500 hover:text-white">
                    <FaTrashCan size={13}/>
                </button>
                <button className="px-2 py-2 transition-all hover:bg-blue-500 hover:text-white">
                    <FaCheck size={13}/>
                </button>
                <button className="px-2 py-2 border-l transition-all hover:bg-blue-500 hover:text-white">
                    <FaTag size={13}/>
                </button>
            </div>
            <div className="flex items-center mt-4 border w-fit" style={{color: '#303030'}}>
                <button className="px-2 py-2 border-r transition-all hover:bg-blue-500 hover:text-white">
                    <FaArrowLeft size={13}/>
                </button>
                <button className="px-2 py-2 transition-all hover:bg-blue-500 hover:text-white">
                    <FaArrowRight size={13}/>
                </button>
            </div>
          </div>
        </div>

        {/* Email List */}
        <div className="bg-white px-3 min-w-[600px]">
          {emails.map((email, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr,2fr,auto] gap-4 px-6 py-4 border-b border-gray-200 hover:bg-gray-300
                        ${email.hasBg === true ? 'bg-gray-200' : ''}`}
            >
              <div className="flex items-center">
                <span className={`text-sm cursor-pointer ${email.hasBold ? 'font-bold': ''}`}>{email.sender}</span>
                {email.tag && (
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded ${
                      email.tag === "Finance" ? "bg-blue-600 text-white" : "bg-purple-600 text-white"}
                      ${email.tag === "Travel" ? "bg-red-600 text-white" : ""}
                    }`}
                  >
                    {email.tag}
                  </span>
                )}
              </div>
              <div className={`text-black text-sm cursor-pointer ${email.hasBold ? 'font-bold': ''}`}>{email.content}</div>
              <div className="flex items-center space-x-4">
                {email.hasAttachment && (
                  <span className="text-gray-700">
                    <FaPaperclip size={13} className="rotate-90"/>
                  </span>
                )}
                <span className="text-black text-sm whitespace-nowrap">{email.date}</span>
              </div>
            </div>
          ))}
          <div className="w-full flex items-center gap-1 bg-blue-600 text-white px-4 py-3 text-sm">
            <FaEye />
            <p>6 unread</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
      <span>{icon}</span>
      <span className="text-sm" style={{color: '#303030'}}>{label}</span>
    </div>
  )
}