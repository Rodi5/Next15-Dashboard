"use client"

import { Line, Scatter, Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ScatterController,
} from "chart.js"

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ScatterController,
)

// Common chart options
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 450,
      grid: {
        color: "#eee",
      },
      ticks: {
        stepSize: 50,
      },
    },
    x: {
      grid: {
        color: "#eee",
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        padding: 20,
      },
    },
    tooltip: {
      enabled: false,
    },
  },
}

// Custom plugin for vertical line and tooltip
const verticalLinePlugin = {
  id: "verticalLine",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  afterDraw: (chart: any) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0]
      const ctx = chart.ctx
      const x = activePoint.element.x
      const topY = chart.scales.y.top
      const bottomY = chart.scales.y.bottom
      const index = activePoint.index

      // Draw vertical line
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(x, topY)
      ctx.lineTo(x, bottomY)
      ctx.lineWidth = 1
      ctx.strokeStyle = "#666"
      ctx.stroke()
      ctx.restore()

      // Draw tooltip background
      ctx.save()
      ctx.fillStyle = "rgba(128, 128, 128, 0.9)"
      const tooltipWidth = 80
      const tooltipHeight = 45
      const tooltipX = x - tooltipWidth / 2
      const tooltipY = topY + 10

      // Draw tooltip box
      ctx.fillRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight)

      // Draw index number
      ctx.fillStyle = "white"
      ctx.textAlign = "left"
      ctx.font = "12px Arial"
      ctx.fillText(index.toString(), tooltipX + 10, tooltipY + 10)

      // Draw dataset values
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chart.data.datasets.forEach((dataset: any, i: number) => {
        const value = dataset.data[index]
        // Use the label variable to avoid the unused variable warning
        const _datasetLabel = dataset.label
        const y = tooltipY + 25 + i * 15

        // Draw colored square
        ctx.fillStyle = dataset.borderColor
        ctx.fillRect(tooltipX + 10, y - 8, 8, 8)

        // Draw text
        ctx.fillStyle = "white"
        ctx.fillText(`${value}`, tooltipX + 25, y)
      })

      ctx.restore()
    }
  },
}

// Generate realistic scatter plot data based on the image
const scatterData = {
  datasets: [
    {
      label: "data1",
      data: [
        { x: 2.0, y: 1.0 },
        { x: 2.2, y: 1.0 },
        { x: 2.2, y: 1.5 },
        { x: 2.3, y: 1.0 },
        { x: 2.4, y: 1.0 },
        { x: 2.4, y: 1.1 },
        { x: 2.5, y: 1.1 },
        { x: 2.5, y: 1.3 },
        { x: 2.5, y: 1.5 },
        { x: 2.6, y: 1.0 },
        { x: 2.6, y: 1.2 },
        { x: 2.7, y: 1.0 },
        { x: 2.7, y: 1.2 },
        { x: 2.7, y: 1.3 },
        { x: 2.7, y: 1.4 },
        { x: 2.7, y: 1.6 },
        { x: 2.8, y: 1.2 },
        { x: 2.8, y: 1.3 },
        { x: 2.8, y: 1.4 },
        { x: 2.8, y: 1.5 },
        { x: 2.9, y: 1.3 },
        { x: 2.9, y: 1.4 },
        { x: 2.9, y: 1.5 },
        { x: 3.0, y: 1.2 },
        { x: 3.0, y: 1.3 },
        { x: 3.0, y: 1.4 },
        { x: 3.0, y: 1.5 },
        { x: 3.0, y: 1.7 },
        { x: 3.1, y: 1.4 },
        { x: 3.1, y: 1.5 },
        { x: 3.2, y: 1.4 },
        { x: 3.2, y: 1.5 },
        { x: 3.2, y: 1.8 },
        { x: 3.3, y: 1.6 },
        { x: 3.4, y: 1.6 },
      ],
      backgroundColor: "rgba(33, 150, 243, 0.8)",
      pointRadius: 2,
    },
    {
      label: "data2",
      data: [
        { x: 2.5, y: 1.7 },
        { x: 2.5, y: 1.8 },
        { x: 2.5, y: 1.9 },
        { x: 2.5, y: 2.0 },
        { x: 2.6, y: 1.4 },
        { x: 2.6, y: 2.3 },
        { x: 2.7, y: 1.8 },
        { x: 2.7, y: 1.9 },
        { x: 2.8, y: 1.8 },
        { x: 2.8, y: 1.9 },
        { x: 2.8, y: 2.0 },
        { x: 2.8, y: 2.1 },
        { x: 2.8, y: 2.2 },
        { x: 2.8, y: 2.4 },
        { x: 2.9, y: 1.8 },
        { x: 3.0, y: 1.6 },
        { x: 3.0, y: 1.8 },
        { x: 3.0, y: 2.0 },
        { x: 3.0, y: 2.1 },
        { x: 3.0, y: 2.2 },
        { x: 3.0, y: 2.3 },
        { x: 3.1, y: 1.8 },
        { x: 3.1, y: 2.1 },
        { x: 3.1, y: 2.3 },
        { x: 3.1, y: 2.4 },
        { x: 3.2, y: 2.0 },
        { x: 3.2, y: 2.3 },
        { x: 3.3, y: 2.1 },
        { x: 3.3, y: 2.5 },
        { x: 3.4, y: 2.3 },
        { x: 3.4, y: 2.4 },
        { x: 3.6, y: 2.5 },
        { x: 3.8, y: 2.0 },
        { x: 3.8, y: 2.2 },
      ],
      backgroundColor: "rgba(156, 39, 176, 0.8)",
      pointRadius: 2,
    },
  ],
}

