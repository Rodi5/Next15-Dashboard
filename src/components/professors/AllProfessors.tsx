'use client';
import React from "react";
import Image from "next/image";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

interface Professor {
  name: string;
  location: string;
  imageUrl: string;
}

const profiles: Professor[] = [
  { name: "John Alva", location: "London, LA", imageUrl: "/img/contact/1.jpg" },
  { name: "Amir Dex", location: "Pakistan, Los", imageUrl: "/img/contact/2.jpg" },
  { name: "Alva Adition", location: "India, Col", imageUrl: "/img/contact/3.jpg" },
  { name: "Sex Dog", location: "UK, LA", imageUrl: "/img/contact/4.jpg" },
  { name: "Fox Well", location: "California, LA", imageUrl: "/img/contact/1.jpg" },
  { name: "Drom Simson", location: "Austrolia, LA", imageUrl: "/img/contact/3.jpg" },
  { name: "Sima son", location: "Suiden, Cro", imageUrl: "/img/contact/2.jpg" },
  { name: "Drama Son", location: "USA, LA", imageUrl: "/img/contact/4.jpg" }
];

const AllProfessors = ({ name, location, imageUrl }: Professor) => {
  return (
    <div className="bg-white shadow-md p-4 flex flex-col max-w-sm">
      <div className="flex justify-between">
        <Image src={imageUrl} width={200} height={200} alt={`${name}'s profile`} priority className="w-20 h-20 rounded-full mb-4 object-cover"/>
        <div className="flex flex-col justify-center space-y-1 mb-3">
          <FaFacebook size={22} color="#006DF0"/>
          <FaTwitter size={22} color="#006DF0"/>
          <FaPinterest size={22} color="#006DF0"/>
        </div>
      </div>
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{location}</p>
      <p className="text-sm text-gray-800 text-left my-3 leading-7 ">
        Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan.
      </p>
      <button className="bg-blue-600 text-white py-3 px-2 text-sm">
        Likes:<strong>956 </strong>Comments:<strong>350 </strong>Views:<strong>450</strong>
      </button>
    </div>
  );
};

const ProfessorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {profiles.map((professor, index) => (
        <AllProfessors
          key={index}
          name={professor.name}
          location={professor.location}
          imageUrl={professor.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProfessorsList;