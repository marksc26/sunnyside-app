import React from 'react'
import eggImg from '../images/image-transform.jpg'
import cupImg from '../images/image-stand-out.jpg'
import graphicDImg from '../images/image-graphic-design.jpg'
import photography from '../images/image-photography.jpg'
import imgHeader from '../images/image-header.jpg'
import arrow from '../images/icon-arrow-down.svg'
import imgHeaderDesktop from '../images/imgDesktoop/image-header.jpg'
import eggImgDesktop from '../images/imgDesktoop/image-transform.jpg'
import cupImgDesktop from '../images/imgDesktoop/image-stand-out.jpg'

const MainInfo = () => {

  return (
    <section id='home'>
        <div className="relative">
            <img src={imgHeader} className='w-full h-auto sm:hidden'  alt="" />
            <img src={imgHeaderDesktop} className='hidden sm:flex' alt="" />
             <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center sm:-top-10">
                <h1 className="text-white text-4xl font-bold mx-4 text-center font-Fraunces sm:tracking-widest sm:text-2xl md:text-2xl md:mt-8 lg:text-4xl 2xl:text-6xl">WE ARE CREATIVES</h1>
                <img src={arrow} className='w-10 mt-8 sm:mt-2 sm:w-6 md:mt-6 md:w-8 lg:w-9 2xl:w-14' alt="" />
          </div>
        </div>

        <div className='sm:grid grid-cols-2 2xl:flex 2xl:justify-center 2xl:px-80'>
            <img src={eggImg} className='sm:hidden' alt="" />

            <div className='sm:order-last'>
               <img src={eggImgDesktop} className='hidden sm:flex' alt="" /> 
            </div>
            <div id='ab' className='py-12 px-5 text-center sm:order-first sm:p-0 flex flex-col sm:justify-center'>
                <h1 className='font-bold text-3xl mx-10 mb-6 font-Fraunces sm:text-xl sm:mx-0 sm:text-left px-8 md:text-3xl'>Transform your brand</h1>
                <p className='text-md text-center text-gray-500 mb-8 font-Barlow sm:text-sm sm:text-left md:text-lg px-8'> We are a full-service creative agency specializing in helping brands grow fast. 
                 Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <p className='font-bold text-lg font-Fraunces sm:text-left px-8 sm:text-sm md:text-lg'><span className='border-b-8 rounded-lg border-[#fff3b6]'>Learn more</span></p> 
            </div>
           
        </div>
        <div className='sm:grid grid-cols-2  2xl:flex 2xl:justify-center 2xl:px-80'>
            <img src={cupImg} className='sm:hidden' alt="" />
            <div>
               <img src={cupImgDesktop} className='hidden sm:flex' alt="" /> 
            </div>
            
            <div className='py-12 px-5 text-center sm:p-0 flex flex-col sm:justify-center'>
                <h1 className='font-bold text-3xl mx-10 mb-6 font-Fraunces sm:text-xl sm:mx-0 sm:text-left px-8 md:text-3xl'>Stand out to the right audience</h1>
                <p className='text-md text-center text-gray-500 mb-8 font-Barlow sm:text-sm sm:text-left md:text-lg px-8'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <p className='font-bold text-lg font-Fraunces sm:text-left px-8 sm:text-sm md:text-lg'><span className='border-b-8 rounded-lg border-[#ffd9ca]'>Learn more</span></p>
            </div>
          
        </div>
        <div className='sm:grid grid-cols-2 2xl:flex 2xl:justify-center 2xl:px-80'>
            <div className='relative'>
            <img id='se' src={graphicDImg} alt="" />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end  md:pb-8'>
                <h1 className='text-3xl mb-8 font-Fraunces text-[#005347]'>Graphic design</h1>
                <p className='text-center mb-16 mx-6 font-Barlow text-[#005347]'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
        </div>
        <div className='relative'>
            <img src={photography} alt="" />
            <div className='absolute top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-end md:pb-8 px-8'>
                <h1 className='text-3xl mb-8 font-Fraunces text-[#005364]'>Photography</h1>
                <p className='text-center mb-16 mx-6 font-Barlow text-[#005364]'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
        </div>
     
       
    
    </section>

  )
}

export default MainInfo