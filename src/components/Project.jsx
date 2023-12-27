import React from 'react'
import projectImg from '../assets/images/projectImg.png'
const Project = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-3'>
      <div className="grid grid-cols-2">
        <div>
            <img className=' animate-spin delay-300' src={projectImg} alt="project img" />
        </div>
        <div className='flex flex-col justify-center'>
            <h2 className='text-[50px] font-bold text-[#32352C] font-Montserrat'>Our Project</h2>
            <p className=' text-lg font-normal text-[#4D4D4D] font-Montserrat max-w-[447px]'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
        </div>
      </div>
    </div>
  )
}

export default Project
