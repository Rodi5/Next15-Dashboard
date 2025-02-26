"use client"

import { useState } from "react"
import { FaCheck, FaTableCells, FaRotate, FaDownload, FaChevronDown, FaChevronUp, FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)
import EditPopup from "./EditPopup"
import { FaChevronCircleDown, FaChevronCircleUp, FaListAlt } from "react-icons/fa"

interface Project {
  id: number
  task: string
  email: string
  phone: string
  data: Array<number>
  completed: number
  date: string
  price: string
}

const initialProjects: Project[] = [
  {
    id: 1,
    task: "Web Development",
    email: "admin@uttara.com",
    phone: "+880196206739",
    data: [1, 5],
    completed: 10,
    date: "Jul 14, 2017",
    price: "$5455",
  },
  {
    id: 2,
    task: "Graphic Design",
    email: "fox@itpark.com",
    phone: "+880176206304",
    data: [4, 2],
    completed: 70,
    date: "Feb 2, 2017",
    price: "$8756",
  },
  {
    id: 3,
    task: "Software Development",
    email: "gumre@hash.com",
    phone: "+880186206308",
    data: [2, 4],
    completed: 5,
    date: "Sep 5, 2017",
    price: "$9875",
  },
  {
    id: 4,
    task: "Woocommerce",
    email: "kyum@frok.com",
    phone: "+880196206547",
    data: [1, 5],
    completed: 15,
    date: "Oct 10, 2017",
    price: "$3254",
  },
  {
    id: 5,
    task: "Joomla",
    email: "jams@game.com",
    phone: "+880196209745",
    data: [4, 2],
    completed: 80,
    date: "Nov 20, 2017",
    price: "$8745",
  },
  {
    id: 6,
    task: "Wordpress",
    email: "flat@yem.com",
    phone: "+880196225781",
    data: [2, 4],
    completed: 30,
    date: "Aug 25, 2017",
    price: "$789879",
  },
  {
    id: 7,
    task: "Ecommerce",
    email: "hasan@wpm.com",
    phone: "+880196254863",
    data: [1, 5],
    completed: 15,
    date: "July 17, 2017",
    price: "$21424",
  },
  {
    id: 8,
    task: "Android Apps",
    email: "ATM@devep.com",
    phone: "+880196875469",
    data: [1, 5],
    completed: 15,
    date: "June 11, 2017",
    price: "$78978",
  },
  {
    id: 9,
    task: "Prestashop",
    email: "presta@Prest.com",
    phone: "+880196067524",
    data: [1, 5],
    completed: 15,
    date: "May 9, 2017",
    price: "$45645",
  },
  {
    id: 10,
    task: "Game Development",
    email: "Dev@game.com",
    phone: "+880196067457",
    data: [1, 5],
    completed: 15,
    date: "April 5, 2017",
    price: "$456545",
  },
  {
    id: 11,
    task: "Angular Js",
    email: "gular@angular.com",
    phone: "+8801962067124",
    data: [1, 5],
    completed: 15,
    date: "Dec 1, 2017",
    price: "$645455",
  },
  {
    id: 12,
    task: "Opencart",
    email: "open@cart.com",
    phone: "+8801962067587",
    data: [1, 5],
    completed: 15,
    date: "Jan 6, 2017",
    price: "$78978",
  },
  {
    id: 13,
    task: "Education",
    email: "john@example.com",
    phone: "+8801962067471",
    data: [1, 5],
    completed: 15,
    date: "Feb 6, 2016",
    price: "$456456",
  },
  {
    id: 14,
    task: "Construction",
    email: "mary@example.com",
    phone: "+8801962012457",
    data: [1, 5],
    completed: 15,
    date: "Jan 6, 2016",
    price: "$87978",
  },
  {
    id: 15,
    task: "Real Estate",
    email: "july@example.com",
    phone: "+8801962067309",
    data: [1, 5],
    completed: 15,
    date: "Dec 1, 2016",
    price: "$454554",
  },
  {
    id: 16,
    task: "Personal Regume",
    email: "john@example.com",
    phone: "+8801962067306",
    data: [1, 5],
    completed: 15,
    date: "May 9, 2016",
    price: "$564555",
  },
  {
    id: 17,
    task: "Admin Template",
    email: "mary@example.com",
    phone: "+8801962067305",
    data: [1, 5],
    completed: 15,
    date: "June 11, 2016",
    price: "$454565",
  },
  {
    id: 18,
    task: "FrontEnd",
    email: "july@example.com",
    phone: "+8801962067304",
    data: [1, 5],
    completed: 15,
    date: "May 9, 2015",
    price: "$456546",
  },
  {
    id: 19,
    task: "Backend",
    email: "john@range.com",
    phone: "+8801962067303",
    data: [1, 5],
    completed: 15,
    date: "Feb 9, 2014",
    price: "$564554",
  },
  {
    id: 20,
    task: "Java Advance",
    email: "lamon@ghs.com",
    phone: "+8801962067302",
    data: [1, 5],
    completed: 15,
    date: "July 6, 2014",
    price: "$789889",
  },
  {
    id: 21,
    task: "Jquery Advance",
    email: "hasad@uth.com",
    phone: "+8801962067301",
    data: [1, 5],
    completed: 15,
    date: "Jun 6, 2013",
    price: "$4565656",
  },
]

