export default function ProfessorsAccount() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <input type="email" placeholder="Email" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="number" placeholder="Phone" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="password" placeholder="Password" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="password" placeholder="Confirm Password" className="w-full text-sm p-2 border rounded outline-blue-500"/>
        </div>
      </div>
    )
  }