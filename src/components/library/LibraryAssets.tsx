'use client';
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const data = [
  {
    id: 1,
    image: "/img/product/book-1.jpg",
    name: "Web Development Book",
    status: "Active",
    subject: "Html, Css",
    department: "CSE",
    type: "Book",
    price: "$1500",
  },
  {
    id: 2,
    image: "/img/product/book-2.jpg",
    name: "Quality Bold Pen",
    status: "Paused",
    subject: "PHP",
    department: "CSE",
    type: "CD",
    price: "$1700",
  },
  {
    id: 3,
    image: "/img/product/book-3.jpg",
    name: "Box of Pendrive",
    status: "Disabled",
    subject: "Java",
    department: "CSE",
    type: "Book",
    price: "$1500",
  },
  {
    id: 4,
    image: "/img/product/book-4.jpg",
    name: "Quality Bold Pen",
    status: "Active",
    subject: "PHP",
    department: "CSE",
    type: "CD",
    price: "$1200",
  },
  {
    id: 5,
    image: "/img/product/book-1.jpg",
    name: "Web Development Book",
    status: "Active",
    subject: "Wordpress",
    department: "CSE",
    type: "Book",
    price: "$1800",
  },
  {
    id: 6,
    image: "/img/product/book-2.jpg",
    name: "Quality Bold Pen",
    status: "Paused",
    subject: "Java",
    department: "CSE",
    type: "CD",
    price: "$1000",
  },
];

const LibraryAssets = () => {
  return (
    <div className="p-4 bg-white">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center my-2">
          <h3 className="font-bold text-xl">Library List</h3>
          <button className="text-white bg-blue-600 px-4 py-1 rounded hidden sm:block">Add Library</button>
        </div>
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="border-t border-b text-sm text-left">
              <th className="p-4 ">No</th>
              <th className="p-4 ">Image</th>
              <th className="p-4 ">Name of Asset</th>
              <th className="p-4 ">Status</th>
              <th className="p-4 ">Subject</th>
              <th className="p-4 ">Department</th>
              <th className="p-4 ">Type</th>
              <th className="p-4 ">Price</th>
              <th className="p-4 ">Settings</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="transition border-t border-b text-left"
              >
                <td className="px-4 py-2">
                  {index + 1}
                </td>
                <td className="px-4 py-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    priority
                    className="w-auto h-auto"
                  />
                </td>
                <td className="px-4 py-2">
                  {item.name}
                </td>
                <td>
                  <button className={`px-4 py-1 text-white rounded ${
                    item.status === "Active"
                      ? "bg-blue-600 "
                      : item.status === "Paused"
                      ? "bg-purple-600"
                      : "bg-red-600"
                  }`}>{item.status}</button>
                </td>
                <td className="px-4 py-2">
                  {item.subject}
                </td>
                <td className="px-4 py-2">
                  {item.department}
                </td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-6 flex gap-1">
                  <FaPencil size={30} className="text-black px-2 py-1 rounded border hover:cursor-pointer" style={{backgroundColor: '#f5f5f5'}}/>
                  <FaTrash size={30} className="text-black px-2 py-1 rounded border hover:cursor-pointer" style={{backgroundColor: '#f5f5f5'}}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex w-fit mt-3 mb-2" style={{color:'#303030'}}>
            <button className="px-3 py-1 border text-sm cursor-pointer hover:bg-gray-100">Previous</button>
            <p className="px-3 py-1 border text-sm cursor-pointer hover:bg-gray-100">1</p>
            <p className="px-3 py-1 border text-sm cursor-pointer hover:bg-gray-100">2</p>
            <p className="px-3 py-1 border text-sm cursor-pointer hover:bg-gray-100">3</p>
            <p className="px-3 py-1 border text-sm cursor-pointer hover:bg-gray-100">Next</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryAssets;
