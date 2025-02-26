"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend)

const months = ["January", "February", "March", "April", "May", "June", "July"]
const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",]
const basicData = {
  labels: months,
  datasets: [
    {
      label: "My First dataset",
      data: [3, -5, -2, 3, 9, 12, 19],
      borderColor: "rgb(37, 99, 235)",
      backgroundColor: "rgb(37, 99, 235)",
    },
    {
      label: "My Second dataset",
      data: [-12, -3, -4, 6, 3, 7, 10],
      borderColor: "rgb(168, 85, 247)",
      backgroundColor: "rgb(168, 85, 247)",
    },
  ],
}

const multiAxisData = {
  labels: months,
  datasets: [
    {
      label: "My First dataset",
      data: [3, -5, -2, 3, 9, 12, 19],
      borderColor: "rgb(37, 99, 235)",
      backgroundColor: "rgb(37, 99, 235)",
      yAxisID: "y",
    },
    {
      label: "My Second dataset",
      data: [-12, -3, -4, 6, 3, 7, -20],
      borderColor: "rgb(168, 85, 247)",
      backgroundColor: "rgb(168, 85, 247)",
      yAxisID: "y1",
    },
  ],
}

const steppedData = {
    labels: days,
    datasets: [
      {
        label: "steppedLine",
        data: [3, -5, -2, 3, 9, 12],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
      }
    ],
  }

  const interpolationData = {
    labels: numbers,
    datasets: [
      {
        label: "Cubic interpolation",
        data: [0, 15, 17, 200, 0, 12, -200, 5, 200, 8, 200, 12, 200],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        yAxisID: "y",
      },
      {
        label: "Cubic interpolation",
        data: [-100, 200, 12, -200, 12, 200, 8, -200, 9, 200, -200, -12, -200],
        borderColor: "rgb(168, 85, 247)",
        backgroundColor: "rgb(168, 85, 247)",
        yAxisID: "y1",
      },
      {
        label: "Linear interpolation",
        data: [-8, -9, -10, -11, 0, 0, 0, 12, 10, 8, 9, 7, 12],
        borderColor: "rgb(216, 0, 39)",
        backgroundColor: "rgb(216, 0, 39)",
        yAxisID: "y1",
      },
    ],
  }

  const lineStylesData = {
    labels: months,
    datasets: [
      {
        label: "Unfilled",
        data: [0, 15, 17, 200, 0, 12, -200],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Dashed",
        data: [-100, 200, 12, -200, 12, 200, 8],
        borderColor: "rgb(168, 85, 247)",
        backgroundColor: "rgb(168, 85, 247)",
        borderDash: [5, 5],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Filled",
        data: [-200, -9, 200, -11, 0, -200, 0],
        borderColor: "rgb(216, 0, 39)",
        backgroundColor: "rgb(216, 0, 39)",
        borderWidth: 2,
        fill: true,
      },
    ],
  }
  
  const pointCircleData = {
    labels: months,
    datasets: [
      {
        label: "Point Circle",
        data: [0, 10, 20, 30, 40, 50, 60],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        pointRadius: 4,
        pointHoverRadius: 8,
        borderWidth: 2,
        showLine: false,
      },
    ],
  }

  const pointRectRotData = {
    labels: months,
    datasets: [
      {
        label: "Point RectRot",
        data: [60, 50, 40, 30, 20, 10, 0],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        pointStyle: "rectRot",
        pointRadius: 6,
        pointHoverRadius: 10,
        showLine: false,
      },
    ],
  }
  
  const pointCrossData = {
    labels: months,
    datasets: [
      {
        label: "Point Cross",
        data: [0, 10, 60, 30, 0, 80, 60],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        pointStyle: "cross",
        pointRadius: 8,
        pointHoverRadius: 12,
        showLine: false,
      },
    ],
  }


  const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    x: {
      display: true,
      ticks: {
        display: false,
      },
    },
    y: {
      display: true,
      ticks: {
        display: false,
      },
    },
  },
}

const basicOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Basic Line Chart",
    },
  },
  elements: {
    ...commonOptions.elements
  },
}

const multiAxisOptions = {
  ...commonOptions,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart Multi Axis",
    },
  },
  elements: {
    ...commonOptions.elements
  },
  scales: {
    ...commonOptions.scales,
    x: {
      display: true,
      ticks: {
        display: true,
      },
    },
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

const steppedOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart Stepped",
    },
  },
  elements: {
    ...commonOptions.elements
  },
}

const interpolationOptions = {
  ...commonOptions,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart Interpolation",
    },
  },
  elements: {
    ...commonOptions.elements
  },
}

const lineStylesOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart Style",
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
    },
  },
  elements: {
    ...commonOptions.elements
  },
}

const pointCircleOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart point circle",
    },
  },
  elements: {
    line: {
      tension: 0,
    },
  },
}

const pointRectRotOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart Point rectRot",
    },
  },
}

const pointCrossOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      ...commonOptions.plugins.title,
      text: "Line Chart point cross",
    },
  },
}

export default function LineCharts() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Line Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Basic Line Chart</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={basicOptions} data={basicData} />
          </div>
        </div>

        {/* Multi Axis Line Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Line Chart Multi Axis</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={multiAxisOptions} data={multiAxisData} />
          </div>
        </div>

        {/* Stepped Line Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Line Chart Stepped</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={steppedOptions} data={steppedData} />
          </div>
        </div>

        {/* Interpolation Line Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Line Chart Interpolation</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={interpolationOptions} data={interpolationData} />
          </div>
        </div>

        {/* Line Styles Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Chart Line styles</h2>
          <p className="mb-4 text-sm" style={{ color: "#303030" }}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar
            chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={lineStylesOptions} data={lineStylesData} />
          </div>
        </div>

        {/* Point Circle Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Chart Line point circle</h2>
          <p className="mb-4 text-sm" style={{ color: "#303030" }}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar
            chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={pointCircleOptions} data={pointCircleData} />
          </div>
        </div>

        {/* Point RectRot Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Chart Line Point rectRot</h2>
          <p className="mb-4 text-sm" style={{ color: "#303030" }}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar
            chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={pointRectRotOptions} data={pointRectRotData} />
          </div>
        </div>

        {/* Point Cross Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Chart Line point cross</h2>
          <p className="mb-4 text-sm" style={{ color: "#303030" }}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar
            chart for a single dataset and render that in our page.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Line options={pointCrossOptions} data={pointCrossData} />
          </div>
        </div>
      </div>
    </div>
  )
}