'use client'
import React, { useState } from "react";
import Image from 'next/image';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProfessorsAccount from '../professors/ProfessorsAccount'
import ProfessorsSocial from '../professors/ProfessorsSocial'


export default function AddCourse() {
    const [activeTab, setActiveTab] = useState('basic')
    const [startDate, setStartDate] = useState<Date | null>(null);
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
    const handleDateChange = (date: Date|null) => {
        setStartDate(date);
      };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-2">
              <input type="text" placeholder="Course Name" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <style jsx global>{`
                .date-picker-wrapper .react-datepicker-wrapper,
                .date-picker-wrapper .react-datepicker__input-container {
                display: block;
                width: 100%;
                }
              `}</style>
              <div className="date-picker-wrapper">
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Course Start Date"
                    className="w-full text-sm p-2 border rounded outline-blue-500 "
                />
               </div>
              <input type="text" placeholder="Course Duration" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="text" placeholder="Course Price" className="w-full text-sm p-2 border rounded outline-blue-500"/>
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

            <div className="space-y-3 sm:space-y-2">
              <input type="text" placeholder="Department" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <textarea placeholder="Description" className="w-full text-sm p-2 border rounded h-52 outline-blue-500"/>
              <input type="text" placeholder="Professor" className="w-full text-sm p-2 border outline-blue-500 rounded"/>
              <input type="text" placeholder="Year" className="w-full text-sm p-2 border outline-blue-500 rounded"/>
            </div>
          </div>
        )
      case 'account':
        return <ProfessorsAccount />
      case 'social':
        return <ProfessorsSocial />
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
          Courses Details
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto text-sm font-bold sm:text-base ${
            activeTab === 'account'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('account')}
        >
          Account Information
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto text-sm font-bold sm:text-base ${
            activeTab === 'social'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('social')}
        >
          Social Information
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

