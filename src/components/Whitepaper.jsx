import React from 'react'
// import whiteBgImg from "../assets/images/whitepaper-bg.png";
import WhiteImg1 from "../assets/images/whiteImg1.png";
import WhiteImg2 from "../assets/images/whiteImg2.png";
const Whitepaper = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 py-14">
                <img className='col-span-1 max-lg:hidden' src={WhiteImg1} alt="" />
                <div className=' lg:col-span-2 max-lg:'>
                    <h2 className='text-white md:text-[50px] text-[40px] font-bold font-Montserrat text-center'>Whitepaper</h2>
                    <p className='text-white text-lg font-semibold font-Montserrat text-center max-w-[577px] mx-auto leading-7'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.</p>
                    <div className="text-center pt-14"><button className='py-[11px] text-orange-400 hover:scale-95 duration-300 px-[21px] bg-white rounded-full text-base font-semibold font-Montserrat'>Read WhitePaper</button></div>
                </div>
                <img className='col-span-1 max-lg:hidden' src={WhiteImg2} alt="" />
            </div>
        </div>
    )
}

export default Whitepaper
