import React from 'react'
import projectImg from '../assets/images/projectImg.png'
import ProjectEllipse from "../assets/images/projrct-svg-img.svg"
const Project = () => {
  return (
    <div className="relative overflow-hidden">
      <img className='absolute right-0 -top-[59%] max-lg:hidden' src={ProjectEllipse} alt="ellipse" />
      <div className='max-w-[1140px] mx-auto px-3 '>
        <div className="grid md:grid-cols-2">
          <div className=' overflow-hidden'>
              <img className=' animate-spin delay-300' src={projectImg} alt="project img" />
          </div>
          <div className='flex flex-col justify-center'>
              <h2 className='md:text-[50px] text-[40px] font-bold text-[#32352C] font-Montserrat'>Our Project</h2>
              <p className=' sm:text-lg text-xs font-normal text-[#4D4D4D] font-Montserrat lg:max-w-[447px] w-full'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
