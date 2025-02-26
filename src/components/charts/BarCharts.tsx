"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarCharts = () => {
  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green","", "Orange"],
    datasets: [
      {
        label: "Bar Chart",
        data: [12, 19, 3, 5,0, 3],
        backgroundColor: [
          "rgba(255, 224, 230, 1)",
          "rgba(215, 236, 251, 1)",
          "rgba(255, 245, 221, 1)",
          "rgba(219, 242, 242, 1)",
          "transparent",
          "rgba(255, 236, 217, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "transparent",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const BarChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: [
          "rgba(255, 224, 230, 1)",
          "rgba(215, 236, 251, 1)",
          "rgba(255, 245, 221, 1)",
          "rgba(219, 242, 242, 1)",
          "rgba(235, 224, 255, 1)",
          "rgba(255, 236, 217, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(202, 176, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [-3, -6, -5, -9, -15, -20],
        backgroundColor: [
          "rgba(255, 224, 230, 1)",
          "rgba(215, 236, 251, 1)",
          "rgba(255, 245, 221, 1)",
          "rgba(219, 242, 242, 1)",
          "rgba(235, 224, 255, 1)",
          "rgba(255, 236, 217, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(202, 176, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

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
  };

  const barVertical = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      title: {
        ...commonOptions.plugins.title,
        text: "Bar Chart vertical",
      },
    },
  }
  const barHorizontal = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      title: {
        ...commonOptions.plugins.title,
        text: "Bar Chart Horizontal",
      },
    },
  }

  const BarChartData2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: [
          "rgba(255, 224, 230, 1)",
          "rgba(215, 236, 251, 1)",
          "rgba(255, 245, 221, 1)",
          "rgba(219, 242, 242, 1)",
          "rgba(235, 224, 255, 1)",
          "rgba(255, 236, 217, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(202, 176, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: [-3, -6, -5, -9, -15, -20, ],
        backgroundColor: [
          "rgba(255, 224, 230, 1)",
          "rgba(215, 236, 251, 1)",
          "rgba(255, 245, 221, 1)",
          "rgba(219, 242, 242, 1)",
          "rgba(235, 224, 255, 1)",
          "rgba(255, 236, 217, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(202, 176, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
          <p className="text-sm leading-6 mb-3">A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.</p>
          <div className="h-[200px] sm:h-[300px]">
            <Bar data={barChartData} options={commonOptions}/>
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-2">Bar Chart vertical</h2>
          <p className="text-sm leading-6 mb-3">A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets</p>
          <div className="h-[200px] sm:h-[300px]">
            <Bar data={BarChartData} options={{ ...barVertical, indexAxis: "x" }} />
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-2">Bar Chart Horizontal</h2>
          <p className="text-sm leading-6 mb-3">A bar chart provides a way of showing data values represented as Horizontal bars. It is sometimes used to show trend data, and the comparison of multiple data sets</p>
          <div className="h-[200px] sm:h-[300px]">
            <Bar data={BarChartData} options={{ ...barHorizontal, indexAxis: "y" }} />
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-2">Bar Chart Multi Axis</h2>
          <p className="text-sm leading-6 mb-3">
            This sample illustrates how you can display a data series, using
            multiple axes in your business chart. It is sometimes used to show
            trend data, and the comparison of multiple data sets.
          </p>
          <div className="h-[200px] sm:h-[300px]">
            <Bar data={BarChartData2} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top" as const,
                },
                title: {
                  display: true,
                  text: "Bar Chart Multi Axis",
                },
              },
              scales: {
                y: {
                  position: "left",
                  title: {
                    display: true,
                  },
                },
                y1: {
                  position: "right",
                  title: {
                    display: true,
                  },
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCharts;