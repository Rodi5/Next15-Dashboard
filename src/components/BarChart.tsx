"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, TooltipItem, Legend, ChartOptions } from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = [
  { year: 2006, CSE: 100, Accounting: 90, Electrical: 60 },
  { year: 2007, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2008, CSE: 50, Accounting: 40, Electrical: 30 },
  { year: 2009, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2010, CSE: 50, Accounting: 40, Electrical: 30 },
  { year: 2011, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2012, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2013, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2014, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2015, CSE: 75, Accounting: 65, Electrical: 40 },
  { year: 2016, CSE: 100, Accounting: 90, Electrical: 40 },
]

export default function UniversityEarningsBarChart() {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#666",
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          font: {
            size: 12,
          },
          color: "#666",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#666",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        titleFont: {
          size: 13,
          weight: "normal",
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          title: (items: TooltipItem<"bar">[]) => {
            return items[0]?.label || ""
          },
          label: (context: TooltipItem<"bar">) => {
            return `${context.dataset.label} : ${context.parsed.y}`
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  }

  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "CSE",
        data: data.map((d) => d.CSE),
        backgroundColor: "#006DF0",
        borderRadius: 0,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
      {
        label: "Accounting",
        data: data.map((d) => d.Accounting),
        backgroundColor: "#933EC5",
        borderRadius: 0,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
      {
        label: "Electrical",
        data: data.map((d) => d.Electrical),
        backgroundColor: "#65b12d",
        borderRadius: 0,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
    ],
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full lg:max-w-4xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">University Earnings</h2>
        <p className="text-sm text-gray-500 mt-2 lg:mt-0">All Earnings are in million $</p>
      </div>
      <div className="h-[400px] w-full">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  )
}

