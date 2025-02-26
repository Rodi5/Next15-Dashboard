import { memo } from "react"

const browsers = [
  { name: "Google Chrome", percentage: "95.8", color: "#006DF0" },
  { name: "Mozila Firefox", percentage: "85.8", color: "#933EC5" },
  { name: "Apple Safari", percentage: "23.8", color: "#65b12d" },
  { name: "Internet Explorer", percentage: "55.8", color: "#D80027" },
  { name: "Opera mini", percentage: "28.8", color: "#f0ad4e" },
  { name: "Mozila Firefox", percentage: "26.8", color: "#9675ce" },
  { name: "Safari", percentage: "31.8", color: "#555" },
]

const BrowserStatus = memo(function BrowserStatus() {
  return (
    <div className="bg-white shadow-sm max-w-sm md:max-w-lg">
      <h3 className="font-bold text-md px-6 pt-4" style={{ color: "#444" }}>
        Browser Status
      </h3>
      <div className="px-6 py-3 space-y-2">
        {browsers.map((browser, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2 last:border-0">
            <p className="text-sm" style={{ color: "#303030" }}>
              {browser.name}
            </p>
            <span className="text-xs text-white px-2 py-1" style={{ backgroundColor: browser.color }}>
              {browser.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})

export default BrowserStatus