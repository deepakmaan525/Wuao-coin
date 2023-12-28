import React from 'react'
import TakenomicsImg from "../assets/images/TakenomicsImg.png";
import TakenEllipse from "../assets/images/taken-ellipse1.svg"
import TakenEllipse2 from "../assets/images/taken-ellipse2.svg"
import TakenEllipse3 from "../assets/images/taken-ellipse3.svg"
const Tekenomics = () => {
  return (
    <div className="relative overflow-x-clip">
      <img className='absolute top-0 max-sm:hidden left-0' src={TakenEllipse} alt="takenellipse"/>
      <img className='absolute bottom-0 max-sm:hidden right-0' src={TakenEllipse2} alt="takenellipse"/>
      <img className='absolute bottom-[10%] max-sm:hidden animate-pulse left-[10%]' src={TakenEllipse3} alt="takenellipse"/>
      <div className='max-w-[1140px] mx-auto px-3 lg:py-28 md:py-14 py-5'>
        <h1 className='text-[#32352C] md:text-[50px] text-[40px] font-bold font-Montserrat text-center'>Tokenomics</h1>
        <div className="flex justify-center"><img src={TakenomicsImg} alt="TakenomicsImg" /></div>
      </div>
    </div>
  )
}

export default Tekenomics
