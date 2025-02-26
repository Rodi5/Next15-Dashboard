import React from 'react';

interface CardProps {
    title: string;
    price: number | string;
    color:string
    icon:any
}
const WidgetView:React.FC<CardProps> = ({ title,icon, price, color }) => {
    return (
        <div className="p-4 bg-white shadow rounded max-w-sm">
            <div className='flex justify-between items-center'>
                <h3 className="text-lg font-bold">{title}</h3>
                {icon}
            </div>
            <div className='flex flex-col mt-3'>
                <h2 className="text-xl font-bold" style={{color:color}}>{price} </h2>
                <span className="text-sm text-gray-800 mt-2">Lorem Ipsum is simply dummy text of the printing and Lorem <strong>typesetting industry</strong> spa.</span>
            </div>
        </div>
    )
}
export default WidgetView;