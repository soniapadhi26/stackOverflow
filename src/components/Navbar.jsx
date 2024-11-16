import React, { useState } from "react";
import logo from "../assets/Stack_Overflow-Logo.wine.svg";
import message from "../assets/message.svg";
import trophy from "../assets/trophy.svg";
import communication from "../assets/communication.svg";

const Navbar = () => {
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSblcRXfNTMckW97YdX6fgKEVc6ngJ79j0xg&s"
  );

  return (
    <nav className="fixed flex items-center justify-around w-full">
      {/* Logo Section */}
      <div className="logo flex items-center">
        <img src={logo} alt="logo" className="h-36" />
      </div>

      {/* Search Bar Section */}
      <form className="max-w-md w-full">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="w-full p-3 text-sm text-gray-600 border-2 border-gray-300 rounded-full "
            placeholder="Search Your Answers Here..."
            required
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 text-orange-500 hover:text-orange-600 py-1 px-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Links Section */}
      <div className="links flex gap-6">
        <button>
          <img src={message} alt="message" className="h-5" />
        </button>

        <button>
          <img src={trophy} alt="trophy" className="h-5 ml-3" />
        </button>

        <button>
          <img src={communication} alt="communication" className="h-10" />
        </button>

        <div
          className="rounded-full overflow-hidden flex items-center justify-center bg-gray-200"
          style={{ width: "35px", height: "35px" }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
