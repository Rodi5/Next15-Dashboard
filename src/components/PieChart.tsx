"use client"

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type ChartData = {
  title: string
  value1: number
  value2: number
  color: string
}

const charts: ChartData[] = [
  {
    title: "Percentage distribution",
    value1: 40,
    value2: 20,
    color: "#2563eb"
  },
  {
    title: "Percentage division",
    value1: 140,
    value2: 54,
    color: "#9333ea"
  },
  {
    title: "Percentage Counting",
    value1: 2345,
    value2: 311,
    color: "#22c55e"
  },
  {
    title: "Percentage Sequence",
    value1: 780,
    value2: 56,
    color: "#dc2626"
  }
]

function SinglePieChart({ title, value1, value2, color }: ChartData) {
  const total = value1 + value2
  
  const data = {
    labels: ['Value 1', 'Value 2'],
    datasets: [
      {
        data: [value1, value2],
        backgroundColor: [color, '#f3f4f6'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 1,
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
        enabled: true,
        callbacks: {
          label: function (context: any) {
            const value = context.raw
            const percentage = ((value / total) * 100).toFixed(2)
            return `${value} (${percentage}%)`
          },
        },
      },
    },
  }

  if (total === 0) {
    return (
      <div className="bg-white rounded-lg p-6 shadow">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">0/0</p>
        <div className="h-[200px] flex items-center justify-center">
          <p className="text-gray-500">No data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="text-md font-bold text-gray-900">{title}</h3>
      <p className="text-xl font-semibold text-gray-900 mb-4">{value1}/{value2}</p>
      <div className="h-[150px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default function PieCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {charts.map((chart, index) => (
        <SinglePieChart key={index} {...chart} />
      ))}
    </div>
  )
}
