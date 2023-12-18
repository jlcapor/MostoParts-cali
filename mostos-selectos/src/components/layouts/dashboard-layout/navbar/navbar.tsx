import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button className="lg:hidden mr-2 mx-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                        <Link 
                            href={'/dashboard'} 
                            className="text-xl font-bold flex items-center lg:ml-2.5"
                        >
                            <div className="w-32 text-gray-800 md:w-40">
                                <span className="text-3xl text-sky-600 font-black text-center self-center whitespace-nowrap uppercase">Selectors</span> 
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {/* Search mobile */}
                        <Link href={''} className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-bold rounded-lg text-sm  px-5 py-2.5 text-center items-center mr-3">
                            <PowerIcon className="w-6 mx-1"/>
                            <div className="hidden md:block">Sign Out</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}