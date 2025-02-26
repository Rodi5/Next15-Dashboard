"use client"

import { useRef, useEffect } from "react"

interface EditPopupProps {
  value: string
  onSave: (value: string) => void
  onClose: () => void
  position?: { top: number; left: number }
}

export default function EditPopup({ value, onSave, onClose, position = { top: 0, left: 0 } }: EditPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Handle click outside
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Add click listener
    document.addEventListener("mousedown", handleClickOutside)

    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  useEffect(() => {
    if (!popupRef.current || !position) return

    const rect = popupRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Ensure position values are within viewport bounds
    const safeTop = Math.min(Math.max(0, position.top), viewportHeight - rect.height)
    const safeLeft = Math.min(Math.max(0, position.left), viewportWidth - rect.width)

    popupRef.current.style.top = `${safeTop}px`
    popupRef.current.style.left = `${safeLeft}px`
  }, [position])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const newValue = formData.get("value") as string
    onSave(newValue)
  }

  return (
    <div
      ref={popupRef}
      className="fixed z-50 bg-white border border-gray-300 p-2 rounded shadow-xl min-w-[200px] max-w-[90vw]"
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
      }}
    >
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          name="value"
          defaultValue={value}
          className="flex-1 border border-blue-500 outline-none px-3 py-1 text-sm min-w-[150px] focus:ring-0"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
          ✓
        </button>
        <button
          type="button"
          onClick={onClose}
          className="border border-gray-500 hover:bg-blue-500 hover:text-white transition px-2 py-1 rounded font-bold text-sm"
        >
          ✕
        </button>
      </form>
    </div>
  )
}

