import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Nav() {
  return (
    <div className="w-full h-[80px] flex items-center justify-center md:justify-center gap-[30px] px-[20px] fixed top-0 left-0 z-[9999] bg-[#fff9f6] overflow-visible">
      <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d]">
        Vingo
      </h1>
      <div className="w-[60%] md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] flex">
        <div className="flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400">
            <FaLocationDot size={25} className="text-[#ff4d2d]" />
        <div className="w-[80%] truncate text-gray-600 ">jhansi</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
