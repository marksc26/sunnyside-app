import React from 'react'
import imgEmily from '../images/image-emily.jpg'
import imgThomas from '../images/image-thomas.jpg'
import imgJennie from '../images/image-jennie.jpg'

const Testimonials = () => {
  return (
    <section className='text-center 2xl:px-72 pb-20'>
        <h1 className='my-10 text-gray-400 text-md font-Fraunces tracking-widest md:pt-20'>CLIENT TESTIMONIALS</h1>
        <div className='sm:flex flex-row pt-6'>
           <div className='mb-10'>
            <div className='flex justify-center'>
                <img className='rounded-full w-20 mb-6
                ' src={imgEmily} alt="" />
            </div>
            <div>
                <p className='mx-6 mb-6 text-gray-600 font-Barlow'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <h2 className='font-Fraunces m-1'>Emily R.</h2>
                <p className='text-sm text-gray-400 font-Barlow'>Marketing Director</p>
            </div>
        </div>
        <div className='mb-10'>
            <div className='flex justify-center'>
                <img src={imgThomas} className='rounded-full w-20 mb-6' alt="" />
            </div>
            <div>
                <p className='mx-6 mb-6 text-gray-600 font-Barlow md:px-1 sm:px-4'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <h2 className='font-Fraunces mb-1'>Thomas S.</h2>
                <p className='text-sm text-gray-400 font-Barlow'>Chief Operating Officer</p>
            </div>
        </div>
        <div className='mb-16'>
            <div className='flex justify-center'>
                <img src={imgJennie} className='rounded-full w-20 mb-6' alt="" />
            </div>
            <div>
                <p className='mx-6 mb-6 text-gray-600 font-Barlow'> Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h2 className='font-Fraunces mb-1'>Jennie F.</h2>
                <p className='text-sm text-gray-400 font-Barlow'>Business Owner</p>
            </div>
        </div> 
        </div>
        
    </section>
  )
}

export default Testimonials