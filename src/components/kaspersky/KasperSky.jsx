import React from "react";
import kaspersky from "../../assets/video/kaspersky.png";
import kas from "../../assets/images/kas.png";
const KasperSky = () => {
  return (
    <>
      <div className="my-4">
        {/* <h2 className="text-4xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold md:my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[800px] lg:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="text-3xl bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
       
          Kaspersky
        </h2>

        <div className="md:flex ">
          <div className="md:w-1/2 p-2">
            <img src={kaspersky} alt="" className="w-[300px] hidden md:block  md:ms-auto" />
            <h4 className="text-3xl font-semibold mt-10 w-3/4 md:ms-auto  bg-purple-700 md:bg-transparent text-white  md:text-white  my-4 relative px-2 before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[400px] before:h-12 before:-z-10 ">
              Heading Section
            </h4>
            <div className="md:w-3/4 ms-auto">
              <p className="text-justify">
              Here we see Officer Kaspersky challenging a hacker, we created a
                banana suit and styled multiple online presences to create this
                fun and engaging commercial show worldwide.
                Here we see Officer Kaspersky challenging a hacker, we created a
                banana suit and styled multiple online presences to create this
                fun and engaging commercial show worldwide.
              </p>
            </div>
          </div>
          <div className="md:w-1/2  p-3">
            <img src={kas} alt="" className=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default KasperSky;
