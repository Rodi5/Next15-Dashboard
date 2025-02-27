"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import "react-datepicker/dist/react-datepicker.css"

const DatePicker = dynamic(() => import("react-datepicker"), {
  ssr: false,
})

interface EditableData {
  id: number
  field: string
  value: string | string[] | Date
  type: "text" | "select" | "date" | "datetime" | "tags" | "multiselect" | "textarea" | "checklist"
  options?: string[]
  required?: boolean
}

export default function XEditable() {
  const [data, setData] = useState<EditableData[]>([
    {
      id: 1,
      field: "Simple text field",
      value: "superuser",
      type: "text",
    },
    {
      id: 2,
      field: "Empty text field, required",
      value: "Empty",
      type: "text",
      required: true,
    },
    {
      id: 3,
      field: "Select, local array, custom display",
      value: "not selected",
      type: "select",
      options: ["not selected", "Male", "Female"],
    },
    {
      id: 4,
      field: "Select, remote array, no buttons",
      value: "Admin",
      type: "select",
      options: ["Guest", "Service", "Customer", "Operator", "Support", "Admin"],
    },
    {
      id: 5,
      field: "Select, error while loading",
      value: "Active",
      type: "select",
      options: ["Active", "Inactive", "Pending"],
    },
    {
      id: 6,
      field: "Datepicker",
      value: "25.02.2013",
      type: "date",
    },
    {
      id: 7,
      field: "Combodate (date)",
      value: "15.05.1984",
      type: "date",
    },
    {
      id: 8,
      field: "Combodate (datetime)",
      value: "Empty",
      type: "datetime",
    },
    {
      id: 9,
      field: "Bootstrap Datetimepicker",
      value: "15/03/2013 12:45",
      type: "datetime",
    },
    {
      id: 10,
      field: "Textarea, buttons below. Submit by ctrl+enter",
      value: "awesome\nuser!",
      type: "textarea",
    },
    {
      id: 11,
      field: "Checklist",
      value: ["peach", "apple"],
      type: "multiselect",
      options: ["banana", "peach", "apple", "watermelon", "orange"],
    },
    {
      id: 12,
      field: "Select2 (tags mode)",
      value: ["html", "javascript"],
      type: "tags",
      options: ["html", "javascript", "css", "ajax"],
    },
    {
      id: 13,
      field: "Select2 (dropdown mode)",
      value: ["Bahamas"],
      type: "multiselect",
      options: ["Benin", "Bhutan", "Jamaica", "Bouvet Island", "Botswana", "Samoa", "Brazil", "Bahamas"],
    },
  ])

  const [editingCell, setEditingCell] = useState<{
    item: EditableData
    position: { top: number; left: number }
  } | null>(null)

  const [error, setError] = useState<string | null>(null)
  const [editValue, setEditValue] = useState<string | string[] | Date | null>(null)
  const [showError, setShowError] = useState(false)

  const handleCellClick = (e: React.MouseEvent, item: EditableData) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    setEditingCell({
      item,
      position: {
        top: rect.bottom + window.scrollY,
        left: rect.left,
      },
    })
    setEditValue(item.value)
    setError(null)
    setShowError(item.field === "Select, error while loading")
  }

  const handleSave = (value: string | string[] | Date) => {
    if (editingCell) {
      if (editingCell.item.required && !value) {
        setError("This field is required")
        return
      }

      let formattedValue = value
      if (editingCell.item.type === "date" && value instanceof Date) {
        formattedValue = formatDate(value)
      } else if (editingCell.item.type === "datetime" && value instanceof Date) {
        formattedValue = formatDateTime(value)
      }

      setData((prevData) =>
        prevData.map((item) => (item.id === editingCell.item.id ? { ...item, value: formattedValue } : item)),
      )
      setEditingCell(null)
      setError(null)
      setShowError(false)
    }
  }

  const formatDate = (date: Date): string => {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join(".")
  }

  const formatDateTime = (date: Date): string => {
    return `${formatDate(date)} ${date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    })}`
  }

  const parseDate = (dateString: string): Date | null => {
    if (dateString === "Empty") return null
    const parts = dateString.split(/[./]/)
    if (parts.length !== 3) return null
    const [day, month, year] = parts.map(Number)
    if (isNaN(day) || isNaN(month) || isNaN(year)) return null
    return new Date(year, month - 1, day)
  }

  const parseDateTime = (dateTimeString: string): Date | null => {
    if (dateTimeString === "Empty") return null
    const [dateStr, timeStr] = dateTimeString.split(" ")
    const dateParts = dateStr.split(/[./]/)
    if (dateParts.length !== 3) return null
    const [day, month, year] = dateParts.map(Number)
    if (isNaN(day) || isNaN(month) || isNaN(year)) return null

    let hours = 0,
      minutes = 0
    if (timeStr) {
      const timeParts = timeStr.split(":")
      if (timeParts.length === 2) {
        ;[hours, minutes] = timeParts.map(Number)
        if (isNaN(hours) || isNaN(minutes)) return null
      }
    }

    return new Date(year, month - 1, day, hours, minutes)
  }

  const renderValue = (item: EditableData) => {
    switch (item.type) {
      case "tags":
      case "multiselect":
      case "checklist":
        return (
          <div className="flex flex-wrap gap-1">
            {Array.isArray(item.value) &&
              item.value.map((tag: string) => (
                <span key={tag} className="border-b border-dashed border-[#428bca] hover:text-[#2a6496] cursor-pointer">
                  {tag}
                </span>
              ))}
          </div>
        )
      case "textarea":
        return (
          <span className="border-b border-dashed border-[#428bca] hover:text-[#2a6496] cursor-pointer whitespace-pre-wrap">
            {item.value.toString()}
          </span>
        )
      default:
        return (
          <span className="border-b border-dashed border-[#428bca] hover:text-[#2a6496] cursor-pointer break-words">
            {item.value.toString()}
          </span>
        )
    }
  }

  const renderEditControl = (
    item: EditableData,
    onSave: (value: string | string[] | Date) => void,
    onClose: () => void,
  ) => {
    const handleSave = () => {
      if (editValue !== null) {
        onSave(editValue)
      }
      onClose()
    }

    switch (item.type) {
      case "date":
        return (
          <div className="flex flex-col gap-2 bg-white p-4 rounded shadow-lg">
            <div className="text-lg font-semibold mb-2 text-[#428bca]">
              {item.field === "Datepicker" ? "When you want vacation to start?" : "Select Date of birth"}
            </div>
            <DatePicker
              selected={
                typeof editValue === "string" ? parseDate(editValue) : editValue instanceof Date ? editValue : null
              }
              onChange={(date: Date | null) => {
                if (date) setEditValue(date)
              }}
              dateFormat="dd.MM.yyyy"
              className="w-full p-2 border rounded"
              calendarClassName="bg-white shadow-lg rounded-lg border !transform !translate-y-2 !w-fit"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              popperProps={{
                strategy: "fixed",
              }}
              popperPlacement="bottom-start"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
              >
                ✓
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )

      case "datetime":
        return (
          <div className="flex flex-col gap-2 bg-white p-4 rounded shadow-lg">
            <div className="text-lg font-semibold mb-2 text-[#428bca]">Setup event date and time</div>
            <DatePicker
              selected={
                typeof editValue === "string" ? parseDateTime(editValue) : editValue instanceof Date ? editValue : null
              }
              onChange={(date: Date | null) => {
                if (date) setEditValue(date)
              }}
              timeFormat="HH:mm"
              timeIntervals={1}
              dateFormat="dd.MM.yyyy HH:mm a"
              className="w-full p-2 border rounded"
              calendarClassName="bg-white shadow-lg rounded-lg border"
              showMonthDropdown
              showYearDropdown
              showTimeInput
              dropdownMode="select"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
              >
                ✓
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )

      case "select":
        return (
          <div className="flex flex-col gap-2">
            {showError ? (
              <div className="bg-white p-4 rounded shadow-lg min-w-[100px]">
                <div className="text-center font-semibold mb-2">Select status</div>
                <div className="text-red-500 text-sm mb-4">Error when loading list</div>
                <div className="flex justify-end gap-2">
                  <button onClick={onClose} className="px-3 py-1 text-sm bg-[#444] text-white  border rounded">
                    ✕
                  </button>
                </div>
              </div>
            ) : (
              <>
                <select
                  value={typeof editValue === "string" ? editValue : ""}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {item.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleSave}
                    className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
                  >
                    ✓
                  </button>
                  <button
                    onClick={onClose}
                    className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
                  >
                    ✕
                  </button>
                </div>
              </>
            )}
          </div>
        )

      case "tags":
      case "multiselect":
      case "checklist":
        return (
          <div className="p-2 bg-white rounded-lg shadow-lg min-w-[100px]">
            <div className="max-h-[150px] overflow-y-auto">
              {item.options?.map((option) => (
                <label key={option} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={Array.isArray(editValue) && editValue.includes(option)}
                    onChange={(e) => {
                      const newValue = e.target.checked
                        ? [...(Array.isArray(editValue) ? editValue : []), option]
                        : (Array.isArray(editValue) ? editValue : []).filter((v: string) => v !== option)
                      setEditValue(newValue)
                    }}
                    className="rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
              >
                ✓
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )

      case "textarea":
        return (
          <div className="flex flex-col gap-2">
            <textarea
              value={typeof editValue === "string" ? editValue : ""}
              onChange={(e) => setEditValue(e.target.value)}
              className="min-w-[200px] min-h-[100px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
              >
                ✓
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )

      default:
        return (
          <div className="flex gap-2">
            <input
              type="text"
              value={typeof editValue === "string" ? editValue : ""}
              onChange={(e) => setEditValue(e.target.value)}
              className="max-w-[150px] px-2 py-1 border rounded outline-blue-600"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-[#428bca] hover:bg-[#357ebd] rounded"
              >
                ✓
              </button>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm bg-[#444] text-white hover:bg-[#428bca] border rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="font-bold text-lg text-[#333333] mb-4">X-editable</h2>

      <p className="text-sm text-[#333333] leading-6 mb-4">
        There are a few classes working together for editable. Base class editableform is form with single input and two
        buttons. Input can be one of several input types (text, textarea, etc). Form markup is performed in plain HTML
        or can be extended by some library (bootstrap, jquery-ui). editableContainer includes editableform and shows it
        in popup or inline mode. When popup it can use any container for display (popover, tooltip, etc). Final class
        editable binds editableContainer to DOM element storing value and being updated after user submits new value.
      </p>
      <table className="w-full border-collapse bg-white">
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-[#f5f5f5]">
              <td className="border p-2 text-sm align-middle" style={{ width: "60%" }}>
                {item.field}
              </td>
              <td className="border p-2 text-sm align-middle cursor-pointer" onClick={(e) => handleCellClick(e, item)}>
                {renderValue(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCell && (
        <EditPopup
          position={editingCell.position}
          onClose={() => {
            setEditingCell(null)
            setEditValue(null)
            setError(null)
            setShowError(false)
          }}
        >
          {renderEditControl(editingCell.item, handleSave, () => {
            setEditingCell(null)
            setEditValue(null)
            setShowError(false)
          })}
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </EditPopup>
      )}
    </div>
  )
}

const EditPopup = ({
  position,
  children,
  onClose,
}: {
  position: { top: number; left: number }
  children: React.ReactNode
  onClose: () => void
}) => {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div
      ref={popupRef}
      style={{
        position: "fixed",
        top: Math.min(position.top, window.innerHeight - 200), // Prevent going off bottom
        left: Math.min(position.left, window.innerWidth - 300), // Prevent going off right
        maxHeight: "80vh",
        overflowY: "auto",
      }}
      className="absolute bg-white p-2 rounded-lg z-50"
    >
      {children}
    </div>
  )
}