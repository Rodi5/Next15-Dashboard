const PasswordRecovery = () => {
    return (
        <main className="flex flex-col justify-center w-full bg-gray-100 h-screen p-6">
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#303030]">PASSWORD RECOVER</h3>
                <p className="text-[#303030] text-sm mt-2">Please fill the form to recover your password</p>
            </div>
            <form action="" className="bg-white w-full sm:max-w-md mx-auto p-6 mt-4 rounded-sm shadow-sm">
                <p className="text-[#303030] text-sm mb-3 leading-6">Enter your email address and your password will be reset and emailed to you.</p>
                <div className="flex flex-col">
                    <label htmlFor="username" className="font-medium text-[#333]">Email</label>
                    <input type="email" id="username" className="w-full border px-3 py-2 text-sm outline-blue-400" required placeholder="example@gmail.com"/>
                    <p className="text-xs mt-2 text-[#737373]">Your registered email address</p>
                </div>
                <button className="w-full text-sm bg-blue-600 text-white rounded-sm py-2 mt-4 mb-2">Reset Password</button>
            </form>
        </main>
    );
  }
  export default PasswordRecovery;