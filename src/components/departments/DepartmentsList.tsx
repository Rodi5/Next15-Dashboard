'use client';
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "Computer",
    status: "Active",
    numOfStudents: "1500",
  },
  {
    id: 2,
    name: "Mechanical",
    status: "Paused",
    numOfStudents: "1700",
  },
  {
    id: 3,
    name: "MBA",
    status: "Disabled",
    numOfStudents: "1500",
  },
  {
    id: 4,
    name: "BBA",
    status: "Active",
    numOfStudents: "1200",
  },
  {
    id: 5,
    name: "CSE",
    status: "Active",
    numOfStudents: "1800",
  },
  {
    id: 6,
    name: "MBA",
    status: "Paused",
    numOfStudents: "1000",
  },
];

const DepartmentsList = () => {
  return (
    <div className="p-4 bg-white">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center my-2">
            <h3 className="font-bold text-xl">Departments List</h3>
            <button className="text-white bg-blue-600 px-4 py-1 rounded hidden sm:block">Add Departments</button>
        </div>
        <table className="min-w-full table-auto ">
            <thead>
                <tr className="border-t border-b text-sm text-left">
                    <th className="p-4">No</th>
                    <th className="p-4">Name of Dept.</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Head</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">No. of Students</th>
                    <th className="p-4">Settings</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {data.map((item, index) => (
                <tr key={item.id} className="transition border-t border-b text-left">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td>
                        <button className={`px-4 py-1 text-white rounded ${
                            item.status === "Active"
                            ? "bg-blue-600"
                            : item.status === "Paused"
                            ? "bg-purple-600"
                            : "bg-red-600"
                        }`}>{item.status}</button>
                    </td>
                    <td className="px-4 py-2">John Alva</td>
                    <td className="px-4 py-2">admin@gmail.com</td>
                    <td className="px-4 py-2">01962067309</td>
                    <td className="px-4 py-2">{item.numOfStudents}</td>
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

export default DepartmentsList;
