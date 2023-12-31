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
                <nav className='flex justify-between items-center py-4 sm:py-7'>
                    <a href=""><img className='max-sm:h-9 max-sm:w-24 max-sm:object-contain' width={180} height={53} src={PageLogo} alt="Pagelogo" /></a>
                    <ul className='flex items-center gap-[25px]'>
                        <li><a href="" className='text-base font-Montserrat font-semibold text-white'>ICO</a></li>
                        <li><a href="" className='text-base font-Montserrat font-semibold text-white'>WHITEPAPER</a></li>
                        <li className='flex gap-3  max-md:hidden'>
                            <a className=' hover:-translate-y-1 duration-500' href="http://discord.com" target='_blank'><img src={Discord} alt="discord" /></a>
                            <a className=' hover:-translate-y-1 duration-500' href="http://twitter.com" target='_blank'><img src={Twitter} alt="twitter" /></a>
                            <a className=' hover:-translate-y-1 duration-500' href="http://telegram.com" target='_blank'><img src={Telegram} alt="telegram" /></a>
                            <a className=' hover:-translate-y-1 duration-500' href="http://linkden.com" target='_blank'><img src={Linkedin} alt="linkedin" /></a>
                        </li>
                        <li className='border max-md:hidden flex rounded-full w-[93px] group'><img className='ps-1 py-1 group-hover:rotate-[50deg] duration-500' src={Earth} alt="" /><select className=' pr-1 w-[93px] fs-base font-Montserrat font-semibold text-white fs-base bg-transparent outline-none'>
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
