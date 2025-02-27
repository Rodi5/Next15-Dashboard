'use client'
import React from 'react'
import { useState } from 'react'
import EditAccount from './EditAccount'
import EditSocial from './EditSocial'
import Image from 'next/image'


export default function EditInformation() {
    const [activeTab, setActiveTab] = useState('basic')
    const [image, setImage] = useState<File | null>(null)

    const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        setImage(file)
    }

    const handleImageClick = () => {
        document.getElementById('imageUpload')?.click()
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
        setImage(file)
        }
    }
    const [selectedValue1, setSelectedValue1] = React.useState("male");
    const [selectedValue2, setSelectedValue2] = React.useState("ne");
    const [selectedValue3, setSelectedValue3] = React.useState("ma");
    const [selectedValue4, setSelectedValue4] = React.useState("ba");

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="Fly Zend" defaultValue='Fly Zend' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="text" placeholder="E104, catn-2, UK." defaultValue='E104, catn-2, UK.' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="number" placeholder="01962067309" defaultValue='01962067309' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="text" placeholder="12/10/1993" defaultValue='12/10/1993' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="number" placeholder="1213" defaultValue='1213' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm cursor-pointer"
                onDrop={handleImageDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={handleImageClick}
              >
                <input type="file" id="imageUpload" className="hidden " onChange={handleImageChange} accept="image/*"/>
                <div className="flex flex-col items-center ">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <p className="text-sm font-bold text-gray-500">
                    Drop image here or click to upload.
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    (This is just a demo dropzone. Selected image is not actually uploaded.)
                  </p>
                </div>
              </div>
              {image && (
                <div className="mt-4 flex flex-col items-center">
                  <p className="text-sm text-gray-500">Selected Image:</p>
                  <Image width={128} height={128} src={URL.createObjectURL(image)} alt="Selected" className="mt-2 w-32 h-32 object-cover rounded shadow-lg"/>
                </div>
              )}
            </div>

            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="CSE" defaultValue='CSE' className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <textarea placeholder="" defaultValue='Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan.' className="w-full text-sm p-2 border rounded h-32 outline-blue-500"/>
              <select value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)} className="w-full text-sm p-2 border rounded outline-blue-500">
                <option value="">Select Gender</option>
                <option value="male" >Male</option>
                <option value="female">Female</option>
              </select>
              <select value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)} className="w-full text-sm p-2 border rounded outline-blue-500">
                <option value="">Select country</option>
                <option value="in">India</option>
                <option value="pa">Pakistan</option>
                <option value="am">Amerika</option>
                <option value="ch">China</option>
                <option value="du">Dubai</option>
                <option value="ne" >Nepal</option>
              </select>
              <select value={selectedValue3} onChange={(e) => setSelectedValue3(e.target.value)} className="w-full text-sm p-2 border rounded outline-blue-500">
                <option value="">Select state</option>
                <option value="gu">Gujarat</option>
                <option value="ma" >Maharastra</option>
                <option value="ra">Rajastan</option>
                <option value="ma">Maharastra</option>
                <option value="ra">Rajastan</option>
                <option value="gu">Gujarat</option>
              </select>
              <select value={selectedValue4} onChange={(e) => setSelectedValue4(e.target.value)} className="w-full text-sm p-2 border rounded outline-blue-500">
                <option value="">Select city</option>
                <option value="su">Surat</option>
                <option value="ba">Baroda</option>
                <option value="na">Navsari</option>
                <option value="ba">Baroda</option>
                <option value="su">Surat</option>
              </select>
              <input type="url" placeholder="www.uttara.com" defaultValue='www.uttara.com' className="w-full text-sm p-2 border outline-blue-500 rounded"/>
            </div>
          </div>
        )
      case 'account':
        return <EditAccount />
      case 'social':
        return <EditSocial />
      default:
        return null
    }
  }

  return (
    <div className="w-full mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row border-b mb-6 overflow-x-auto">
        <button
          className={`px-4 py-2 w-full sm:w-auto text-sm font-bold sm:text-base ${
            activeTab === 'basic'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          Edit Basic Information
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto text-sm font-bold sm:text-base ${
            activeTab === 'account'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('account')}
        >
          Edit Account Information
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto text-sm font-bold sm:text-base ${
            activeTab === 'social'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('social')}
        >
          Edit Social Information
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {renderTabContent()}
        <div className="md:col-span-2 mt-4 text-center">
          <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white text-sm px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

