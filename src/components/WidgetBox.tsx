import React from 'react';

interface CardProps {
    color: string
    icon: React.ReactNode
}
const WidgetBox:React.FC<CardProps> = ({ icon, color}) => {
    return (
        <div className="p-4 bg-white shadow rounded max-w-sm text-center">
            <h3 className="text-xl font-bold">Box title</h3>
            <p className='text-sm my-3'>Lorem ipsum</p>
            <div className='flex justify-center items-center'>{icon}</div>
            <p className="text-sm text-gray-800 my-5 leading-relaxed mx-1">Lorem Ipsum passages and more recently with the desktop published software like Aldus PageMaker.</p>
            <button className='text-white text-xs p-2 rounded-sm' style={{backgroundColor: color}}>Action Button</button>
        </div>
    )
}
export default WidgetBox;