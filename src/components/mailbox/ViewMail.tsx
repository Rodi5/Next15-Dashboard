"use client"

import { FaArrowRight, FaEnvelope, FaFileAudio, FaFileExcel, FaFilePdf, FaFlag, FaInfoCircle, FaPaperclip, FaPrint, FaReply } from "react-icons/fa"
import {
  FaPaperPlane,
  FaPencil,
  FaTrash,
  FaPlane,
  FaChartLine,
  FaUsers,
  FaTag,
  FaGears,
  FaFileZipper,
} from "react-icons/fa6"



export default function ViewMail() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-4">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-4 rounded-sm self-start">
        <nav className="space-y-1">
          <button className="bg-blue-600 text-white py-1.5 text-sm rounded-md w-full">Compose</button>
          <div className="flex items-center px-3 py-2 text-gray-700 font-medium">
            <FaEnvelope size={15} className="text-black"/>
            <span className="text-sm ml-2.5">Inbox</span>
            <span className="ml-auto text-sm">12</span>
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
          <div className="flex justify-between items-center">
            <p className="text-lg" style={{color: '#333'}}>Email view</p>
            <p className="text-sm" style={{color: '#777'}}>08:26 PM (16 hours ago)</p>
          </div>
          <div className="text-sm my-4 leading-6" style={{color: '#333'}}>
            <p>Subject: Lorem Ipsum has been the industry&apos;s standard dummy text ever</p>
            <p>From: <span className="text-blue-500 hover:text-red-600 cursor-pointer">example.@email.com</span></p>
            <p>Date: 14.10.2016</p>
          </div>
          <div className="" style={{color: '#303030'}}>
            <h3 className="text-lg font-bold">Hello Jonathan!</h3>
            <p className="text-sm mt-2">Dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more</p>
            <p className="text-sm my-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. recently with.</p>
            <p className="text-sm">Mark Smith</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 mt-5 mb-4" style={{color: '#303030'}}>
            <FaPaperclip size={13} className="-rotate-90"/>
            <p className="text-sm">3 attachments - </p>
            <button className="flex items-center w-fit text-xs border border-gray-300 hover:bg-gray-300 transition-all rounded-sm bg-transparent px-1 py-0.5">
                Download all in zip format
                <FaFileZipper className="ml-1" size={12}/>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6">
            <div className="border border-gray-200 flex flex-col max-w-sm sm:w-full">
                <FaFilePdf size={40} className="mx-auto my-4 flex justify-center items-center" color="#3498db"/>
                <div className="border-t bg-red-600"></div>
                <div className="bg-gray-100">
                    <button className="text-sm  p-2 mr-auto" style={{color: '#303030'}}>Document_2016.doc</button>
                </div>
            </div>
            <div className="border border-gray-200 flex flex-col max-w-sm sm:w-full">
                <FaFileAudio size={40} className="mx-auto my-4 flex justify-center items-center" color="#ffb606"/>
                <div className="border-t bg-red-600"></div>
                <div className="bg-gray-100">
                    <button className="text-sm p-2 mr-auto" style={{color: '#303030'}}>Audio_2016.doc</button>
                </div>
            </div>
            <div className="border border-gray-200 flex flex-col max-w-sm sm:w-full">
                <FaFileExcel size={40} className="mx-auto my-4 flex justify-center items-center" color="#3c763d"/>
                <div className="border-t bg-red-600"></div>
                <div className="bg-gray-100">
                    <button className="text-sm p-2 mr-auto" style={{color: '#303030'}}>Sheets_2016.doc</button>
                </div>
            </div>
          </div>
          <div className="border-t border-gray-300 bg-gray-100 mt-4 mb-2 px-4 flex flex-row flex-wrap justify-end" style={{color: '#333'}}>
            <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all">
                <FaReply size={14}/>
                Replay
            </button>
            <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all">
                <FaArrowRight size={14}/>
                Forward
            </button>
            <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all">
                <FaPrint size={14}/>
                Print
            </button>
            <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all">
                <FaTrash size={14}/>
                Remove
            </button>
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