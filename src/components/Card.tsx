import React from 'react';
interface CardProps {
    title: string;
    price: number;
    fees: string;
    grow:number;
    color:string
}
const Card: React.FC<CardProps> = ({ title, price, fees, grow, color }) => {
    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="text-md font-bold">{title}</h3>
            <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold ">${price} </h2>
                <span className="text-sm text-gray-400">{fees}</span>
            </div>
            <div className="mt-4">
                <span className="text-sm" style={{color:color}}>{grow}%</span>
                <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="h-1 rounded-full" style={{ width: `${grow}%`, backgroundColor: color }}></div>
                </div>
            </div>
        </div>
    )
}

export default Card
