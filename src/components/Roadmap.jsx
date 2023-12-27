import React from 'react'
import RoadmapImg from "../assets/images/RoadmapImg.png";
import RoadmapCards from './RoadmapCards';
const Roadmap = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-3'>
      <h2 className='text-[#32352C] text-[50px] font-bold font-Montserrat text-center'>RoadMap</h2>
      <p className='text-[#4D4D4D] font-normal font-Montserrat leading-7 text-lg max-w-[672px] text-center mx-auto'>Knowing our values, understanding the business idea and then, gradually, presenting the plans to the public is our way of doing things.</p>
      <div className=' flex justify-center'><img src={RoadmapImg} alt="RoadmapImg" /></div>
      <RoadmapCards/>
    </div>
  )
}

export default Roadmap
