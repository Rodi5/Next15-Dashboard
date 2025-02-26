const Login = () => {
  return (
    <main className="flex flex-col justify-center w-full bg-gray-100 h-screen p-6">
        <div className="text-center">
            <h3 className="text-xl font-bold text-[#303030]">PLEASE LOGIN TO APP</h3>
            <p className="text-[#303030] text-sm mt-2">This is the best app ever!</p>
        </div>
        <form action="" className="bg-white w-full sm:max-w-md mx-auto p-6 mt-4 rounded-md shadow-sm">
            <div className="flex flex-col">
                <label htmlFor="username" className="font-medium text-[#333]">Username</label>
                <input type="email" id="username" className="w-full border px-3 py-2 text-sm outline-blue-400" required placeholder="example@gmail.com"/>
                <p className="text-xs mt-2 text-[#737373]">Your unique username to app</p>
            </div>
            <div className="flex flex-col mt-2">
                <label htmlFor="password" className="font-medium text-[#333]">Password</label>
                <input type="password" id="password" className="w-full border px-3 py-2 text-sm outline-blue-400" required placeholder="******"/>
                <p className="text-xs mt-2 text-[#737373]">Yur strong password</p>
            </div>
            <div className="mt-3 flex items-center">
                <input type="checkbox" name="check" id="remember" className="w-5 h-5" />
                <label htmlFor="remember" className="text-[#333] ml-1 hover:cursor-pointer">Remember me</label>
            </div>
            <p className="text-sm mt-2 text-[#444]">(if this is a private computer)</p>
            <div className="flex flex-col mt-3">
                <button className="w-full bg-blue-600 text-white rounded-md py-1 mb-2">Login</button>
                <button className="w-full bg-blue-600 text-white rounded-md py-1 hover:bg-gray-300 hover:text-black transition">Register</button>
            </div>
        </form>
    </main>
  );
}
export default Login;