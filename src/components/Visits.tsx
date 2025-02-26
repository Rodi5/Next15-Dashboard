'use client'

import { FaLevelDownAlt, FaLevelUpAlt } from "react-icons/fa";

interface CardProps {
    fees: string;
    grow: number;
    color: string;
    country?: string;
}

const Visits: React.FC<CardProps> = ({fees, grow, color, country }) => {
    return (
        <>
        <div className="px-6 bg-white py-2">
            <div className="space-y-1">
                <div className="flex items-end justify-between text-sm">
                    <div>
                        <span className="font-bold text-lg" style={{color: '#444'}}>{fees}</span>
                        {country && <p className="text-gray-500 text-sm" style={{color: '#444'}}>From {country}</p>}
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="text-xs" style={{color: color}}>{grow}%</span>
                        <span>
                            {country === 'India' ? <FaLevelDownAlt style={{color: color}} size={12}/>
                            : <FaLevelUpAlt style={{color: color}} size={12}/>}
                        </span>
                    </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1">
                    <div className="h-1 rounded-full transition-all duration-300" style={{ width: `${grow}%`, backgroundColor: color }}></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Visits;
