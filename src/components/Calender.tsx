"use client"
import { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
  addDays,
  startOfDay,
  endOfDay,
  eachHourOfInterval,
} from "date-fns"

interface Event {
  title: string
  allDay?: boolean
  start: Date
  end: Date
  color?: string
}

const events: Event[] = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(2025, 0, 1),
    end: new Date(2025, 0, 1),
    color: "#3b82f6",
  },
  {
    title: "Long Event",
    start: new Date(2025, 0, 7),
    end: new Date(2025, 0, 10),
    color: "#8b5cf6",
  },
  {
    title: "Conference",
    start: new Date(2025, 0, 7),
    end: new Date(2025, 0, 8),
    color: "#f59e0b",
  },
  {
    title: "10:30a Meeting",
    start: new Date(2025, 0, 8, 10, 30),
    end: new Date(2025, 0, 8, 12, 30),
    color: "#2563eb",
  },
  {
    title: "Lunch",
    start: new Date(2025, 0, 8, 12, 0),
    end: new Date(2025, 0, 8, 13, 0),
    color: "#2563eb",
  },
  {
    title: "Birthday Party",
    start: new Date(2025, 0, 9, 7, 0),
    end: new Date(2025, 0, 9, 10, 30),
    color: "#ef4444",
  },
  {
    title: "Repeating Event",
    start: new Date(2025, 0, 15, 16, 0),
    end: new Date(2025, 0, 15, 17, 0),
    color: "#22c55e",
  },
]

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"month" | "week" | "day" | "list">("month")

  const nextPeriod = () => {
    switch (view) {
      case "month":
        setCurrentDate(addMonths(currentDate, 1))
        break
      case "week":
        setCurrentDate(addDays(currentDate, 7))
        break
      case "day":
        setCurrentDate(addDays(currentDate, 1))
        break
      default:
        setCurrentDate(addDays(currentDate, 7))
    }
  }

  const prevPeriod = () => {
    switch (view) {
      case "month":
        setCurrentDate(subMonths(currentDate, 1))
        break
      case "week":
        setCurrentDate(addDays(currentDate, -7))
        break
      case "day":
        setCurrentDate(addDays(currentDate, -1))
        break
      default:
        setCurrentDate(addDays(currentDate, -7))
    }
  }

  const goToToday = () => setCurrentDate(new Date())

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter(
      (event) =>
        isSameDay(day, event.start) ||
        (event.end && isSameDay(day, event.end)) ||
        (event.end && day >= event.start && day <= event.end),
    )
  }

  const formatEventTime = (date: Date) => {
    return format(date, "ha").toLowerCase()
  }

  const renderMonthView = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const calendarStart = startOfWeek(monthStart)
    const calendarEnd = endOfWeek(monthEnd)
    const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="bg-white p-2 text-center text-sm font-medium">
            {day}
          </div>
        ))}
        {calendarDays.map((day) => {
          const dayEvents = getEventsForDay(day)
          const isToday = isSameDay(day, new Date())
          const isCurrentMonth = isSameMonth(day, currentDate)

          return (
            <div
              key={day.toString()}
              className={`bg-white p-1 min-h-[100px] ${
                !isCurrentMonth ? "text-gray-400" : ""
              } ${isToday ? "bg-blue-50" : ""}`}
            >
              <div className="text-right text-sm p-1">{format(day, "d")}</div>
              <div className="space-y-1">
                {dayEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="text-xs p-1 rounded truncate"
                    style={{
                      backgroundColor: event.color || "#3b82f6",
                      color: "white",
                    }}
                  >
                    {!event.allDay && `${formatEventTime(event.start)} `}
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderWeekView = () => {
    const weekStart = startOfWeek(currentDate)
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weekDays.map((day) => {
          const dayEvents = getEventsForDay(day)
          const isToday = isSameDay(day, new Date())

          return (
            <div key={day.toString()} className={`bg-white p-2 ${isToday ? "bg-blue-50" : ""}`}>
              <div className="text-sm font-medium mb-2">{format(day, "EEE d")}</div>
              <div className="space-y-1">
                {dayEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="text-xs p-1 rounded truncate"
                    style={{
                      backgroundColor: event.color || "#3b82f6",
                      color: "white",
                    }}
                  >
                    {!event.allDay && `${formatEventTime(event.start)} `}
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderDayView = () => {
    const dayStart = startOfDay(currentDate)
    const dayEnd = endOfDay(currentDate)
    const hours = eachHourOfInterval({ start: dayStart, end: dayEnd })
    const dayEvents = getEventsForDay(currentDate)

    return (
      <div className="grid grid-cols-1 gap-px bg-gray-200">
        {hours.map((hour) => (
          <div key={hour.toString()} className="bg-white p-2 min-h-[60px]">
            <div className="text-sm text-gray-500">{format(hour, "ha")}</div>
            <div className="space-y-1">
              {dayEvents
                .filter((event) => {
                  const eventHour = event.start.getHours()
                  return eventHour === hour.getHours()
                })
                .map((event, idx) => (
                  <div
                    key={idx}
                    className="text-xs p-1 rounded truncate"
                    style={{
                      backgroundColor: event.color || "#3b82f6",
                      color: "white",
                    }}
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderListView = () => {
    const sortedEvents = [...events].sort((a, b) => a.start.getTime() - b.start.getTime())

    return (
      <div className="space-y-2">
        {sortedEvents.map((event, idx) => (
          <div key={idx} className="bg-white p-3 rounded shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-500">
                  {format(event.start, "MMM d, yyyy")}
                  {!event.allDay && ` ${format(event.start, "h:mm a")}`}
                </div>
              </div>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: event.color || "#3b82f6" }} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6">
      <div className="overflow-x-auto max-w-full">
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Calendar Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
            <div className="flex space-x-2">
              <button onClick={prevPeriod} className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                {"<"}
              </button>
              <button onClick={nextPeriod} className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                {">"}
              </button>
              <button onClick={goToToday} className="px-4 py-1 text-blue-600 hover:bg-blue-50 rounded">
                today
              </button>
            </div>
            <h2 className="text-xl font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
            <div className="flex space-x-2">
              {(["month", "week", "day", "list"] as const).map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType)}
                  className={`px-3 py-1 rounded transition-colors ${
                    view === viewType ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {viewType}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Content */}
          <div className="overflow-x-auto">
            {view === "month" && renderMonthView()}
            {view === "week" && renderWeekView()}
            {view === "day" && renderDayView()}
            {view === "list" && renderListView()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar