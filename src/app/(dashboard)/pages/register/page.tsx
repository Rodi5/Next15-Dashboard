const Register = () => {
    return (
      <main className="flex flex-col justify-center w-full bg-gray-100 h-screen p-6">
          <div className="text-center">
              <h3 className="text-xl font-bold text-[#303030]">Registration</h3>
              <p className="text-[#303030] text-sm mt-2">This is the best app ever!</p>
          </div>
          <form action="" className="bg-white w-full sm:max-w-md mx-auto p-6 mt-4 rounded-md shadow-sm">
              <div className="flex flex-col">
                  <label htmlFor="username" className="font-medium text-[#333]">Username</label>
                  <input type="text" id="username" className="w-full border px-3 py-2 text-sm outline-blue-400" required/>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-11">
                <div className="flex flex-col mt-2">
                    <label htmlFor="password" className="font-medium text-[#333]">Password</label>
                    <input type="password" id="password" className="w-full border px-3 py-2 text-sm outline-blue-400" required/>
                </div>
                <div className="flex flex-col mt-2">
                    <label htmlFor="rpassword" className="font-medium text-[#333]">Repeat Password</label>
                    <input type="password" id="rpassword" className="w-full border px-3 py-2 text-sm outline-blue-400" required/>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-11">
                <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="font-medium text-[#333]">Email Address</label>
                    <input type="email" id="email" className="w-full border px-3 py-2 text-sm outline-blue-400" required/>
                </div>
                <div className="flex flex-col mt-2">
                    <label htmlFor="remail" className="font-medium text-[#333]">Repeat Email Address</label>
                    <input type="email" id="remail" className="w-full border px-3 py-2 text-sm outline-blue-400" required/>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                  <input type="checkbox" name="check" id="remember" className="w-5 h-5" defaultChecked/>
                  <label htmlFor="remember" className="text-[#333] ml-1 hover:cursor-pointer">Sigh up for our newsletter</label>
              </div>
              <div className="flex gap-2 mt-3 justify-center">
                  <button className="bg-blue-600 text-white rounded-md px-3 py-1">Register</button>
                  <button className="bg-white rounded-md px-3 py-1 border border-gray-300 hover:bg-gray-200  transition">Cancel</button>
              </div>
          </form>
      </main>
    );
  }
  export default Register;