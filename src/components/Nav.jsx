import React from 'react'
import PageLogo from '../assets/images/Page-logo.png'
import Discord from '../assets/images/Discord-logo.svg'
import Twitter from '../assets/images/x-logo.svg'
import Telegram from '../assets/images/telegram-logo.svg'
import Linkedin from '../assets/images/linkedin-logo.svg'
import Earth from '../assets/images/earth-logo.svg'

const Nav = () => {
    return (
        <div>
            <div className=" max-w-[1140px] mx-auto px-3">
                <nav className='flex justify-between items-center py-7'>
                    <a href=""><img src={PageLogo} alt="Pagelogo" /></a>
                    <ul className='flex items-center gap-[25px]'>
                        <li><a href="" className='fs-base font-Montserrat font-semibold text-white'>ICO</a></li>
                        <li><a href="" className='fs-base font-Montserrat font-semibold text-white'>WHITEPAPER</a></li>
                        <li className='flex gap-3'>
                            <a className=' hover:animate-bounce duration-300' href=""><img src={Discord} alt="discord" /></a>
                            <a className=' hover:animate-bounce duration-300' href=""><img src={Twitter} alt="twitter" /></a>
                            <a className=' hover:animate-bounce duration-300' href=""><img src={Telegram} alt="telegram" /></a>
                            <a className=' hover:animate-bounce duration-300' href=""><img src={Linkedin} alt="linkedin" /></a>
                        </li>
                        <li><a href=""></a></li>
                        <li className='border flex rounded-full w-[93px] group'><img className='ps-1 py-1 group-hover:rotate-[50deg] duration-500' src={Earth} alt="" /><select className=' pr-1 w-[93px] fs-base font-Montserrat font-semibold text-white fs-base bg-transparent outline-none'>
                            <option className='fs-base font-Montserrat font-semibold text-white fs-base bg-slate-600'>Eng</option>
                            <option className='fs-base font-Montserrat font-semibold text-white fs-base bg-slate-600'>Hi</option>
                            <option className='fs-base font-Montserrat font-semibold text-white fs-base bg-slate-600'>Pun</option>
                        </select></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
