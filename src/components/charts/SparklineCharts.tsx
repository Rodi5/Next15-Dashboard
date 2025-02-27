"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export default function SparklineCharts() {
  // Sparkline Table Data and Options
  const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  const inlineLineData = {
    labels: new Array(10).fill(""),
    datasets: [
      {
        data: [4, 6, 8, 5, 7, 4, 6, 8, 7, 5],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        tension: 0.4,
        pointRadius: 0,
        fill:true
      },
    ],
  }

  const barData = {
    labels: new Array(7).fill(""),
    datasets: [
      {
        data: [4, 2, 1, 2, 4, 6, 7],
        backgroundColor: "#2196f3",
        barThickness: 3,
      },
    ],
  }

  const barPositiveData = {
    labels: new Array(5).fill(""),
    datasets: [
      {
        data: [2, 5, 4, 6, 8],
        backgroundColor: "#f44336",
        barThickness: 3,
      },
    ],
  }

  const pieData = {
    labels: ["2", "1", "1"],
    datasets: [
      {
        data: [50, 25, 25],
        backgroundColor: ["#f44336", "#2196f3","#933ec5"],
        borderWidth: 0,
      },
    ],
  }

  const longInlineData = {
    labels: new Array(20).fill(""),
    datasets: [
      {
        data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 10) + 1),
        borderColor: "#2196f3",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 1,
      },
    ],
  }
  const tristateData = {
    labels: new Array(7).fill(""),
    datasets: [
      {
        data: [4, 2, 1, 2, 4, 6, 7],
        backgroundColor: ["#2196f3", "#933ec5"],
        barThickness: 3,
      },
    ],
  }

  const discreteData = {
    labels: new Array(20).fill(""),
    datasets: [
      {
        data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 10) + 1),
        borderColor: "#2196f3",
        borderWidth: 1,
        pointRadius: 1.5,
        pointBackgroundColor: "#2196f3",
        tension: 0,
      },
    ],
  }

  // Big Charts Data and Options
  const bigPieData = {
    datasets: [
      {
        data: [52, 12, 44],
        backgroundColor: ["#006df0", "#933ec5", "#d80027"],
        hoverBackgroundColor: ["#006df09e", "#933ec5a8", "#d8002799"],
      },
    ],
  }

  const bigPieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: {
            label?: string
            parsed: number
            dataset: { data: number[] }
          }) => {
            const label = context.label || ""
            const value = context.parsed
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${value} (${percentage}%)`
          },
        },
      },
    },
  }

  const bigBarData = {
    labels: Array.from({ length: 19 }, (_) => ``),
    datasets: [
      {
        data: [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7],
        backgroundColor: "#006df0",
        hoverBackgroundColor: "#006df09e"
      },
    ],
  }

  const bigBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: {
            parsed: { y: number }
          }) => {
            return `Value: ${context.parsed.y}`
          },
        },
      },
    },
    scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          beginAtZero: true,
        },
      },
  }

  const areaData = {
    labels: Array.from({ length: 28 }, (_) => ``),
    datasets: [
      {
        fill: true,
        data: [34, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 32, 65, 32, 63, 53, 42, 33, 56, 76, 15, 54, 23, 44],
        backgroundColor: "#006df0",
      },
    ],
  }

  const areaOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: {
            parsed: { y: number }
          }) => {
            return `Value: ${context.parsed.y}`
          },
        },
      },
    },
    scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          beginAtZero: true,
        },
      },
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white shadow-lg p-6 w-full md:max-w-sm self-start">
            <h2 className="text-[#333] font-bold text-xl">Sparkline</h2>
            <p className="text-sm text-[#303030] my-3 leading-7">This jQuery plugin generates sparklines (small inline charts) directly in the browser using data supplied either inline in the HTML, or via javascript.You need to include both on your page to generate sparklines.</p>
            <p className="text-sm text-[#303030] my-3 leading-7">The plugin is compatible with most modern browsers and has been tested with Firefox 2+, Safari 3+, Opera 9, Google Chrome and Internet Explorer 6, 7, 8, 9 & 10 as well as Android.</p>
            <button className="text-sm text-[#303030]">Read More</button>
        </div>
        <div className="bg-white shadow-lg p-6 w-full">
            <h2 className="text-xl font-semibold mb-6">Smart Sparkline javascript</h2>
            <table className="w-full border">
                <thead>
                    <tr className="border">
                        <th className="text-left py-2 px-4 w-1/3">Graph</th>
                        <th className="text-left py-2 px-4 border">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={inlineLineData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Inline line chart</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Bar data={barData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Bar chart</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Bar data={barPositiveData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Bar chart Positive</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Pie chart</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={longInlineData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Long inline chart</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Bar data={tristateData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Tristate chart</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={discreteData} options={sparklineOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm">Discrete chart</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      {/* Big Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Pie Big size Example</h2>
          <div className="h-[200px] w-full">
            <Pie data={bigPieData} options={bigPieOptions} />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Bar Big size Example</h2>
          <div className="h-[200px] w-full">
            <Bar data={bigBarData} options={bigBarOptions} />
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Area Big size Example</h2>
          <div className="h-[200px] w-full">
            <Line data={areaData} options={areaOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

