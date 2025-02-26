'use client'
import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FaLevelDownAlt, FaLevelUpAlt } from "react-icons/fa";

const CardSide = () => {
    const stats = [
        { title: "Total Visit", value: "1500", color: "text-blue-500", chartColor: "#3b82f6" },
        { title: "Page Views", value: "3000", color: "text-purple-500", chartColor: "#a855f7" },
        { title: "Unique Visitor", value: "5000", color: "text-green-500", chartColor: "#22c55e" },
        { title: "Bounce Rate", value: "18%", color: "text-red-500", chartColor: "#ef4444" },
    ];

    const data = [
        { name: "A", uv: 400 },
        { name: "B", uv: 300 },
        { name: "C", uv: 200 },
        { name: "D", uv: 278 },
        { name: "E", uv: 189 },
        { name: "F", uv: 109 },
        { name: "G", uv: 220 },
        { name: "H", uv: 8 },
    ];

    return (
        <div className="bg-gray-100 flex flex-1 mt-6 lg:mt-0 md:hidden xl:flex lg:ml-4">
            <div className="grid grid-cols-1 gap-6 w-full">
                {stats.map((stat, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-md font-semibold">{stat.title}</h3>
                    <div className="flex items-center justify-between space-x-3">
                        <div className="w-20 h-10">
                            <ResponsiveContainer width="100%" height="100%" >
                                <BarChart data={data} >
                                    <Bar dataKey="uv" fill={stat.chartColor} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className={`text-xl font-bold flex justify-between items-center ${stat.color}`}>
                            {stat.title === 'Bounce Rate' ? <FaLevelDownAlt size={12}/>:<FaLevelUpAlt size={12}/>}
                            {stat.value}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default CardSide;
