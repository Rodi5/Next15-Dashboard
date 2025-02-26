"use client";

import { Pie, PolarArea, Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    CategoryScale,
  } from "chart.js";
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    CategoryScale
  );

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const piedata = [
  { name: "Red", value: 10, fill: "#000000" },
  { name: "Orange", value: 20, fill: "#9333EA" },
  { name: "Yellow", value: 30, fill: "#65A30D" },
  { name: "Green", value: 40, fill: "#DC2626" },
  { name: "Blue", value: 60, fill: "#2563EB" },
];
const polardata = [
  { name: "Red", value: 10, fill: "#ff6384" },
  { name: "Orange", value: 20, fill: "#9333EA" },
  { name: "Yellow", value: 30, fill: "#65A30D" },
  { name: "Green", value: 40, fill: "#DC2626" },
  { name: "Blue", value: 60, fill: "#2563EB" },
];
const radardata = [
  { name: "Design", value: 90 },
  { name: "Development", value: 60 },
  { name: "Graphic", value: 40 },
  { name: "Android", value: 20 },
  { name: "Games", value: 70 },
];

const pieData = {
  labels: piedata.map((item) => item.name),
  datasets: [
    {
      data: piedata.map((item) => item.value),
      backgroundColor: piedata.map((item) => item.fill),
      borderWidth: 1,
    },
  ],
};

const polarData = {
  labels: polardata.map((item) => item.name),
  datasets: [
    {
      data: polardata.map((item) => item.value),
      backgroundColor: polardata.map((item) => item.fill),
      borderWidth: 1,
    },
  ],
};



const radarData = {
  labels: radardata.map((item) => item.name),
  datasets: [
      {
          label: "My First dataset",
          data: [90, 20, 30, 40, 10],
          backgroundColor: "rgb(0, 109, 240)",
          borderColor: "rgb(0, 109, 240)",
          borderWidth: 2,
          pointBackgroundColor: "red",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
      },
      {
          label: "My Second dataset",
          data: [50, 20, 0, 30, 90],
          backgroundColor: "rgb(147, 62, 197)",
          borderColor: "rgb(147, 62, 197)",
          borderWidth: 2,
          pointBackgroundColor: "red",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
      },
  ],
};

const doughnutData = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"].map((item) => item),
  datasets: [
      {
          label: "Dataset 1",
          data: [10, 20, 30, 40, 90],
          backgroundColor: "rgb(0, 109, 240)",
          borderColor: "rgb(0, 109, 240)",
          borderWidth: 2,
          pointBackgroundColor: "gray",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
      }
  ],
};

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
};


export default function RoundedCharts() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Pie Chart</h2>
          <p className="mb-4 text-sm text-[#303030]">
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[300px] sm:h-[500px]">
            <Pie data={pieData} options={commonOptions}/>
          </div>
        </div>

        {/* Polar Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Polar Chart</h2>
          <p className="mb-4 text-sm text-[#303030]">
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[300px] sm:h-[500px]">
            <PolarArea data={polarData} options={commonOptions}/>
          </div>
        </div>

          {/* Radar Chart */}
          <div className="bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">Radar Chart</h2>
            <p className="mb-4 text-sm text-[#303030]">
              A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
            </p>
            <div className="h-[300px] sm:h-[500px]">
                <Radar data={radarData} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            ticks: {
                                backdropColor: "transparent",
                                color: "#000",
                            },
                            grid: {
                                color: "#ddd",
                            },
                        },
                    },
                }} />
            </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-2">Doughnut Chart</h2>
          <p className="mb-4 text-sm text-[#303030]">
            A bar chart provides a way of showing data values. It is sometimes used to show trend data. we create a bar chart for a single dataset and render that in our page.
          </p>
          <div className="h-[300px] sm:h-[500px]">
              <Radar data={doughnutData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                      r: {
                          ticks: {
                              backdropColor: "transparent",
                              color: "#000",
                          },
                          grid: {
                              color: "#ddd",
                          },
                      },
                  },
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}