const scatterTooltipPlugin = {
  id: "scatterTooltip",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  afterDraw: (chart: any) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0]
      const { ctx } = chart
      const { x, y } = activePoint.element
      const datasetIndex = activePoint.datasetIndex
      const index = activePoint.index
      const dataset = chart.data.datasets[datasetIndex]
      const value = dataset.data[index]

      ctx.save()

      const tooltipWidth = 70
      const tooltipHeight = 70
      const padding = 8

      ctx.fillStyle = "rgba(97, 97, 97, 0.9)"
      ctx.beginPath()
      ctx.roundRect(x - tooltipWidth / 2, y - tooltipHeight - padding, tooltipWidth, tooltipHeight, 4)
      ctx.fill()

      ctx.fillStyle = "white"
      ctx.textAlign = "left"
      ctx.textBaseline = "top"
      ctx.font = "12px Arial"

      ctx.fillText(dataset.label, x - tooltipWidth / 2 + padding, y - tooltipHeight - padding + 5)

      ctx.fillText(`x: ${value.x.toFixed(1)}`, x - tooltipWidth / 2 + padding, y - tooltipHeight - padding + 25)

      ctx.fillText(`y: ${value.y.toFixed(1)}`, x - tooltipWidth / 2 + padding, y - tooltipHeight - padding + 45)

      ctx.fillStyle = dataset.backgroundColor
      ctx.fillRect(x + tooltipWidth / 2 - padding - 15, y - tooltipHeight - padding + 5, 15, 15)

      ctx.restore()
    }
  },
}

const lineChartData = {
  labels: ["0", "1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "data1",
      data: [30, 200, 100, 400, 150, 250],
      borderColor: "#2196F3",
      backgroundColor: "#2196F3",
      tension: 0,
      pointBackgroundColor: "#2196F3",
      pointBorderColor: "#fff",
      pointRadius: 4,
    },
    {
      label: "data2",
      data: [50, 20, 10, 40, 15, 25],
      borderColor: "#9C27B0",
      backgroundColor: "#9C27B0",
      tension: 0,
      pointBackgroundColor: "#9C27B0",
      pointBorderColor: "#fff",
      pointRadius: 4,
    },
  ],
}

const lineAndBarData = {
  labels: ["0", "1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "data1",
      data: [30, 200, 100, 400, 150, 250],
      borderColor: "#2196F3",
      backgroundColor: "#2196F3",
      tension: 0.4,
      pointBackgroundColor: "#2196F3",
      pointBorderColor: "#fff",
      pointRadius: 4,
    },
    {
      label: "data2",
      data: [130, 100, 140, 200, 150, 50],
      borderColor: "#9C27B0",
      backgroundColor: "#9C27B0",
      tension: 0.4,
      pointBackgroundColor: "#9C27B0",
      pointBorderColor: "#fff",
      pointRadius: 4,
    },
  ],
}

