'use client';
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface Course {
    job:string
    imageUrl: string;
}

const profiles: Course[] = [
    { job:'Apps Development', imageUrl: "/img/courses/1.jpg" },
    { job:'Illustrator CC 2018', imageUrl: "/img/courses/2.jpg" },
    { job:'Indesign cs6 2018', imageUrl: "/img/courses/3.jpg" },
    { job:'Apps Development', imageUrl: "/img/courses/1.jpg" },
    { job:'Apps Development', imageUrl: "/img/courses/1.jpg" },
    { job:'Illustrator CC 2018', imageUrl: "/img/courses/2.jpg" },
    { job:'Indesign cs6 2018', imageUrl: "/img/courses/3.jpg" },
    { job:'Apps Development', imageUrl: "/img/courses/1.jpg" }
];

const AllCourses = ({ job, imageUrl }: Course) => {
    return (
        <div className="bg-white shadow-md flex flex-col max-w-sm p-4">
            <div>
                <Image src={imageUrl} width={300} height={300} alt='course' className="w-full mb-2 object-cover" priority/>
            </div>
            <h3 className="text-lg font-semibold" style={{color: '#303030'}}>{job}</h3>
            <div className="flex text-sm my-2">
                <div>1 Year</div>
                <div className="flex justify-center items-center mx-3">
                    <FaHeart size={14}/>
                    <p className="ml-1">50</p>
                </div>
                <div><strong>$</strong> 500</div>
            </div>
            <div className="text-sm" style={{color: '#303030'}}>
                <p><strong>Duration:</strong> 6 Months</p>
                <p><strong>Professor:</strong> Jane Doe</p>
                <p><strong>Students:</strong> 100+</p>
            </div>
            <button className="bg-blue-600 text-white px-2 py-1 w-fit text-sm rounded-sm mt-2">Read More</button>
        </div>
    );
};

const CoursesList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((course, index) => (
                <AllCourses
                key={index}
                job={course.job}
                imageUrl={course.imageUrl}
                />
            ))}
        </div>
    );
};

export default CoursesList;
