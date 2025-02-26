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
const Data = {
    labels: months,
    datasets: [
      {
        label: "Mu First dataset",
        data: [0, -20, 20, -20, 20, -20, 20],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
      }
    ],
  }
const filloriginData = {
    labels: months,
    datasets: [
      {
        label: "Mu First dataset",
        data: [0, -20, 20, -20, 20, -20, 20],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        fill: true
      }
    ],
  }
const fillstartData = {
    labels: months,
    datasets: [
      {
        label: "Mu First dataset",
        data: [0, 10, 20, 30, 40, 50, 100],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        fill: true
      }
    ],
  }
const fillendData = {
    labels: months,
    datasets: [
      {
        label: "Mu First dataset",
        data: [100, 90, 70, 60, 50, 40, 0],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgb(37, 99, 235)",
        fill: "end"
      }
    ],
  }

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Area Chart",
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

const fillfalseOptions = {
  ...baseOptions,
  plugins: {
    ...baseOptions.plugins,
    title: {
      ...baseOptions.plugins.title,
      text: "Area Chart Fill False",
    },
  },
}

const filloriginOptions = {
  ...baseOptions,
  plugins: {
    ...baseOptions.plugins,
    title: {
      ...baseOptions.plugins.title,
      text: "Area Chart Fill Origin",
    },
  },
}

const fillstartOptions = {
  ...baseOptions,
  plugins: {
    ...baseOptions.plugins,
    title: {
      ...baseOptions.plugins.title,
      text: "Area Chart Fill Start",
    },
  },
}

const fillendOptions = {
  ...baseOptions,
  plugins: {
    ...baseOptions.plugins,
    title: {
      ...baseOptions.plugins.title,
      text: "Area Chart Fill End",
    },
  },
}

export default function AreaCharts() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Area Chart Fill False */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Area Chart Fill False</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[150px]">
            <Line options={fillfalseOptions} data={Data} />
          </div>
        </div>

        {/* Area Chart Fill origin */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Area Chart Fill origin</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[150px]">
            <Line options={filloriginOptions} data={filloriginData} />
          </div>
        </div>

        {/* Area Chart Fill start */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Area Chart Fill start</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[150px]">
            <Line options={fillstartOptions} data={fillstartData} />
          </div>
        </div>

        {/* Area Chart Fill end */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Area Chart Fill end</h2>
          <p className="mb-4 text-sm" style={{color: '#303030'}}>
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[150px]">
            <Line options={fillendOptions} data={fillendData} />
          </div>
        </div>
      </div>
    </div>
  )
}