const piePlugin = {
  id: "piePlugin",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeDraw: (chart: any) => {
    const activeElements = chart.getActiveElements()
    if (activeElements.length > 0) {
      const ctx = chart.ctx
      const activeIndex = activeElements[0].index
      const meta = chart.getDatasetMeta(0)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meta.data.forEach((element: any, index: number) => {
        if (index !== activeIndex) {
          ctx.save()
          ctx.globalAlpha = 0.3
          element.draw(ctx)
          ctx.restore()
          return
        }
        element.draw(ctx)
      })
      return false
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  afterDraw: (chart: any) => {
    const ctx = chart.ctx
    const meta = chart.getDatasetMeta(0)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta.data.forEach((element: any, index: number) => {
      const data = chart.data.datasets[0].data[index]
      const centerPoint = element.getCenterPoint()

      ctx.save()
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#fff"
      ctx.font = "16px Arial"
      ctx.fillText(`${data}%`, centerPoint.x, centerPoint.y)
      ctx.restore()
    })
  },
}

// Custom plugin for gauge chart
const gaugePlugin = {
  id: "gaugePlugin",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  afterDraw: (chart: any) => {
    const {
      ctx,
      chartArea: { left, right, top, bottom },
    } = chart

    // Use top to avoid the unused variable warning
    const _topPosition = top

    // Draw percentage in center
    ctx.save()
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#000"
    const centerX = (left + right) / 2
    const centerY = bottom - 20
    ctx.fillText(`${chart.data.datasets[0].data[0]}%`, centerX, centerY)

    // Draw min and max values
    ctx.font = "12px Arial"
    ctx.fillStyle = "#666"
    ctx.textAlign = "left"
    ctx.fillText("0", left + 10, bottom)
    ctx.textAlign = "right"
    ctx.fillText("100", right - 10, bottom)
    ctx.restore()
  },
}

const barChartData = {
  labels: ["0", "1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "data2",
      data: [50, 20, 10, 40, 15, 25],
      backgroundColor: "#9C27B0",
      borderColor: "#9C27B0",
      borderWidth: 1,
    },
    {
      label: "data1",
      data: [30, 200, 100, 400, 150, 250],
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
      borderWidth: 1,
    },
  ],
}

const pieChartData = {
  labels: ["data1", "data2"],
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ["#2196F3", "#9C27B0"],
      borderWidth: 0,
    },
  ],
}

const gaugeChartData = {
  labels: ["data"],
  datasets: [
    {
      data: [91.4, 8.6],
      backgroundColor: ["#2196F3", "#f5f5f5"],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
    },
  ],
}

const barOptions = {
  ...commonOptions,
  scales: {
    x: {
      stacked: true,
      grid: {
        color: "#eee",
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 450,
      grid: {
        color: "#eee",
      },
      ticks: {
        stepSize: 50,
      },
    },
  },
}

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (context: any) => {
          return `${context.label}: ${context.parsed}%`
        },
      },
    },
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      },
    },
  },
}

const gaugeOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (context: any) => {
          return `${context.raw}%`
        },
      },
    },
    legend: {
      display: false,
    },
  },
  cutout: "60%",
  layout: {
    padding: {
      bottom: 30,
      left: 20,
      right: 20,
    },
  },
}

export default function C3Charts() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">C3 Charts</h2>
          <p className="text-[#303030] mb-3 text-sm leading-7">
            C3 makes it easy to generate D3-based charts by wrapping the code required to construct the entire chart. We
            don&apos;t need to write D3 code any more.
          </p>
          <p className="text-[#303030] mb-3 text-sm leading-7">
            C3 gives some classes to each element when generating, so you can define a custom style by the class and
            it&apos;s possible to extend the structure directly by D3.
          </p>
          <p className="text-[#303030] mb-3 text-sm leading-7">
            C3 provides a variety of APIs and callbacks to access the state of the chart. By using them, you can update
            the chart even after it&apos;s rendered.
          </p>
          <p className="text-[#303030] mb-3 text-sm leading-7">c3 is a D3-based reusable chart library</p>
          <p className="text-[#303030] text-sm cursor-pointer">Read More</p>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">C3 Line Charts With custom colors</h2>
          <div className="h-[300px]">
            <Line data={lineChartData} options={commonOptions} plugins={[verticalLinePlugin]} />
          </div>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Line & Bar Chart Example</h2>
          <div className="h-[300px]">
            <Line data={lineAndBarData} options={commonOptions} plugins={[verticalLinePlugin]} />
          </div>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Bar Big size Example</h2>
          <div className="h-[300px]">
            <Scatter
              data={scatterData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    min: 0.8,
                    max: 3.0,
                    grid: {
                      color: "#eee",
                    },
                    ticks: {
                      stepSize: 0.2,
                    },
                  },
                  x: {
                    min: 1.9,
                    max: 4.0,
                    grid: {
                      color: "#eee",
                    },
                    ticks: {
                      stepSize: 0.2,
                    },
                  },
                },
                plugins: {
                  tooltip: {
                    enabled: false,
                  },
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                      boxWidth: 6,
                      padding: 20,
                    },
                  },
                },
              }}
              plugins={[scatterTooltipPlugin]}
            />
          </div>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Bar Big size Example</h2>
          <div className="h-[300px]">
            <Bar data={barChartData} options={barOptions} plugins={[verticalLinePlugin]} />
          </div>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Bar Big size Example</h2>
          <div className="h-[300px]">
            <Pie data={pieChartData} options={pieOptions} plugins={[piePlugin]} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">Bar Big size Example</h2>
        <div className="h-[150px] flex items-center justify-center">
          <div className="w-[180px] h-[180px]">
            <Pie
              data={gaugeChartData}
              options={{
                ...gaugeOptions,
                layout: {
                  padding: {
                    bottom: 20,
                  },
                },
              }}
              plugins={[gaugePlugin]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}