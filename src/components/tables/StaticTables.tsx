'use client'

import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement, ArcElement, Filler } from "chart.js";
import { FaLevelDownAlt, FaLevelUpAlt } from "react-icons/fa";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const peityOptions = {
    responsive: true,
    maintainAspectRatio: false,
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

const StaticTables = () => {
    const inlineLineData = {
        labels: new Array(10).fill(""),
        datasets: [
          {
            data: [4, 6, 8, 5, 7, 4, 6, 8, 7, 5],
            borderColor: "#2196f3",
            backgroundColor: "#2196f3",
            tension: 0.4,
            pointRadius: 0,
            fill: true
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

  const staticsparkleTableData1 = [
    {
      id: 1,
      data: <Line data={inlineLineData} options={peityOptions} />,
      user: "Roshid",
      value: "50%",
      icon: <FaLevelUpAlt size={12}/>
    },
    {
      id: 2,
      data: <Bar data={barData} options={peityOptions} />,
      user: "Khan",
      value: "70%",
      icon: <FaLevelDownAlt size={12}/>
    },
    {
      id: 3,
      data: <Bar data={barPositiveData} options={peityOptions} />,
      user: "Shak",
      value: "90%",
      icon: <FaLevelUpAlt size={12}/>
    },
  ];

  const staticsparkleTableData2 = [
    {
      id: 1,
      data: <Pie data={pieData1} options={peityOptions} />,
      user: "Roshid",
      value: "55%",
      icon: <FaLevelUpAlt size={12}/>
    },
    {
      id: 2,
      data: <Pie data={pieData2} options={peityOptions} />,
      user: "Khan",
      value: "75%",
      icon: <FaLevelDownAlt size={12}/>
    },
    {
      id: 3,
      data: <Pie data={pieData1} options={peityOptions} />,
      user: "Shak",
      value: "95%",
      icon: <FaLevelUpAlt size={12}/>
    },
  ];

  const staticsparkleTableData3 = [
    {
      id: 1,
      data: <Line data={peityData1} options={peityOptions} />,
      user: "Roshid",
      value: "55%",
      icon: <FaLevelUpAlt size={12}/>
    },
    {
      id: 2,
      data: <Line data={peityData2} options={peityOptions} />,
      user: "Khan",
      value: "75%",
      icon: <FaLevelDownAlt size={12}/>
    },
    {
      id: 3,
      data: <Bar data={peityBarData1} options={peityOptions} />,
      user: "Shak",
      value: "95%",
      icon: <FaLevelUpAlt size={12}/>
    },
  ];

  const basicTableData = [
    { id: 1, firstName: "Mamun", lastName: "Roshid", username: "@Facebook" },
    { id: 2, firstName: "Suhag", lastName: "Khan", username: "@Twitter" },
    { id: 3, firstName: "Sakil", lastName: "Shak", username: "@Linkedin" },
  ];

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Table */}
        <div className="bg-white p-4 text-[#333]">
            <h3 className="font-bold text-lg mb-2">Basic Table</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-gray-300 text-sm">
                <thead>
                <tr className="border-b text-left">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Username</th>
                </tr>
                </thead>
                <tbody>
                {basicTableData.map((row) => (
                    <tr key={row.id} className="border-b last-of-type:border-none">
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">{row.firstName}</td>
                    <td className="px-4 py-2">{row.lastName}</td>
                    <td className="px-4 py-2">{row.username}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>

        {/* Sparkle Table */}
        <div className="bg-white p-4 text-[#333]">
            <h3 className="font-bold text-lg mb-2">Sparkle Table</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white border-gray-300 text-sm">
                <thead>
                <tr className="border-b text-left">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Data</th>
                    <th className="px-4 py-2">User</th>
                    <th className="px-4 py-2">Value</th>
                </tr>
                </thead>
                <tbody>
                {staticsparkleTableData1.map((row) => (
                    <tr key={row.id} className="border-b last-of-type:border-none">
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">
                        <div className="h-4 w-8">
                        {row.data}
                        </div>
                    </td>
                    <td className="px-4 py-2">{row.user}</td>
                    <td className="px-4 py-2 flex items-center gap-1">{row.icon}{row.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Border Table */}
            <div className="bg-white p-4 text-[#333]">
                <h3 className="font-bold text-lg mb-2">Border Table</h3>
                <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-gray-300 text-sm">
                    <thead>
                    <tr className="border-b text-left">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">First Name</th>
                        <th className="px-4 py-2">Last Name</th>
                        <th className="px-4 py-2">Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {basicTableData.map((row) => (
                        <tr key={row.id} className="border-b last-of-type:border-none">
                        <td className="px-4 py-2">{row.id}</td>
                        <td className="px-4 py-2">{row.firstName}</td>
                        <td className="px-4 py-2">{row.lastName}</td>
                        <td className="px-4 py-2">{row.username}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Peity Table */}
            <div className="bg-white p-4 text-[#333]">
                <h3 className="font-bold text-lg mb-2">Peity Table</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border-gray-300 text-sm">
                        <thead>
                        <tr className="border-b text-left">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {staticsparkleTableData2.map((row) => (
                            <tr key={row.id} className="border-b last-of-type:border-none">
                            <td className="px-4 py-2">{row.id}</td>
                            <td className="px-4 py-2">
                                <div className="h-4 w-8">
                                {row.data}
                                </div>
                            </td>
                            <td className="px-4 py-2">{row.user}</td>
                            <td className="px-4 py-2 flex items-center gap-1">{row.icon}{row.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Hover  Table */}
            <div className="bg-white p-4 text-[#333]">
                <h3 className="font-bold text-lg mb-2">Hover  Table</h3>
                <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-gray-300 text-sm">
                    <thead>
                    <tr className="border-b text-left">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">First Name</th>
                        <th className="px-4 py-2">Last Name</th>
                        <th className="px-4 py-2">Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {basicTableData.map((row) => (
                        <tr key={row.id} className="border-b last-of-type:border-none">
                        <td className="px-4 py-2">{row.id}</td>
                        <td className="px-4 py-2">{row.firstName}</td>
                        <td className="px-4 py-2">{row.lastName}</td>
                        <td className="px-4 py-2">{row.username}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Line Table */}
            <div className="bg-white p-4 text-[#333]">
                <h3 className="font-bold text-lg mb-2">Line Table</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border-gray-300 text-sm">
                        <thead>
                        <tr className="border-b text-left">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {staticsparkleTableData3.map((row) => (
                            <tr key={row.id} className="border-b last-of-type:border-none">
                            <td className="px-4 py-2">{row.id}</td>
                            <td className="px-4 py-2">
                                <div className="h-4 w-8">
                                {row.data}
                                </div>
                            </td>
                            <td className="px-4 py-2">{row.user}</td>
                            <td className="px-4 py-2 flex items-center gap-1">{row.icon}{row.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
};

export default StaticTables;