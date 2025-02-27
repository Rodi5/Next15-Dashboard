"use client"

import { useState } from "react"

export default function ProfileUpdate() {
  const [_selectedFile, setSelectedFile] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-2 text-sm border outline-blue-500"/>
        <input type="text" placeholder="Last Name" className="p-2 text-sm border outline-blue-500"/>
        <input type="text" placeholder="Address" className="p-2 text-sm border outline-blue-500"/>
        <input type="date" placeholder="Date of Birth" className="p-2 text-sm border outline-blue-500"/>
        <input type="text" placeholder="Department" className="p-2 text-sm border outline-blue-500"/>
        <input type="number" placeholder="Pincode" className="p-2 text-sm border outline-blue-500"/>
        <select className="text-sm p-2 border outline-blue-500">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <select className="text-sm p-2 border outline-blue-500">
            <option value="">Select country</option>
            <option value="in">India</option>
            <option value="pa">Pakistan</option>
            <option value="am">Amerika</option>
            <option value="ch">China</option>
            <option value="du">Dubai</option>
            <option value="ne">Nepal</option>
        </select>
        <select className="text-sm p-2 border outline-blue-500">
            <option value="">Select state</option>
            <option value="gu">Gujarat</option>
            <option value="ma">Maharastra</option>
            <option value="ra">Rajastan</option>
            <option value="ma">Maharastra</option>
            <option value="ra">Rajastan</option>
            <option value="gu">Gujarat</option>
        </select>
        <select className="text-sm p-2 border outline-blue-500">
            <option value="">Select city</option>
            <option value="su">Surat</option>
            <option value="ba">Baroda</option>
            <option value="na">Navsari</option>
            <option value="ba">Baroda</option>
            <option value="su">Surat</option>
        </select>
        <input type="url" placeholder="Website URL" className="p-2 text-sm border outline-blue-500"/>
        <input type="number" placeholder="Mobile no." className="p-2 text-sm border outline-blue-500"/>
        <input type="text" placeholder="Description" className="p-2 text-sm border outline-blue-500"/>

        <div className="max-w-sm flex items-center md:col-span-2">
          <button type="button" className="text-sm bg-blue-600 text-white px-2 py-3" onClick={() => document.getElementById("file-upload")?.click()}>
            Browse
          </button>
          <input id="file-upload" type="file" className="w-full p-2.5 text-sm border outline-blue-500 "
            onChange={(e) => setSelectedFile(e.target.files?.[0]?.name || "")}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-blue-600 text-white text-sm font-medium px-3 py-2 rounded-sm">
          Submit
        </button>
      </div>
    </form>
  )
}

