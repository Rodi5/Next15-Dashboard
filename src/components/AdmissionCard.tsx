"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from "chart.js"
import { Line } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

interface AdmissionCardProps {
  title: string
  value: string
  data: Array<{ value: number }>
  color: string
}

export default function AdmissionCard({ title, value, data, color }: AdmissionCardProps) {
  // Prepare data for Chart.js format
  const chartData = {
    // Create labels array with empty strings to match data points
    labels: Array(data.length).fill(""),
    datasets: [
      {
        data: data.map((item) => item.value),
        borderColor: color,
        backgroundColor: color,
        fill: true,
        tension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  }

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        bodyFont: {
          size: 14,
          // weight: "500",
        },
        padding: 8,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          // Customize tooltip text
          label: (context: any) => context.parsed.y,
          // Remove title
          title: () => "",
        },
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        // Ensure the area chart starts from the bottom
        min: Math.min(...data.map((item) => item.value)) * 0.8,
        max: Math.max(...data.map((item) => item.value)) * 1.2,
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  }

  return (
    <div className="bg-white p-4 rounded-lg max-w-sm overflow-hidden">
      <div className="space-y-1">
        <p className="text-md font-bold text-muted-foreground">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="h-[60px] mt-4 w-full">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}