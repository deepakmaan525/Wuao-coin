import React from 'react'
import PartnerImg from '../assets/images/PartnerImg.png'
const Partner = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-3' >
      <h2 className='text-white md:text-[50px] text-[40px] pb-12 pt-20 font-bold font-Montserrat text-center'>Partnership</h2>
      <div className='flex justify-center pb-16'><img src={PartnerImg} alt="PartnerImg" /></div>
    </div>
  )
}

export default Partner
