import React from 'react'
import HeroImg from '../assets/images/heroSec-img.png'

const HeroSec = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-3 py-10 lg:py-32 xl:py-[320px]'>
      <div className="grid lg:grid-cols-2">
        <div>
            <p className=' text-white font-Montserrat text-xl font-semibold pb-1'>Welcome to</p>
            <h1 className=' font-black font-Montserrat text-[40px] md:text-[65px] text-white max-w-[513px]'>The Future of E-Commerce</h1>
            <p className=' text-lg font-medium leading-8 text-white max-w-[384px] '>A multi-purpose token to improve digital sales and purchases</p>
            <div className="flex pt-10 sm:flex-row flex-col gap-4">
                <button className='hover:scale-95 duration-300 max-w-[200px] py-[11px] px-[21px] rounded-full text-orange-400 text-base font-Montserrat bg-white font-semibold'>How To Buy</button>
                <button className='hover:scale-95 duration-300 max-w-[200px] py-[11px] px-[21px] rounded-full text-base font-Montserrat bg-transparent border text-white border-white font-semibold'>Read Whitepaper</button>
            </div>
        </div>
      <img className='w-full pt-5 lg:pt-0' src={HeroImg} alt="heroImg" />
      </div>
    </div>
  )
}

export default HeroSec
