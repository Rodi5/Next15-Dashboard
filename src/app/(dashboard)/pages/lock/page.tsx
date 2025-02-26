import { FaLock } from "react-icons/fa6";

const Lock = () => {
    return (
        <main className="flex flex-col justify-center w-full bg-gray-100 h-screen p-6 text-center">
            <form action="" className="bg-white w-full sm:max-w-lg mx-auto p-6 mt-4 rounded-sm shadow-sm">
                <div className="flex flex-col mb-4">
                    <FaLock size={48} className="text-center mx-auto text-blue-600 mb-2"/>
                    <p className="font-bold text-xl text-[#333]"><span className="text-blue-600">3:43:15 PM</span> Friday, February 27, 2015</p>
                    <p className="text-sm leading-6 mt-2 mb-4">Your are in lock screen. Main app was shut down and you need to enter your passwor to go back to app.</p>
                    <input type="password" id="password" className="w-full border px-3 py-2 text-sm outline-blue-400" required placeholder="******"/>
                </div>
                <button className="w-fit mx-auto bg-blue-600 text-white text-sm rounded-md px-3 py-2">Unlock</button>
            </form>
        </main>
    );
}
export default Lock;