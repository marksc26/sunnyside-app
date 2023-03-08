import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'

const Header = () => {

  const [navbarMenu, setNavbarMenu] = useState(false)

  const showMenu = () => {

    setNavbarMenu(!navbarMenu)
  }

  const handleOption = () => {
    setNavbarMenu(!navbarMenu)
  }


  return (
    <header className='bg-transparent z-50 w-full pt-4 px-5 absolute text-black flex flex-row h-14 justify-between mt-2' >
      <div className='sm:flex items-center pl-3'>
        <img src={logo} className='w-22 sm:w-30' alt="" />
      </div>
        

        {
          navbarMenu ? (<div className='bg-white absolute top-0 left-0 right-0 mx-6 mt-24 mb'>
           <ul className=' text-center text-gray-500 font-semibold py-8 px-24 pb-10'>
            <li onClick={handleOption} className='my-2 hover:bg-yellow-400 p-2 rounded-3xl'><a href="#ab">About</a></li>
            <li onClick={handleOption} className='my-2 hover:bg-yellow-400 p-2 rounded-3xl'><a href="#se">Services</a></li>
            <li onClick={handleOption} className='my-2 hover:bg-yellow-400 p-2 rounded-3xl'><a href="#pr">Projects</a></li>
            <li onClick={handleOption} className='my-2 hover:bg-yellow-400 p-2 rounded-3xl'><a href="#co">Contact</a></li>
          </ul> 
        </div>) : ""
        }

        <div className='sm:flex items-center '>
          <div className='hidden sm:flex pr-3'>
        <ul className='sm:flex gap-6 font-Barlow'>
            <li className='text-white py-1 px-2 rounded-3xl hover:bg-white hover:text-black'><a href="#ab">About</a></li>
            <li className='text-white py-1 px-2 rounded-3xl hover:bg-white hover:text-black'><a href="#se">Services</a></li>
            <li className='text-white py-1 px-2 rounded-3xl hover:bg-white hover:text-black'><a href="#pr">Projects</a></li>
            <li className='text-white py-1 px-2 rounded-3xl hover:bg-white hover:text-black'><a href="#co">Contact</a></li>
          </ul> 
        </div>
        <div className=''>
           <img onClick={showMenu} src={menu} className='sm:hidden' alt="" /> 
        </div>
        </div>

          
    </header>
  )
}

export default Header