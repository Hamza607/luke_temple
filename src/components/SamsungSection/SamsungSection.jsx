import React from "react";
import samsung from "../../assets/video/samsung.gif";
import k from "../../assets/video/k.png";
import video from "../../assets/video/football.mp4";

const SamsungSection = () => {
  return (
    <>
      <div className="my-36 relative">
        {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[800px] lg:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="md:text-3xl text-xl px-2 md:p-2 bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
          
          SAMSUNG X STERLING X NINETEEN SIXTY TWO
        </h2>
        <div className=" md:w-[520px] block mx-auto  relative">
          <div className="bg-cover bg-center relative md:h-[60vh] h-[300px]  mt-20">
            <video
              autoPlay
              muted
              loop
              controls
              id="background-video"
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* <div className="absolute bottom-0 w-full p-4 h-full  bg-black/40 left-0 flex flex-col justify-end "></div> */}
          </div>
          <img
            src={samsung}
            alt=""
            // className="w-[200px] block mx-auto absolute -top-12 -left-28"
            className="w-[200px] block mx-auto absolute top-[50%] -left-[30%] -z-10"
          />
          <img
            src={samsung}
            alt=""
            // className="w-[200px] block mx-auto absolute -top-12 -left-28"
            className="w-[200px] block mx-auto absolute top-[10%] -left-[40%]"
          />
          <div className="hidden md:block">

          <img
            src={k}
            alt=""
            // className="w-[150px] animate-spin block mx-auto absolute rounded-full -bottom-12 -right-28"
            className="w-[150px] animate-pulse block mx-auto absolute rounded-full top-[50%] -right-[30%]"
            />
          <img
            src={k}
            alt=""
            // className="w-[150px] animate-spin block mx-auto absolute rounded-full -bottom-12 -right-28"
            className="w-[150px] animate-pulse block mx-auto absolute rounded-full top-[10%] -right-[40%]"
            />
            </div>
        </div>
        <p className="md:w-[520px] py-4 border-t-0 px-2 border border-gray-500/25 block mx-auto text-purple-800">
          Samsung called upon Raheem Sterling and his clothing range 1962 to
          collaborate and create a piece that was earthy and relatable.
        </p>
      </div>
    </>
  );
};

export default SamsungSection;
