import React from 'react'
import RoadmapImg from "../assets/images/RoadmapImg.png";
import RoadmapCards from './RoadmapCards';
import Roadmapellipse from '../assets/images/roadmapellipse1.svg'
import Roadmapellipse2 from '../assets/images/roadmapellipse2.svg'
import Roadmapellipse3 from '../assets/images/roadmapellipse3.svg'
const Roadmap = () => {
  return (
    <div className="relative overflow-x-clip">
      <img className='max-sm:hidden absolute top-0 left-0' src={Roadmapellipse} alt="ellipse" />
      <img className='max-sm:hidden absolute bottom-0 right-0' src={Roadmapellipse2} alt="ellipse" />
      <img className='max-sm:hidden absolute right-[10%] top-[10%] animate-pulse' src={Roadmapellipse3} alt="ellipse" />
      <div className='max-w-[1140px] mx-auto px-3 lg:pt-24 md:pt-12 py-6 lg:pb-36 md:pb-18'>
        <h2 className='text-[#32352C] text-[50px] font-bold font-Montserrat text-center'>RoadMap</h2>
        <p className='text-[#4D4D4D] font-normal font-Montserrat leading-7 text-lg max-w-[672px] text-center mx-auto'>Knowing our values, understanding the business idea and then, gradually, presenting the plans to the public is our way of doing things.</p>
        <div className=' flex justify-center lg:pt-20 md:pt-10 pt-5'><img src={RoadmapImg} alt="RoadmapImg" /></div>
        <RoadmapCards/>
      </div>
    </div>
  )
}

export default Roadmap
