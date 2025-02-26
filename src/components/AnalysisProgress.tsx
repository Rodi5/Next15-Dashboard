import React from 'react';
interface CardProps {
    title: string;
    fees: string;
    grow:number;
    color:string
}
const AnalysisProgress: React.FC<CardProps> = ({ title, fees, grow, color }) => {
    return (
        <div className="p-4 bg-white shadow rounded">
            <div className='flex justify-between items-center mb-3'>
                <h3 className="text-md font-bold">{title}</h3>
                <span className="text-sm " style={{color:color}}>{grow}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="h-1 rounded-full" style={{ width: `${grow}%`, backgroundColor: color }}></div>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <span className="text-sm text-gray-800">{fees}</span>
            </div>
        </div>
    )
}

export default AnalysisProgress
