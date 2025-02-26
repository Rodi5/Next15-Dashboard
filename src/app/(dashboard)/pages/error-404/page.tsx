'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const Error404 = () => {
    const [errorNumber, setErrorNumber] = useState(0);
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (errorNumber < 404) {
            timeout = setTimeout(() => {
                setErrorNumber((prev) => prev + 1);
            }, 0.9);
        }
        return () => clearTimeout(timeout);
    }, [errorNumber]);

    return (
        <main className="flex flex-col justify-center w-full bg-gray-100 h-screen p-6">
            <div className="text-center mx-auto">
                <h3 className="text-4xl font-bold text-[#444]">ERROR <span className="text-blue-600">{errorNumber}</span></h3>
                <p className="text-[#444] text-sm mt-2 max-w-lg leading-6">Sorry, but the page you are looking for has note been found. Try checking the URL for the error, then hit the refresh button on your browser or try found something else in our app.</p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center sm:flex-row sm:gap-3">
                <Link href='/' className="w-fit font-medium bg-blue-600 text-white rounded-md px-7 py-2 mt-4 mb-2">Dashboard</Link>
                <button className="w-fit font-medium bg-blue-600 text-white rounded-md px-7 py-2 mt-4 mb-2">Report Problem</button>
            </div>
        </main>
    );
}
export default Error404;