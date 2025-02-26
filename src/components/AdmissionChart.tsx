"use client"

import { FaShare, FaTrash } from "react-icons/fa"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const data = [
  { year: 2012, Python: 0, PHP: 0, Java: 0 },
  { year: 2013, Python: 100, PHP: 80, Java: 65 },
  { year: 2014, Python: 180, PHP: 150, Java: 120 },
  { year: 2015, Python: 100, PHP: 70, Java: 40 },
  { year: 2016, Python: 180, PHP: 150, Java: 120 },
  { year: 2017, Python: 100, PHP: 70, Java: 40 },
  { year: 2018, Python: 180, PHP: 150, Java: 120 },
]

export default function AdmissionChart() {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        fill: true,
        label: "Java",
        data: data.map((d) => d.Java),
        backgroundColor: "rgba(101, 177, 45, 0.9)",
        borderColor: "rgba(101, 177, 45, 0)",
        pointRadius: 0,
        tension: 0.4,
        order: 1,
      },
      {
        fill: true,
        label: "PHP",
        data: data.map((d) => d.PHP),
        backgroundColor: "rgba(147, 62, 197, 0.5)",
        borderColor: "rgba(147, 62, 197, 0)",
        pointRadius: 0,
        tension: 0.4,
        order: 2,
      },
      {
        fill: true,
        label: "Python",
        data: data.map((d) => d.Python),
        backgroundColor: "rgba(0, 109, 240, 0.8)",
        borderColor: "rgba(0, 109, 240, 0)",
        pointRadius: 0,
        tension: 0.4,
        order: 3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.05)",
          borderDash: [5, 5],
          drawOnChartArea: true,
          drawTicks: false,
        },
        ticks: {
          padding: 10,
          color: "rgba(0, 0, 0, 0.6)",
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.05)",
          borderDash: [5, 5],
          drawOnChartArea: true,
          drawTicks: false,
        },
        ticks: {
          padding: 10,
          color: "rgba(0, 0, 0, 0.6)",
        },
        border: {
          display: false,
        },
        min: 0,
        max: 200,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  }

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg max-w-4xl">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Admission Statistic</h2>
        <div className="flex space-x-3">
          <button className="bg-gray-200 p-2 rounded-md transition-colors duration-200 hover:bg-gray-300 group">
            <FaShare size={14} className="text-gray-500 group-hover:text-black transition-colors duration-200" />
          </button>
          <button className="bg-gray-200 p-2 rounded-md transition-colors duration-200 hover:bg-gray-300 group">
            <FaTrash size={14} className="text-gray-500 group-hover:text-black transition-colors duration-200" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#006DF0]"></div>
          <span className="text-sm text-gray-400">Python</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#933EC5]"></div>
          <span className="text-sm text-gray-400">PHP</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#65b12d]"></div>
          <span className="text-sm text-gray-400">Java</span>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <Line options={options} data={chartData} />
      </div>
    </div>
  )
}