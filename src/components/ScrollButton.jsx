import React from 'react'

const ScrollButton = () => {
  return (
    <div>
        <a href="#home">
            <button className='fixed bottom-10 right-4 p-2 bg-[#00c2ff] text-white rounded-full shadow-lg sm:bottom-11 sm:right-8'>
                <i className='bx bx-up-arrow-alt w-7 h-7 text-xl'></i>
            </button>
            
        </a>
    </div>
  )
}

export default ScrollButton