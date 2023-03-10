import React from 'react'
import milkBottles from '../images/image-gallery-milkbottles.jpg'
import orange from '../images/image-gallery-orange.jpg'
import cone from '../images/image-gallery-cone.jpg'
import sugarCubes from '../images/image-gallery-sugar-cubes.jpg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import logo2 from '../images/logo2.svg'
import milkBottlesDesk from '../images/imgDesktoop/image-gallery-milkbottles.jpg'
import orangeDesk from '../images/imgDesktoop/image-gallery-orange.jpg'
import coneDesk from '../images/imgDesktoop/image-gallery-cone.jpg'
import sugarCubesDesk from '../images/imgDesktoop/image-gallery-sugarcubes.jpg'
import logoDev from '../images/LOGO_BNC.png'


const Footer = () => {
  return (
    <footer className='bg-[#74d7c3]'>
        <div id='pr' className='grid grid-cols-2 sm:grid-cols-4'>
            <img src={milkBottles} className='sm:hidden' alt="" />
            <img src={milkBottlesDesk} className='hidden sm:flex' alt="" />
            
            <img src={orange} className='sm:hidden' alt="" />
            <img src={orangeDesk} className='hidden sm:flex' alt="" />

            <img src={cone} className='sm:hidden' alt="" />
            <img src={coneDesk} className='hidden sm:flex' alt="" />

            <img src={sugarCubes} className='sm:hidden' alt="" />
            <img src={sugarCubesDesk} className='hidden sm:flex' alt="" />
        </div>


        <div className='flex flex-col items-center'>
            <img src={logo2} className='my-8 3xl:w-40' alt="" />
            <ul className='text-[#007261] font-Barlow flex flex-row justify-around gap-7' >
                <li className='3xl:text-lg'><a href="#ab">About</a></li>
                <li className='3xl:text-lg' ><a href="#se">Services</a></li>
                <li className='3xl:text-lg'><a href="#pr">Projects</a></li>
            </ul>
            <div id='co' className='flex flex-row my-16 gap-4'>
                <img src={facebook} className='2xl:w-8' alt="" />
                <img src={instagram }className='2xl:w-8' alt="" />
                <img src={twitter} className='2xl:w-8' alt="" />
                <img src={pinterest}className='2xl:w-8' alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-[#007261] pb-2 font-Fraunces text-xs 3xl:text-lg'>Developed by:</p>
                <img src={logoDev} className='w-28 pb-10 3xl:w-36' alt="" />
                
            </div>
        </div>

    </footer>
  )
}

export default Footer