import React from 'react'
import HeroImg from '../assets/images/heroSec-img.png'

const HeroSec = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-3 pt-[320px]'>
      <div className="grid grid-cols-2">
        <div>
            <p className=' text-white font-Montserrat text-xl font-semibold pb-1'>Welcome to</p>
            <h1 className=' font-black font-Montserrat text-[65px] text-white max-w-[513px]'>The Future of E-Commerce</h1>
            <p className=' text-lg font-medium leading-8 text-white max-w-[384px] '>A multi-purpose token to improve digital sales and purchases</p>
            <div className="flex pt-10">
                <button className='py-[11px] px-[21px] rounded-full text-base font-Montserrat bg-white font-semibold'>How To Buy</button>
                <button className='py-[11px] px-[21px] rounded-full text-base font-Montserrat bg-transparent border border-white font-semibold'>Read Whitepaper</button>
            </div>
        </div>
      <img className='w-full' src={HeroImg} alt="heroImg" />
      </div>
    </div>
  )
}

export default HeroSec
