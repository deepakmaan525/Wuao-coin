import React from 'react'
// import whiteBgImg from "../assets/images/whitepaper-bg.png";
import WhiteImg1 from "../assets/images/whiteImg1.png";
import WhiteImg2 from "../assets/images/whiteImg2.png";
const Whitepaper = () => {
    return (
        <div>
            <div className="grid grid-cols-4 py-14">
                <img className='col-span-1' src={WhiteImg1} alt="" />
                <div className=' col-span-2'>
                    <h2 className='text-white text-[50px] font-bold font-Montserrat text-center'>Whitepaper</h2>
                    <p className='text-white text-lg font-semibold font-Montserrat text-center max-w-[577px] mx-auto leading-7'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.</p>
                    <div className="text-center pt-14"><button className='py-[11px] px-[21px] bg-white rounded-full text-base font-semibold font-Montserrat'>Read WhitePaper</button></div>
                </div>
                <img className='col-span-1' src={WhiteImg2} alt="" />
            </div>
        </div>
    )
}

export default Whitepaper
