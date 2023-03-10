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
import graphicDImgDesk from '../images/imgDesktoop/image-graphic-design.jpg'
import photographyDesk from '../images/imgDesktoop/image-photography.jpg'

const MainInfo = () => {

  return (
    <section id='home'>
        <div className="relative">
            <img src={imgHeader} className='w-full h-auto sm:hidden'  alt="" />
            <img src={imgHeaderDesktop} className='hidden sm:flex' alt="" />
             <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center sm:-top-9 2xl:-top-20">
                <h1 className="text-white text-4xl font-bold mx-4 text-center font-Fraunces sm:tracking-widest sm:text-2xl md:text-2xl md:mt-8 lg:text-5xl 2xl:text-6xl 3xl:text-8xl">WE ARE CREATIVES</h1>
                <img src={arrow} className='w-10 mt-8 sm:mt-10 sm:w-4 md:mt-6 md:w-7 lg:w-7 lg:mt-20  2xl:w-12 2xl:mt-44 ' alt="" />
          </div>
        </div>

        

        <div className='2xl:flex flex-col justify-center items-center '>
             <div className='sm:grid grid-cols-2 2xl:max-w-screen-2xl 2xl:flex justify-center'>
            <img src={eggImg} className='sm:hidden' alt="" />

            <div className='2xl:flex flex-col justify-center'>
                <img src={eggImgDesktop} className='hidden sm:flex' alt="" />
            </div>
            <div id='ab' className='py-12 px-5 text-center sm:order-first sm:p-0 flex flex-col sm:justify-center 2xl:w-1/2'>
                <h1 className='font-bold text-3xl mx-10 mb-6 font-Fraunces sm:text-xl sm:mx-0 sm:text-left px-8 md:text-3xl'>Transform your brand</h1>
                <p className='text-md text-center text-gray-500 mb-8 font-Barlow sm:text-sm sm:text-left md:text-lg px-8 2xl:text-2xl  '> We are a full-service creative agency specializing in helping brands grow fast. 
                 Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <p className='font-bold text-lg font-Fraunces sm:text-left px-8 sm:text-sm md:text-lg'><span className='border-b-8 rounded-lg border-[#fff3b6]'>Learn more</span></p> 
            </div>
           
        </div>
    <div className='sm:grid grid-cols-2 2xl:max-w-screen-2xl 2xl:flex justify-center'>
        <img src={cupImg} className='sm:hidden' alt='' />

        <div className='flex flex-col justify-center'>
            <img src={cupImgDesktop} className='hidden sm:flex' alt='' />
        </div>

        <div className='py-12 px-5 text-center sm:p-0 flex flex-col sm:justify-center 2xl:w-1/2'>
            <h1 className='font-bold text-3xl mx-10 mb-6 font-Fraunces sm:text-xl sm:mx-0 sm:text-left px-8 md:text-3xl'>Stand out to the right audience</h1>
            <p className='text-md text-center text-gray-500 mb-8 font-Barlow sm:text-sm sm:text-left md:text-lg px-8 2xl 2xl:text-2xl '>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <p className='font-bold text-lg font-Fraunces sm:text-left px-8 sm:text-sm md:text-lg'><span className='border-b-8 rounded-lg border-[#ffd9ca]'>Learn more</span></p>
            </div>
        </div>
        </div>
        
    
        
        
        <div className='sm:grid grid-cols-2 2xl:flex 2xl:justify-center'>
            <div className='relative'>
            
            <img id='se' src={graphicDImg} className='sm:hidden' alt="" />
            <img id='se' src={graphicDImgDesk} className='hidden sm:flex' alt="" />
            <div className='absolute -top-20 left-0  right-0 w-full h-full flex flex-col items-center justify-end sm:-top-3 sm:mb-2 lg:-top-16 2xl:-top-22 3xl:-top-22'>
                <h1 className='text-3xl mb-4 font-Fraunces text-[#005347] sm:text-md '>Graphic design</h1>
                <p className='text-center text-lg mx-10 font-Barlow text-[#005347] sm:text-sm sm:mx-4 lg:text-lg xl:mx-28 2xl:mx-12 3xl:mx-8 2xl:text-xl 3xl:text-2xl'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
        </div>
        <div className='relative'>
            <img src={photography} className='sm:hidden' alt="" />
            <img src={photographyDesk} className='hidden sm:flex' alt="" />
            <div className='absolute -top-20 left-0 right-0 w-full h-full flex flex-col items-center justify-end sm:-top-3 md:-top-8 lg:-top-16 2xl:-top-18'>
                <h1 className='text-3xl mb-4 font-Fraunces text-[#005364] sm:text-md'>Photography</h1>
                <p className='text-center text-lg mx-6  font-Barlow text-[#005364] sm:text-sm sm:mx-4 lg:text-lg lg:mb-7 2xl:text-xl xl:px-12 2xl:px-8 3xl:mx-10 3xl:text-2xl '>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
        </div>
     
       
    
    </section>

  )
}

export default MainInfo