export default function ProfessorsSocial() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <input type="url" placeholder="Facebook URL" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="Twitter URL" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="Google Plus" className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="LinkedIn URL" className="w-full text-sm p-2 border rounded outline-blue-500"/>
        </div>
      </div>
    )
  }
