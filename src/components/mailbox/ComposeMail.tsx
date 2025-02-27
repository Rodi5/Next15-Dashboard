"use client"

import type React from "react"
import { useState } from "react"
import {
  FaEnvelope,
  FaFlag,
  FaInfoCircle,
  FaList,
  FaListOl,
  FaTable,
  FaLink,
  FaImage,
  FaCode,
  FaQuestionCircle,
  FaRegEdit,
  FaPaperclip,
} from "react-icons/fa"
import { FaPaperPlane, FaPencil, FaTrash, FaPlane, FaChartLine, FaUsers, FaTag, FaGears } from "react-icons/fa6"
import { useEditor, EditorContent } from "@tiptap/react"
import { TextStyle } from '@tiptap/extension-text-style';
import { FontFamily } from '@tiptap/extension-font-family';
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Image from "@tiptap/extension-image"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import Link from "@tiptap/extension-link"

const ComposeMail: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState("Roboto")

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      FontFamily.configure({
        types: ['TextStyle'],
      }),
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: `<p style="font-weight: bold;">Hello Jonathan!</p>
    <p>Dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.</p>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. recently with.</p>
    <p>Mark Smith</p>`,
  })

  const fonts = ["Roboto", "Arial", "Times New Roman", "Helvetica", "Georgia"]

  const [_image, setImage] = useState<File | null>(null)

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      setImage(file)
  }
  const handleImageClick = () => {
    document.getElementById('imageUpload')?.click()
}

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
    setImage(file)
    }
}
  const handleFontChange = (font: string) => {
    setSelectedFont(font)
    editor?.chain().focus().setFontFamily(font).run()
  }

  const handleLink = () => {
    const url = window.prompt("Enter URL:")
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run()
    }
  }

  const handleImage = () => {
    const url = window.prompt("Enter image URL:")
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }

  const handleTable = () => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-4">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-4 rounded-sm self-start">
        <nav className="space-y-1">
          <button className="bg-blue-600 text-white py-1.5 text-sm rounded-md w-full">Compose</button>
          <div className="flex items-center px-3 py-2 text-gray-700 font-medium">
            <FaEnvelope size={15} className="text-black" />
            <span className="text-sm ml-2.5">Inbox</span>
            <span className="ml-auto text-sm">12</span>
          </div>
          <SidebarItem icon={<FaPaperPlane size={15} className="text-black" />} label="Sent" />
          <SidebarItem icon={<FaPencil size={15} className="text-black" />} label="Draft" />
          <SidebarItem icon={<FaTrash size={15} className="text-black" />} label="Trash" />
          <div className="border-t my-4"></div>
          <SidebarItem
            icon={<FaPlane size={15} className="-rotate-45" style={{ color: "#e74c3c" }} />}
            label="Travel"
          />
          <SidebarItem icon={<FaChartLine size={15} style={{ color: "#ffb606" }} />} label="Finance" />
          <SidebarItem icon={<FaUsers size={15} style={{ color: "#3498db" }} />} label="Social" />
          <SidebarItem icon={<FaTag size={15} style={{ color: "#3c763d" }} />} label="Promos" />
          <SidebarItem icon={<FaFlag size={15} style={{ color: "#337ab7" }} />} label="Updates" />
          <div className="border-t my-4"></div>
          <SidebarItem icon={<FaGears size={15} className="text-black" />} label="Settings" />
          <SidebarItem icon={<FaInfoCircle size={15} className="text-black" />} label="Support" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white rounded-sm">
        <h2 className="text-lg mb-6">New message</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="w-20 text-sm font-bold">To:</label>
            <input type="email" placeholder="example@email.com" className="flex-1 w-full p-2 border border-gray-200 rounded-sm text-sm"/>
          </div>

          <div className="flex items-center">
            <label className="w-20 text-sm font-bold">Cc:</label>
            <input type="text" className="flex-1 w-full p-2 text-sm border border-gray-200 rounded-sm" />
          </div>

          <div className="flex items-center">
            <label className="w-20 text-sm font-bold">Subject:</label>
            <input type="text" placeholder="Subject" className="flex-1 w-full p-2 text-sm border border-gray-200 rounded-sm" />
          </div>

          <div className="border border-gray-200 rounded-sm">
            <div className="flex items-center flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => editor?.chain().focus().run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isFocused ? "bg-gray-200" : ""}`}
              >
                <FaPencil size={14} />
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={`p-1.5 hover:bg-gray-200 rounded font-bold ${editor?.isActive("bold") ? "bg-gray-200" : ""}`}
              >
                B
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
                className={`p-1.5 hover:bg-gray-200 rounded underline ${editor?.isActive("underline") ? "bg-gray-200" : ""}`}
              >
                U
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("codeBlock") ? "bg-gray-200" : ""}`}
              >
                <span className="font-mono">{"<>"}</span>
              </button>
              <select
                className="px-2 py-1 border border-gray-200 rounded mx-1"
                value={selectedFont}
                onChange={(e) => handleFontChange(e.target.value)}
              >
                {fonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
              <button
                onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""}`}
              >
                A
              </button>
              <div className="h-5 w-px bg-gray-300 mx-1" />
              <button
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("bulletList") ? "bg-gray-200" : ""}`}
              >
                <FaList size={14} />
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("orderedList") ? "bg-gray-200" : ""}`}
              >
                <FaListOl size={14} />
              </button>
              <button
                onClick={() => editor?.chain().focus().setTextAlign("justify").run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive({ textAlign: "justify" }) ? "bg-gray-200" : ""}`}
              >
                ≡
              </button>
              <div className="h-5 w-px bg-gray-300 mx-1" />
              <button onClick={handleTable} className="p-1.5 hover:bg-gray-200 rounded">
                <FaTable size={14} />
              </button>
              <button
                onClick={handleLink}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("link") ? "bg-gray-200" : ""}`}
              >
                <FaLink size={14} />
              </button>
              <button onClick={handleImage} className="p-1.5 hover:bg-gray-200 rounded">
                <FaImage size={14} />
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleCode().run()}
                className={`p-1.5 hover:bg-gray-200 rounded ${editor?.isActive("code") ? "bg-gray-200" : ""}`}
              >
                <FaCode size={14} />
              </button>
              <div className="h-5 w-px bg-gray-300 mx-1" />
              <button className="p-1.5 hover:bg-gray-200 rounded">
                <FaQuestionCircle size={14} />
              </button>
            </div>
            <EditorContent editor={editor} className="w-full p-4 min-h-[300px] prose max-w-none focus:outline-none" />
          </div>
          <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm cursor-pointer"
                onDrop={handleImageDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={handleImageClick}
              >
                <input type="file" id="imageUpload" className="hidden " onChange={handleImageChange} accept="image/*"/>
                <div className="flex flex-col items-center ">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <p className="text-sm font-bold text-gray-500">
                    Drop files here or click to upload.
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    (This is just a demo dropzone. Selected image is not actually uploaded.)
                  </p>
                </div>
              </div>
        </div>
        <div className="p-4 border-b border-gray-200 bg-white rounded-sm">
          <div className="border-t border-gray-300 bg-gray-100 mt-4 mb-2 px-4 flex flex-row flex-wrap justify-between" style={{ color: "#333" }}>
            <div className="flex">
              <button className="p-2 border rounded-md bg-blue-600 text-white flex items-center gap-1 text-sm my-2 transition-all mr-1">Send email</button>
              <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all rounded-md">
                <FaPaperclip className="-rotate-90" size={14} />
              </button>
              <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all rounded-md">
                <FaImage size={14} />
              </button>
            </div>
            <div className="flex">
              <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all rounded-md">
                <FaRegEdit size={14} />
                Save
              </button>
              <button className="p-2 border border-gray-300 bg-white flex items-center gap-1 text-sm my-2 hover:bg-blue-600 hover:text-white transition-all rounded-md">
                <FaTrash size={14} />
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
      <span>{icon}</span>
      <span className="text-sm" style={{ color: "#303030" }}>
        {label}
      </span>
    </div>
  )
}

export default ComposeMail