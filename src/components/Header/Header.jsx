import React, { useEffect, useState } from "react";
import logo from "../../assets/images/headlogo.png"
const Header = () => {
  return (
    <>
      <div className=" py-2 shadow flex justify-between items-center px-6">
        <h1 className="font-bold text-xl p-2 text-purple-500">
         <img src={logo} alt="" className="w-[100px] cursor-pointer" />
        </h1>
        <ul className="flex gap-5 ">
          <li className="border px-2 md:flex hidden py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            Home
          </li>
          <li className="border px-2 md:flex hidden py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            About
          </li>
          <li className="border px-2 md:flex hidden py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            Profile
          </li>
          <li className="border px-2 md:flex hidden py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            Testimonial
          </li>
          <li className="border px-2 py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            Sign In
          </li>
          <li className="border px-2 py-1 border-transparent hover:border-purple-500 duration-200 transition-all cursor-pointer delay-100 bg-transparent hover:bg-purple-500 hover:text-white">
            Log In
          </li>
        </ul>
      </div>
      {/* <img src={logo} alt="" className="fixed top-2 z-50 right-[100px] cursor-pointer" /> */}
    </>
  );
};

export default Header;
