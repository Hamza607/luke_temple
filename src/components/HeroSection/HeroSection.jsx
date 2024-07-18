import React, { useEffect, useState } from "react";
import video from "../../assets/video/football.mp4";
import logo from "../../assets/images/headlogo.png"

const HeroSection = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const originalText = "Luke Temple";
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      currentText = originalText.slice(0, index);
      setText(currentText);
      index++;

      if (index > originalText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* <div className="h-screen w-[100%] block mx-auto bg-slate-100/50">
        <div className="bg-cover bg-center relative h-[85vh] ">
          <video
            autoPlay
            muted
            loop
            id="background-video"
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="relative z-10 p-10 text-white">
            <h3 className="px-2 overflow-hidden text-3xl font-semibold text-white bg-black rounded w-fit">
              {text}
            </h3>
            <p className="mt-4 w-[280px] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus optio ullam numquam amet aliquam iure culpa doloribus
              nemo animi, dolores deleniti, libero ipsum fugit sed dicta maxime
              iste dolorum rem!
            </p>
          </div>
        </div>
      </div> */}
      <div className="md:flex  md:w-[100%] mx-auto  overflow-hidden">
        <div className="md:w-1/2 innerstyle px-10 py-4 bg-slate-500/5 flex flex-col justify-center ">
          {/* <img src={logo} alt="" className="w-[200px]" /> */}
          <h3 className="text-2xl font-semibold text-white relative  before:contents-[] before:absolute before:top-0 before:-left-10 before:w-[200px] before:h-8 before:bg-purple-700 before:-z-10 ">
            Hero Section
          </h3>
          <p className="text-justify my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            veritatis molestias voluptates in, voluptate nemo necessitatibus
            doloribus placeat reiciendis, optio expedita doloremque ad! Est
            dolore fugiat minus, omnis eum quo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            veritatis molestias voluptates in, voluptate nemo necessitatibus
            doloribus placeat reiciendis, optio expedita doloremque ad! Est
            dolore fugiat minus, omnis eum quo!
          </p>
        </div>
        <div className="relative md:w-1/2">
          <div className="bg-cover bg-center relative md:h-[85vh] h-[400px] ">
            <video
              autoPlay
              muted
              loop
              id="background-video"
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full h-full p-4 bg-black/40 ">
              <div className="w-3/5 ">
                <h1 className="text-xl font-semibold text-white ">
                  Video Content
                </h1>
                <h1 className="text-justify text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  ad vitae neque quae accusamus asperiores.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
