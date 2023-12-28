import React from 'react'
import BenefitsImg1 from "../assets/images/benefitsImg-1.png";
import BenefitsImg2 from "../assets/images/benefitsImg-2.png";
import BenefitsImg3 from "../assets/images/benefitsImg-3.png";
const Benefits = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-3 lg:pb-40 pb-8'>
      <h2 className='text-[#32352C] text-[50px] font-bold font-Montserrat text-center md:pb-14 pb-3 pt-'>Benefits</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        <div>
            <div className="flex justify-center"><img src={BenefitsImg1} alt="benefitsImg1" /></div>
            <p className='leading-7 max-w-[317px] text-[#4D4D4D] mx-auto text-center text-lg font-Montserrat font-normal pt-5'>Services, Products and Community All in one place!</p>
        </div>
        <div>
            <div className="flex justify-center"><img src={BenefitsImg2} alt="benefitsImg2" /></div>
            <p className='leading-7 max-w-[277px] text-[#4D4D4D] mx-auto text-center text-lg font-Montserrat font-normal pt-5'>Selling in crypto will no longer be complicated, it will be safe and reliable.</p>
        </div>
        <div>
            <div className="flex justify-center"><img src={BenefitsImg3} alt="benefitsImg3" /></div>
            <p className='leading-7 max-w-[288px] text-[#4D4D4D] mx-auto text-center text-lg font-Montserrat font-normal pt-5'>Buying and getting a real discount is possible? Join and check it out.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
