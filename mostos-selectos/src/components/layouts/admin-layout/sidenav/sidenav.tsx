import NavLinks from "./nav-links";
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
return (
<>
    <aside className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                    <div className="space-y-2 pb-2 py-9">
                        <NavLinks />
                        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                        <form>
                            <button
                                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                                <PowerIcon className="w-6" />
                                <div className="hidden md:block">Sign Out</div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"></div>
</>

)
}
