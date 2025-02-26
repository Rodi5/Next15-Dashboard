'use client';
import React from "react";
import Image from "next/image";

interface Student {
    imageUrl: string;
}

const profiles: Student[] = [
    { imageUrl: "/img/student/1.jpg" },
    { imageUrl: "/img/student/2.jpg" },
    { imageUrl: "/img/student/3.jpg" },
    { imageUrl: "/img/student/4.jpg" },
    { imageUrl: "/img/student/1.jpg" },
    { imageUrl: "/img/student/2.jpg" },
    { imageUrl: "/img/student/3.jpg" },
    { imageUrl: "/img/student/4.jpg" }
];

const AllStudents = ({ imageUrl }: Student) => {
    return (
        <div className="bg-white shadow-md flex flex-col max-w-sm">
            <div>
                <Image src={imageUrl} width={300} height={300} alt='student' className="w-full mb-4 object-cover" priority/>
            </div>
            <div className="mx-auto text-center">
                <h3 className="text-lg font-semibold">Alexam Angles</h3>
                <div className="mt-2 mb-4">
                    <p className="text-sm text-gray-800">Computer Science</p>
                    <p className="text-sm"><strong>Age:</strong> 20 Years</p>
                </div>
            </div>
        </div>
    );
};

const StudentsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((student, index) => (
                <AllStudents
                key={index}
                imageUrl={student.imageUrl}
                />
            ))}
        </div>
    );
};

export default StudentsList;
