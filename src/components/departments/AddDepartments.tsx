'use client'
import { useState } from 'react'
import ProfessorsAccount from '../professors/ProfessorsAccount'
import ProfessorsSocial from '../professors/ProfessorsSocial'

export default function AddDepartments() {
    const [activeTab, setActiveTab] = useState('basic')
   

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="Name" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="text" placeholder="Head of Department" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="email" placeholder="Email" className="w-full text-sm p-2 border rounded outline-blue-500"/>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <input type="number" placeholder="Phone" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="number" placeholder="No. of Students" className="w-full text-sm p-2 border rounded outline-blue-500"/>
              <input type="text" placeholder="Status" className="w-full text-sm p-2 border rounded outline-blue-500"/>
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
          Add Department
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

