import React, { useState} from "react";
import aboutLogo from "../assets/icons/circle_mark_question_icon_217896.svg";
import notificationIcon from "../assets/icons/bell_icon_128935.svg";
import userLogo from "../assets/icons/4092564-about-mobile-ui-profile-ui-user-website_114033.svg";
import 'react-toastify/dist/ReactToastify.css';



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const items = ["Profile", "Settings", "Logout"];

    return (
        <div className="fixed top-0 w-full text-white py-4 px-6  bg-white border-b-2 border-gray-300 z-20">
            <nav className="flex items-center justify-end">
                <div className="flex items-center space-x-5">
                    <img src={aboutLogo} alt="About" />
                    <img src={notificationIcon} alt="Notification" />

                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="flex items-center bg-white text-black border border-black rounded-md p-2 focus:outline-none"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                        >
                            <img
                                src={userLogo}
                                alt="User"
                                className="rounded-full h-6 w-6 object-cover"
                            />
                            <span className="ml-2 font-semibold">Koteswara Rao</span>
                            <svg className="h-3 w-3 ml-1" fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5L7.5 12L1 5" stroke="black" strokeLinecap="square" />
                            </svg>
                        </button>
                        {isOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg"
                                role="menu"
                                aria-hidden={!isOpen}
                            >
                                <div className="py-1" role="none">
                                    {
                                        items.map((item) => (
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                {item}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}