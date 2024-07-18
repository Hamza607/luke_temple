import React from "react";
import messi from "../../assets/images/messi.jpg";
import sideimg2 from "../../assets/images/pepsi.png";
import pepsi from "../../assets/video/pepsi.mp4";
const PepsiSection = () => {
  return (
    <>
      {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[800px] lg:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="text-3xl bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
        
        Pepsi
      </h2>
      <div className=" md:flex w-[85%] mx-auto">
        <div className="md:w-1/2 ">
          <div className="bg-cover bg-center relative md:h-[60vh] h-[300px]  ">
            <video
              autoPlay
              muted
              loop
              id="background-video"
              controls
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={pepsi} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
        {/* <h4 className="text-3xl font-semibold mt-10 w-3/4   bg-purple-700 md:bg-transparent text-white  md:text-white  my-4 relative px-2 before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[400px] before:h-12 before:-z-10 ">
              Pepsi Section
            </h4> */}
          <p>
            Working with Messi and Ronaldinho was a dream come true. Having been
            inspired by Pepsi adverts growing up this commercial was an
            incredible experience filmed in Paris.
          </p>
          <div className="md:flex  w-full">
            <img src={sideimg2} alt="" className="md:w-1/2 h-[180px] my-2" />
            <img src={messi} alt="" className="md:w-1/2 object-cover  my-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PepsiSection;
