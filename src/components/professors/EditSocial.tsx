export default function EditSocial() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <input type="url" placeholder="Facebook URL" defaultValue='http://www.facebook.com' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="Twitter URL" defaultValue='http://www.twitter.com' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="Google Plus" defaultValue='http://www.google-plus.com' className="w-full text-sm p-2 border rounded outline-blue-500"/>
          <input type="url" placeholder="LinkedIn URL" defaultValue='http://www.Linkedin.com' className="w-full text-sm p-2 border rounded outline-blue-500"/>
        </div>
      </div>
    )
  }
