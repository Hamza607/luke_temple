import React from "react";
import image1 from "../../assets/images/tenent.jpg";
import imageten from "../../assets/images/imgten.jpg";
import tenlogo from "../../assets/images/tenlogo.png";
import videofootball from "../../assets/video/pepsi.mp4";
const Tennents = () => {
  return (
    <>
      <div className="mt-28">
        {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[800px] lg:before:w-[1100px] before:h-12 before:-z-10 "> */}
        <h2 className="text-3xl bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
          Tennents
        </h2>
        <div className="md:flex  w-[85%] mx-auto">
          <div className="md:w-1/2  overflow-hidden">
            <div className="flex gap-2 ">
              <img src={imageten} alt="" className="w-1/2 object-cover" />

              <img src={image1} alt="" className="w-1/2" />
            </div>
            <div>
              <img src={tenlogo} alt="" className="w-[200px] mx-auto" />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-2 ">
            {/* <h4 className="text-3xl font-semibold mt-10 w-3/4   bg-purple-700 md:bg-transparent text-white  md:text-white  my-4 relative px-2 before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[400px] before:h-12 before:-z-10 ">
              Tennent Section
            </h4> */}
              <p className="mb-4">
                In Scotland the people use Oooft for pretty much everything, so
                we thought we’d have some fun with it…This branded colour advert
                shows a fun twist on a Scotlands favourite beer.
              </p>
              <div className="bg-cover bg-center relative md:h-[60vh] h-[300px]  ">
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  id="background-video"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={videofootball} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tennents;
