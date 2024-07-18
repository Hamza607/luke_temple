// import React from 'react'
// import img1 from '../../assets/images/two_man.png'
// import architects from '../../assets/images/architects.png'
// import architectsH from '../../assets/images/architectsH.png'
// import squad from '../../assets/images/squad.png'
// import video from '../../assets/video/football.mp4'
// function Architects() {
//     return (
//         <div className="h-[120vh]">
//             <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[1100px] before:h-12 before:-z-10 ">
//                 ADIDAS - 4D
//             </h2>
//             <div className='flex justify-center pt-4'>
//                 <img src={architects} className='w-[200px]' />
//             </div>
//             <div className='pt-8 md:flex relative justify-center px-2 gap-4 items-center my-10 md:w-[90%] mx-auto rounded-md'>
//                 <div className='absolute left-0 -top-[50px]'>
//                     <img src={architectsH} className='w-[350px] rounded-md' />
//                 </div>
//                 <div className="bg-cover flex justify-center left-[180px] text-center bg-center relative w-full md:w-[500px] md:h-[45vh] h-full">
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         id="background-video"
//                         className="absolute inset-0 object-cover w-full h-full"
//                     >
//                         <source src={video} type="video/mp4" />
//                     </video>
//                     <p className='text-[15px] h-full text-justify px-4 font-normal w-full md:w-[500px] pt-3 absolute top-[300px]'>The architects showcase their talents and quality with this engaging mini film. Directed by the band themselves we created a great film that crosses between their musical styling and playful nature.</p>
//                 </div>
//                 <div className='relative left-[200px] top-[100px]'>
//                     <img src={squad} className='w-[300px] rounded-md' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Architects

import React from "react";
import img1 from "../../assets/images/two_man.png";
import architects from "../../assets/images/architects.png";
import architectsH from "../../assets/images/architectsH.png";
import squad from "../../assets/images/squad.png";
import video from "../../assets/video/football.mp4";

function Architects() {
  return (
    <div className="my-10 md:my-[300px]">
      {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="md:text-3xl text-xl px-2 md:p-0 bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
        ARCHITECTS TEAR GAS
      </h2>
      <div className="flex justify-center pt-4 hide">
        <img src={architects} className="w-[200px]" alt="Architects" />
      </div>
      <div className="pt-8 md:flex relative justify-center px-2 gap-4 items-center my-10 md:w-[90%] mx-auto rounded-md">
        <div className="md:absolute left-0 -top-[50px]">
          <img
            src={architectsH}
            className="md:w-[350px] w-full rounded-md"
            alt="Architects Horizontal"
          />
        </div>
        <div className="bg-cover flex justify-center md:left-[180px] text-center bg-center relative w-full md:w-[500px] md:h-[45vh] h-[400px]">
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
          <p className="text-[15px] h-full hidden md:block text-justify px-4 font-normal md:w-[500px] pt-3 absolute top-[300px] md:top-[300px]">
            The architects showcase their talents and quality with this engaging
            mini film. Directed by the band themselves, we created a great film
            that crosses between their musical styling and playful nature.
          </p>
        </div>
        <div className="md:relative left-[200px] top-[100px]">
          <img
            src={squad}
            className="md:w-[300px] w-full rounded-md"
            alt="Squad"
          />
        </div>
      </div>
      <p className="text-[15px] h-full block md:hidden text-justify px-4 font-normal md:w-[500px] pt-3 ">
            The architects showcase their talents and quality with this engaging
            mini film. Directed by the band themselves, we created a great film
            that crosses between their musical styling and playful nature.
          </p>
    </div>
  );
}

export default Architects;
