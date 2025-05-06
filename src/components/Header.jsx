import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <header className="py-1 px-7 flex justify-between items-center fixed top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
      {/* Left section */}
      <div className="flex lg:gap-14 gap-4 items-center">
        <img className="md:w-16 w-12" src="/images/logo.png" alt="logo" />

        <div className="hidden md:flex items-center gap-5">
          <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium whitespace-nowrap hover:opacity-70 transition-all duration-300">
            PLAY NOW
          </button>

          <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium whitespace-nowrap hover:opacity-70 transition-all duration-300">
            PLAY NOW
          </button>
        </div>
      </div>

      {/* Right section for Desktop */}
      <nav>
        <a
          href="#"
          className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 
          after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all 
          hover:after:w-full whitespace-nowrap"
        >
          <i className="bx bx-user-circle"></i> Avatar
        </a>
      </nav>
    </header>
  );
};

export default Header;