export default function DataTables() {
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showDropdown, setShowDropdown] = useState(false)
  const [editingCell, setEditingCell] = useState<{
    project: Project
    field: keyof Project
    position: { top: number; left: number }
  } | null>(null)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [showAllRows, setShowAllRows] = useState(false)
  const [showColumnSelector, setShowColumnSelector] = useState(false)
  const [showExportMenu, setShowExportMenu] = useState(false)
  const [isListView, setIsListView] = useState(false)
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    task: true,
    email: true,
    phone: true,
    completed: true,
    date: true,
    price: true,
    action: true,
  })
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const toggleColumn = (column: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column as keyof typeof prev],
    }))
  }

  const handleExport = (format: string) => {
    // Define a type for the keys we want to export
    type ExportableKey = Exclude<keyof Project, "data" | "action">

    // Create a type-safe version of visibleColumns
    const typeSafeVisibleColumns = visibleColumns as Record<ExportableKey, boolean>

    // Get visible data only
    const dataToExport = displayedProjects.map((project) => {
      const exportObj: Partial<Record<ExportableKey, string | number>> = {};
      (Object.keys(typeSafeVisibleColumns) as ExportableKey[]).forEach((key) => {
        if (typeSafeVisibleColumns[key]) {
          const value = project[key]
          if (value !== undefined) {
            exportObj[key] = typeof value === "number" ? value : String(value)
          }
        }
      })
      return exportObj
    })

    let content = ""
    let filename = `projects-export-${new Date().getTime()}`
    let mimeType = ""

    switch (format.toLowerCase()) {
      case "json":
        content = JSON.stringify(dataToExport, null, 2)
        filename += ".json"
        mimeType = "application/json"
        break

      case "xml":
        content = `<?xml version="1.0" encoding="UTF-8"?>\n<projects>\n${dataToExport
          .map((project) => {
            return `  <project>\n${Object.entries(project)
              .map(([key, value]) => `    <${key}>${value}</${key}>`)
              .join("\n")}\n  </project>`
          })
          .join("\n")}\n</projects>`
        filename += ".xml"
        mimeType = "application/xml"
        break

      case "csv":
        const headers = Object.keys(dataToExport[0])
        content = [
          headers.join(","),
          ...dataToExport.map((row) => headers.map((header) => `"${row[header as keyof typeof row]}"`).join(",")),
        ].join("\n")
        filename += ".csv"
        mimeType = "text/csv"
        break

      case "txt":
        content = dataToExport
          .map((project) =>
            Object.entries(project)
              .map(([key, value]) => `${key}: ${value}`)
              .join("\n"),
          )
          .join("\n\n")
        filename += ".txt"
        mimeType = "text/plain"
        break

      case "sql":
        content =
          `INSERT INTO projects (${Object.keys(dataToExport[0]).join(", ")})\nVALUES\n` +
          dataToExport
            .map(
              (project) =>
                `(${Object.values(project)
                  .map((value) => (typeof value === "string" ? `'${value}'` : value))
                  .join(", ")})`,
            )
            .join(",\n") +
          ";"
        filename += ".sql"
        mimeType = "application/sql"
        break

      case "ms-excel":
        // For Excel, we'll create a CSV that Excel can open
        const excelHeaders = Object.keys(dataToExport[0])
        content = [
          excelHeaders.join("\t"),
          ...dataToExport.map((row) => excelHeaders.map((header) => `${row[header as keyof typeof row]}`).join("\t")),
        ].join("\n")
        filename += ".xls"
        mimeType = "application/vnd.ms-excel"
        break
    }

    // Create and trigger download
    const blob = new Blob([content], { type: mimeType })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    setShowExportMenu(false)
  }

  const filteredProjects = projects.filter((project) =>
    Object.values(project).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const pageCount = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const displayedProjects = showAllRows ? filteredProjects : paginatedProjects

  const handleCellClick = (e: React.MouseEvent, project: Project, field: keyof Project) => {
    if (field === "id") return
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    setEditingCell({
      project,
      field,
      position: {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      },
    })
  }

  const handleSaveEdit = (value: string) => {
    if (editingCell) {
      const updatedProjects = projects.map((p) =>
        p.id === editingCell.project.id ? { ...p, [editingCell.field]: value } : p,
      )
      setProjects(updatedProjects)
      setEditingCell(null)
    }
  }
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(displayedProjects.map((project) => project.id))
    } else {
      setSelectedRows([])
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 bg-white p-4">
        {/* Header Controls */}
        <h2 className="font-bold text-xl">Projects Data Table</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between w-[180px] px-4 py-2 bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
            >
              <span className="text-sm">Export Basic</span>
              {showDropdown ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
            </button>
            {showDropdown && (
              <div className="absolute z-10 w-[180px] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <button
                  className="w-full text-sm px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Export Basic
                </button>
                <button
                  className="w-full text-sm px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Export All
                </button>
                <button
                  className="w-full text-sm px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Export Selected
                </button>
              </div>
            )}
          </div>

          {/* Search and Actions */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[200px] px-3 py-1 border border-gray-300 outline-blue-500"
              />
            </div>
            <div className="flex border border-gray-300 rounded">
              <button onClick={() => setShowAllRows(!showAllRows)} className="p-2 hover:bg-blue-500 hover:text-white transition">
                {showAllRows ? <FaChevronCircleUp className="w-4 h-4" /> : <FaChevronCircleDown className="w-4 h-4" />}
              </button>
              <button className="p-2 border-l border-r hover:bg-blue-500 hover:text-white transition">
                <FaRotate className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-blue-500 hover:text-white transition" onClick={() => setIsListView(!isListView)}>
                <FaListAlt className="w-4 h-4" />
              </button>
              <div className="relative">
                <button
                  className="flex items-center gap-1 p-2 hover:bg-blue-500 hover:text-white transition border-l border-r"
                  onClick={() => setShowColumnSelector(!showColumnSelector)}
                >
                  <FaTableCells className="w-4 h-4" />
                  <FaChevronDown className="w-2 h-2" />
                </button>
                {showColumnSelector && (
                  <div className="absolute z-10 right-0 mt-1 bg-white border border-gray-300  shadow-lg p-2">
                    {Object.keys(visibleColumns).map((column) => (
                      <label key={column} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={visibleColumns[column as keyof typeof visibleColumns]}
                          onChange={() => toggleColumn(column)}
                          className="rounded border-gray-300"
                        />
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button className="p-2 hover:bg-blue-500 hover:text-white transition" onClick={() => setShowExportMenu(!showExportMenu)}>
                  <FaDownload className="w-4 h-4" />
                </button>
                {showExportMenu && (
                  <div className="absolute w-32 z-10 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {["JSON", "XML", "CSV", "TXT", "SQL", "MS-Excel"].map((format) => (
                      <button
                        key={format}
                        className="w-full text-sm px-4 py-1 text-left hover:bg-gray-100"
                        onClick={() => handleExport(format)}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Rows per page selector */}
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <span className="text-sm text-gray-500">rows per page</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md">
          {isListView ? (
            <div className="divide-y divide-gray-200">
              {displayedProjects.map((project) => (
                <div key={project.id} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  <div className="grid gap-2">
                    {visibleColumns.id && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">ID</span>
                        <span>{project.id}</span>
                      </div>
                    )}
                    {visibleColumns.task && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Task</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "task")}>
                          {project.task}
                        </span>
                      </div>
                    )}
                    {visibleColumns.email && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Email</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "email")}>
                          {project.email}
                        </span>
                      </div>
                    )}
                    {visibleColumns.phone && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Phone</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "phone")}>
                          {project.phone}
                        </span>
                      </div>
                    )}
                    {visibleColumns.completed && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Completed</span>
                        <div className="w-8 h-8 flex-shrink-0">
                          <Pie
                            data={{
                              datasets: [
                                {
                                  data: project.data,
                                  backgroundColor: ["#2196f3", "#d7d7d7"],
                                  borderWidth: 0,
                                },
                              ],
                            }}
                            options={pieOptions}
                          />
                        </div>
                      </div>
                    )}
                    {visibleColumns.completed && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Task</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "completed")}>
                          {project.completed}%
                        </span>
                      </div>
                    )}
                    {visibleColumns.date && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Date</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "date")}>
                          {project.date}
                        </span>
                      </div>
                    )}
                    {visibleColumns.price && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Price</span>
                        <span className="cursor-pointer" onClick={(e) => handleCellClick(e, project, "price")}>
                          {project.price}
                        </span>
                      </div>
                    )}
                    {visibleColumns.action && (
                      <div className="flex">
                        <span className="w-24 text-sm font-medium">Action</span>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FaCheck className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-6 py-3 border">
                    <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.length === displayedProjects.length && displayedProjects.length > 0}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                  </th>
                  {visibleColumns.id && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">ID</th>
                  )}
                  {visibleColumns.task && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Task</th>
                  )}
                  {visibleColumns.email && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Email</th>
                  )}
                  {visibleColumns.phone && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Phone</th>
                  )}
                  {visibleColumns.completed && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Completed</th>
                  )}
                  {visibleColumns.completed && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Task</th>
                  )}
                  {visibleColumns.date && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Date</th>
                  )}
                  {visibleColumns.price && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Price</th>
                  )}
                  {visibleColumns.action && (
                    <th className="px-6 py-3 border text-left text-sm font-bold text-[#333] tracking-wider">Action</th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-1 whitespace-nowrap border">
                    <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.includes(project.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRows([...selectedRows, project.id])
                          } else {
                            setSelectedRows(selectedRows.filter((id) => id !== project.id))
                          }
                        }}
                      />
                    </td>
                    {visibleColumns.id && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "id")}
                      >
                        {project.id}
                      </td>
                    )}
                    {visibleColumns.task && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "task")}
                      >
                        {project.task}
                      </td>
                    )}
                    {visibleColumns.email && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "email")}
                      >
                        {project.email}
                      </td>
                    )}
                    {visibleColumns.phone && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "phone")}
                      >
                        {project.phone}
                      </td>
                    )}
                    {visibleColumns.completed && (
                      <td className="px-6 py-1 whitespace-nowrap border text-sm">
                        <div className="w-5 h-5 flex-shrink-0">
                          <Pie
                            data={{
                              datasets: [
                                {
                                  data: project.data,
                                  backgroundColor: ["#2196f3", "#d7d7d7"],
                                  borderWidth: 0,
                                },
                              ],
                            }}
                            options={pieOptions}
                          />
                        </div>
                      </td>
                    )}
                    {visibleColumns.completed && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "completed")}
                      >
                        {project.completed}%
                      </td>
                    )}
                    {visibleColumns.date && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "date")}
                      >
                        {project.date}
                      </td>
                    )}
                    {visibleColumns.price && (
                      <td
                        className="px-6 py-1 whitespace-nowrap cursor-pointer border text-sm"
                        onClick={(e) => handleCellClick(e, project, "price")}
                      >
                        {project.price}
                      </td>
                    )}
                    {visibleColumns.action && (
                      <td className="px-6 py-1 whitespace-nowrap border text-sm">
                        <button className="text-gray-600 hover:text-gray-900">
                          <FaCheck className="w-4 h-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {!showAllRows && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredProjects.length)} of {filteredProjects.length} rows
            </p>
            <div className="flex flex-col sm:flex-row gap-1">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <FaChevronLeft size={10} />
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === pageCount
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
                onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
              >
                <FaChevronRight size={10}/>
              </button>
            </div>
          </div>
        )}
      </div>
      {editingCell && (
        <EditPopup
          value={String(editingCell.project[editingCell.field])}
          onSave={handleSaveEdit}
          onClose={() => setEditingCell(null)}
          position={editingCell.position}
        />
      )}
    </div>
  )
}
