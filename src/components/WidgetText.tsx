import React from 'react';

interface CardProps {
    color:string
    value:number
}
const WidgetText:React.FC<CardProps> = ({ color,value}) => {
    return (
        <div className="p-4 bg-white shadow rounded-sm max-w-sm text-center text-white" style={{backgroundColor: color}}>
            <h3 className="text-xl font-bold">Title text</h3>
            <p className='text-lg my-1'>{value}</p>
            <p className="text-sm text-white my-3 leading-relaxed mx-1">Lorem Ipsum passages and more recently with desktop published software.</p>
        </div>
    )
}
export default WidgetText;