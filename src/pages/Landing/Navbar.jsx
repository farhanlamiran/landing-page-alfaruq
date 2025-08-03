import { useState } from "react";
import { ORGANIZATION } from "../../constants/listJumbotron";
import EachUtils from "../../utils/EachUtils";
import { LIST_NAVBAR } from "../../constants/listNavbar";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <img className="h-10 w-auto" src={ORGANIZATION.logo} alt="Logo" />
                            <span className="ml-2 text-xl font-bold text-blue-800">{ORGANIZATION.name}</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <EachUtils of={LIST_NAVBAR} render={(item, index) => (
                            <a
                                key={index}
                                href="#about"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
                            >
                                {item.title}</a>
                        )} />
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-all">
                            Gabung Kami
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-800 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <EachUtils of={LIST_NAVBAR} render={(item, index) => (
                            <a
                                key={index}
                                href="#about"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
                            >
                                {item.title}</a>
                        )} />
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium mt-2">
                            Gabung Kami
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar