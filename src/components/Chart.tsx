"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      },
      ticks: {
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      },
      min: 0,
      max: 300,
      ticks: {
        stepSize: 75,
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      align: "start" as const,
      labels: {
        boxWidth: 10,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
}

const data = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
  datasets: [
    {
      label: "CSE",
      data: [50, 130, 80, 70, 180, 105, 250],
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f6",
      tension: 0.3,
    },
    {
      label: "Accounting",
      data: [80, 100, 60, 200, 150, 100, 150],
      borderColor: "#8b5cf6",
      backgroundColor: "#8b5cf6",
      tension: 0.3,
    },
    {
      label: "Electrical",
      data: [20, 80, 70, 140, 140, 80, 200],
      borderColor: "#65b12d",
      backgroundColor: "#65b12d",
      tension: 0.3,
    },
  ],
}

interface ChartProps {
  fullWidth?: boolean
}

export default function UniversityEarningsChart({ fullWidth }: ChartProps) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg ${fullWidth ? "w-full" : "w-full lg:max-w-4xl"}`}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <h2 className="text-2xl font-bold">University Earnings</h2>
        <p className="text-sm text-gray-500 mt-2 lg:mt-0">All Earnings are in million $</p>
      </div>
      <div className="h-[400px] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

