import React from 'react';

interface CardProps {
    title: string;
    fees: string;
    grow: number;
    color: string;
}

const AnalysisProgress2: React.FC<CardProps> = ({ title, fees, grow, color }) => {
    return (
        <div className="p-4 bg-white">
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                    <span className="text-xl font-semibold">{grow}%</span>
                </div>
                <span className="text-sm">{fees}</span>
            </div>
            <div className="relative mt-2">
                <div className="w-full bg-gray-200 h-1">
                    <div className="h-1 relative" style={{ width: `${grow}%`, backgroundColor: color }}>
                        <span className="absolute -top-6 -right-5 text-xs bg-gray-800 text-white px-1.5 py-0.5 ">
                            {grow}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalysisProgress2;

