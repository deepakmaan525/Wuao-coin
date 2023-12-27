import React from 'react'
import BenefitsImg1 from "../assets/images/benefitsImg-1.png";
import BenefitsImg2 from "../assets/images/benefitsImg-2.png";
import BenefitsImg3 from "../assets/images/benefitsImg-3.png";
const Benefits = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-3'>
      <h2 className='text-[#32352C] text-[50px] font-bold font-Montserrat pb-14'>Benefits</h2>
      <div className="grid grid-cols-3">
        <div>
            <img src={BenefitsImg1} alt="benefitsImg1" />
            <p className='leading-7 max-w-[317px] text-[#4D4D4D] text-center text-lg font-Montserrat font-normal'>Services, Products and Community All in one place!</p>
        </div>
        <div>
            <img src={BenefitsImg2} alt="benefitsImg2" />
            <p className='leading-7 max-w-[277px] text-[#4D4D4D] text-center text-lg font-Montserrat font-normal'>Selling in crypto will no longer be complicated, it will be safe and reliable.</p>
        </div>
        <div>
            <img src={BenefitsImg3} alt="benefitsImg3" />
            <p className='leading-7 max-w-[288px] text-[#4D4D4D] text-center text-lg font-Montserrat font-normal'>Buying and getting a real discount is possible? Join and check it out.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
