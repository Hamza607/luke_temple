import React from 'react'
import PropTypes from 'prop-types'
import video from '../../assets/video/football.mp4'
import adidas_4D from '../../assets/images/adidas4d.gif'
import text from '../../assets/images/adidas_text.png'
import img1 from '../../assets/images/two_man.png'
import logo from '../../assets/images/adidas_logo.gif'
const Adidas_4D = () => {
    return (
        <div className='my-10'>
            {/* <h2 className="text-3xl bg-purple-700 md:bg-transparent text-white  md:text-white font-bold my-12 relative text-center before:absolute before:left-0 before:-top-[10px] before:rounded before:contents-[] before:bg-purple-700 before:text-white md:before:w-[1100px] before:h-12 before:-z-10 "> */}
      <h2 className="text-3xl bg-purple-700  text-white  py-2 font-bold my-12 relative text-center  ">
           
                ADIDAS - 4D
            </h2>
            <div className="pt-8 md:flex relative justify-center px-2 gap-4 items-center my-10 md:w-[90%] mx-auto rounded-md ">
                <div className='absolute md:block hidden md:left-[180px] top-20'>
                    <img src={adidas_4D} />
                </div>
                <div className='absolute md:block hidden top-8 left-[340px] animate-spin'>
                    <img src={text} className='w-[100px] ' />
                </div>
                <div className="bg-cover z-50 md:left-7 md:top-[110px] text-center bg-center relative w-full md:w-[500px] md:h-[45vh] h-[400px]">
                    <video
                        autoPlay
                        muted
                        loop
                        controls
                        id="background-video"
                        className="absolute inset-0 object-cover h-full"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                    <p className='text-[15px] text-justify px-6 font-normal md:block hidden w-full md:w-[500px] pt-3 absolute top-[400px] md:top-[300px]'>Adidas focus on there new sole for this great trainer with this crisp, colourful advert. Utilising many influencers this series of three videos was made to showcase Adidas clothing as well as the great footwear.</p>
                </div>
                <div className='absolute left-[850px] top-0'>
                    <img src={img1} className='w-full md:w-[200px] h-[150px] rounded-xl' />
                </div>
                <div className='w-[200px] absolute top-[200px] left-[900px]'>
                    <img src={logo} className='w-[300px]' />
                </div>
            </div>
            <p className='text-[15px] text-justify px-6 font-normal w-full md:w-[500px] pt-3 md:hidden block '>Adidas focus on there new sole for this great trainer with this crisp, colourful advert. Utilising many influencers this series of three videos was made to showcase Adidas clothing as well as the great footwear.</p>

        </div>
    )
}

export default Adidas_4D
