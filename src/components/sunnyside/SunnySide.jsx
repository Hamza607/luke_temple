import React from "react";
import videofootball from "../../assets/video/pepsi.mp4";
import albert from "../../assets/images/albert.png";
import east from "../../assets/images/east.png";
import circle from "../../assets/images/circle.svg";

const SunnySide = () => {
  return (
    <>
      {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-24 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[800px] lg:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="md:text-3xl text-xl px-2 md:p-0 bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
        SUNNYSIDE IS EASTENDERS ‘ITS WHO WE ARE’
      </h2>
      <div className="w-[85%] mx-auto">
        <div className="">
          {/* <h4 className="text-3xl font-semibold mt-10 w-3/4   bg-purple-700 md:bg-transparent text-white  md:text-white  my-4 relative px-2 before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[400px] before:h-12 before:-z-10 ">
            Sunny Side Section
          </h4> */}
          <p>
            Eastenders launched there new campaign to showcase all of the new
            storylines at the time. We tried to capture the gritty nature and
            mixed in some amazing colourful moments to showcase the great tools
            we had at our disposal.
            Eastenders launched there new campaign to showcase all of the new
            storylines at the time. We tried to capture the gritty nature and
            mixed in some amazing colourful moments to showcase the great tools
            we had at our disposal.
          </p>
        </div>
        <div className="md:flex justify-between gap-5">
          <div className="md:w-1/4">
            <img src={albert} alt="" className="" />
          </div>
          <div className="bg-cover relative bg-center  w-full md:w-2/4 md:h-[60vh] h-[300px]  ">
            <video
              autoPlay
              muted
              loop
              id="background-video"
              controls
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videofootball} type="video/mp4" />
            </video>
            <img src={circle} alt="" className="w-[100px] absolute -bottom-10 -z-10 -left-10" />
            <img src={circle} alt="" className="w-[100px] absolute -top-10 -z-10 -right-10" />
          </div>
          <div className="md:w-1/4 flex items-end">
            <img src={east} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SunnySide;
