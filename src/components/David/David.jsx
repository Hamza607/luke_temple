import React from 'react'
import david from '../../assets/images/david.png'
import lets from '../../assets/images/lets.gif'
import aia from '../../assets/images/aia.jpg'
import davids from '../../assets/video/david.mp4'
function David() {
    return (
        <div className="    ">
            {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="md:text-3xl text-xl px-2 md:p-0 bg-purple-700  text-white  py-2 font-bold md:my-12 relative text-center  ">
                
                DAVID BECKHAM AIA
            </h2>
            <div className='pt-8 md:flex relative justify-center px-2 gap-4 items-center my-10 w-full md:w-[90%] mx-auto rounded-md'>
                <div>
                    <img src={david} className='w-full hidden md:block md:w-[150px]' />
                </div>
                <div className="bg-cover flex justify-center z-50 left-0 text-center bg-center relative w-full md:w-[500px] md:h-[45vh] h-[300px]">
                    <video
                        autoPlay
                        muted
                        loop
                        controls
                        id="background-video"
                        className="absolute inset-0 object-cover  h-full md:rounded-3xl md:border-[3px] md:border-[#C8EFC7]"
                    >
                        <source src={davids} type="video/mp4" />
                    </video>
                  
                    <p className='text-[15px] h-full hidden md:block text-justify px-4 font-normal w-full md:w-[500px] pt-3   absolute top-[350px] md:top-[300px]'>David Beckham and his natural style was fin to style as he was looking to create a casual shoot for his own production company. It was part of three shoots we did on the day including one for Maserati.</p>
                </div>
                <div className='flex md:block'>
                    <div>
                        <img src={lets} className=' md:w-[200px] h-[200px]' />
                    </div>
                    <div>
                        <img src={aia} className='md:w-[200px] h-[200px]' />
                    </div>
                </div>
                    <p className='text-[15px] h-full text-justify px-4 font-normal w-full md:w-[500px] pt-3  md:hidden block'>David Beckham and his natural style was fin to style as he was looking to create a casual shoot for his own production company. It was part of three shoots we did on the day including one for Maserati.</p>
            </div>
        </div>
    )
}

export default David
