import React from "react";
import logofooter from "../../assets/images/headlogo.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const Footer = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-0 relative top-10"
      >
        <path
          fill="#7E22CE"
          fill-opacity="1"
          d="M0,256L80,261.3C160,267,320,277,480,256C640,235,800,181,960,144C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className=" bg-purple-700 text-white ">
        <div className="md:flex justify-between px-2 relative">
          <div className=" px-2 md:px-10 ">
            <div className="md:w-2/3">
              {/* <h1 className="text-3xl  font-semibold ">Luke Temple Logo</h1> */}
            <img src={logofooter} alt="" className="w-[200px]" />
              <p className=" text-justify z-10 md:text-white">
                Thanks for looking, with over 15 years of experience in the
                industry, this is a tiny snippet of work I have done recently.
                If you have anything more specific or want to see my full
                portfolio, please get in touch on.
              </p>
            </div>
          </div>
         
          <div className="  flex flex-col justify-end p-4">
            <div className=" text-2xl">
              <h3 className="my-2 text-md font-semibold">Connect with us</h3>
              <ul className="flex gap-3 mt-4">
                <li className="border border-gray-50/25 p-2 cursor-pointer hover:text-white hover:bg-purple-600 rounded">
                  <FaFacebook className=" " />
                </li>
                <li className="border border-gray-50/25 p-2 cursor-pointer  hover:text-white hover:bg-purple-600 rounded">
                  <FaLinkedinIn className=" " />
                </li>
                <li className="border border-gray-50/25 p-2 cursor-pointer  hover:text-white hover:bg-purple-600 rounded">
                  <FaTwitter className=" " />
                </li>
                <li className="border border-gray-50/25 p-2 cursor-pointer  hover:text-white hover:bg-purple-600 rounded">
                  <FaWhatsapp className=" " />
                </li>
              </ul>
            </div>
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 -z-10"
          >
            <path
              fill="#7E22CE"
              fill-opacity="1"
              d="M0,256L80,261.3C160,267,320,277,480,256C640,235,800,181,960,144C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg> */}
        </div>
        <div className="p-2 flex justify-between items-center  bg-[#7E22CE]">
          <div className="flex cursor-pointer ml-4 w-[70px]">
            {/* <FaInstagram className="text-4xl text-white" />
            <GoArrowUpRight className="text-xl text-gray-300 ml-1" /> */}
          </div>
          <ul className="flex gap-4 text-sm text-white">
            <li className="underline cursor-pointer">Privacy & Policy</li>
            <li className="underline cursor-pointer">Terms & Condition</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
