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

export default function PeityCharts() {
  const peityOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
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
  };


  const pieData1 = {
    datasets: [
      {
        data: [1, 5],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }
  const pieData2 = {
    datasets: [
      {
        data: [4, 2],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }
  const pieData3 = {
    datasets: [
      {
        data: [2, 4],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }
  const pieData4 = {
    datasets: [
      {
        data: [1.5, 4.5],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }
  const pieData5 = {
    datasets: [
      {
        data: [4, 2],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }
  const pieData6 = {
    datasets: [
      {
        data: [2, 4],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        borderWidth: 0,
      },
    ],
  }



  const peityData1 = {
    labels: new Array(20).fill(""),
    datasets: [
      {
        data: [2, 5, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 8, 7, 8, 5, 2],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
    ],
  };
  
  const peityData2 = {
    labels: new Array(10).fill(""),
    datasets: [
      {
        data: [8, 5, 2, -1, -3, -2, 8, 3, 5, 3],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
    ],
  };
  
  const peityData3 = {
    labels: new Array(10).fill(""),
    datasets: [
      {
        data: [0, -5, -6, -4, -5, -4, -7, -3, -3, -5],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
    ],
  };
  
  const peityBarData1 = {
    labels: new Array(10).fill(""),
    datasets: [
      {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        barThickness: 3,
      },
    ],
  };
  
  const peityBarData2 = {
    labels: new Array(10).fill(""),
    datasets: [
      {
        data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
        backgroundColor: ["#2196f3", "#d7d7d7"],
        barThickness: 3,
      },
    ],
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white shadow-lg p-6 w-full md:max-w-sm self-start">
            <h2 className="text-[#333] font-bold text-xl">Peity Charts</h2>
            <p className="text-sm text-[#303030] my-3 leading-7">Peity (sounds like deity) is a jQuery plugin that converts an element's content into a angle svg mini pie donut line or bar chart and is compatible with any browser that supports angle svg: Chrome, Firefox, IE9+, Opera, Safari.</p>
            <p className="text-sm text-[#303030] my-3 leading-7">Passing a radius will set the correct width and height, the pie will always be a circle that fits the available space.</p>
            <button className="text-sm text-[#303030]">Read More</button>
        </div>
        <div className="bg-white shadow-lg p-6 w-full overflow-x-auto">
            <h2 className="text-xl font-semibold mb-6">Pie Custom</h2>
            <table className="w-full border">
                <thead>
                    <tr className="border">
                        <th className="text-left py-2 px-4 w-1/6">Graph</th>
                        <th className="text-left py-2 px-4 border">Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData1} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;1/6&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData2} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;230/260&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData3} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;0.42/1.461&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData4} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;2,7&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData5} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;236,133&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-4">
                                <Pie data={pieData6} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="pie"&gt;0.42,1.051&lt;/span&gt;</pre></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div className="bg-white shadow-lg p-6 w-full overflow-x-auto">
            <h2 className="text-xl font-semibold mb-6">Line & Bar</h2>
            <table className="w-full border">
                <thead>
                    <tr className="border">
                        <th className="text-left py-2 px-4 w-1/6">Graph</th>
                        <th className="text-left py-2 px-4 border">Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={peityData1} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="line"&gt;2,5,9,6,5,9,7,3,5,2,5,3,9,6,5,8,7,8,5,2&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={peityData2} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="line"&gt;8,5,2,-1,-3,-2,8,3,5,3&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Line data={peityData3} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="line"&gt;0,-5,-6,-4,-5,-4,-7,-3,-3,-5&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Bar data={peityBarData1} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="bar"&gt;5,3,9,6,5,9,7,3,5,2&lt;/span&gt;</pre></td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-1 border">
                            <div className="h-7 w-16">
                                <Bar data={peityBarData2} options={peityOptions} />
                            </div>
                        </td>
                        <td className="px-4 py-1 text-sm"><pre className="text-[#c7254e] bg-[#f9f2f4] w-fit px-2 rounded-sm">&lt;span class="bar"&gt;5,3,2,-1,-3,-2,2,3,5,2&lt;/span&gt;</pre></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  )
}

