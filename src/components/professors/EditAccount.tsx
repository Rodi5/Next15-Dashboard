export default function EditAccount() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <input type="email" placeholder="Email" defaultValue='Admin@gmail.com' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="number" placeholder="Phone" defaultValue='01962067309' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="password" placeholder="Password" defaultValue='12345678' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="password" placeholder="Confirm Password" defaultValue='12345678' className="w-full text-sm p-2 border rounded outline-blue-500"/>
        </div>
      </div>
    )
  }