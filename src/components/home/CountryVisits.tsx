import { memo } from "react"
import Visits from "@/components/Visits"

const countryData = [
  { country: "Australia", fees: "1250", grow: 75, color: "#2563eb" },
  { country: "USA", fees: "1050", grow: 48, color: "#9333ea" },
  { country: "Canada", fees: "6350", grow: 55, color: "#65b12d" },
  { country: "India", fees: "950", grow: 33, color: "#D80027" },
  { country: "Bangladesh", fees: "3250", grow: 60, color: "#555" },
]

const CountryVisits = memo(function CountryVisits() {
  return (
    <div className="bg-white max-w-sm md:max-w-lg">
      <h3 className="text-md font-bold mb-2 px-6 pt-4" style={{ color: "#444" }}>
        Visits from countries
      </h3>
      {countryData.map((data, index) => (
        <Visits key={index} country={data.country} fees={data.fees} grow={data.grow} color={data.color} />
      ))}
    </div>
  )
})

export default CountryVisits