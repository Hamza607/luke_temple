import React from "react";
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/two_man.png'
import text from '../../assets/images/adidas_text.png'
import logo from '../../assets/images/adidas_logo.gif'
import video from "../../assets/video/football.mp4";

const Adidas = () => {
  return (
    <div>
      {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="text-3xl bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
     
        ADIDAS X MANCHESTER UNITED
      </h2>
      <div className="pt-8  md:flex px-2 gap-4  items-center my-10 w-full md:w-[90%] mx-auto rounded-md ">
        <div className="w-full md:w-1/2 relative">
          <div className="bg-cover bg-center relative w-full md:w-full md:h-[60vh] h-[400px]">
            <video
              autoPlay
              muted
              loop
              controls
              id="background-video"
              className="absolute inset-0 object-cover  h-full border-2 border-[#C8EFC7] rounded-3xl"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="absolute md:block hidden top-[280px] left-[250px]">
            <img src={img3} className="w-[230px]  rounded-3xl" />
          </div>
          <div className="hidden md:block">
            <img src={logo} className="w-[150px] absolute top-0 right-0 -z-10" />
          </div>
          <div className="absolute hidden md:block -left-10 -top-12 animate-spin">
            <img src={text} className="w-[100px]" />
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full">
          <h3 className="text-2xl my-6 ml-4 font-semibold text-white relative  before:contents-[] before:rounded-sm before:absolute before:top-0 before:-left-10 before:w-[320px] before:h-8 before:bg-purple-700 before:-z-10 ">
            MANCHESTER UNITED
          </h3>
          <p className="text-[#CD5AC3] pt-4 text-base font-normal">Utilising the unique design of this special kit and teaming up with Aitch and Dutchavelli we created a slick and smooth mash up dashed with a tinge of comedy elements.Utilising the unique design of this special kit and teaming up with Aitch and Dutchavelli we created a slick and smooth mash up dashed with a tinge of comedy elements.Utilising the unique design of this special kit and teaming up with Aitch and Dutchavelli we created a slick and smooth mash up dashed with a tinge of comedy elements.Utilising the unique design of this special kit and teaming up with Aitch and Dutchavelli we created a slick and smooth mash up dashed with a tinge of comedy elements.</p>
        </div>
      </div>
    </div>
  )
};

export default Adidas;
