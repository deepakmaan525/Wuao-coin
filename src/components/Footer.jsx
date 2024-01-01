import logo from '../assets/images/Page-logo.png'
import Discord from '../assets/images/footer-discord.svg'
import Twitter from '../assets/images/footer-twitter.svg'
import Telegram from '../assets/images/footer-telegram.svg'
import Linkedin from '../assets/images/footer-linkedin.svg'
import FooterEllipse from '../assets/images/Footerellipse.svg'
import FooterEllipse2 from '../assets/images/Footerellipse2.svg'
const Footer = () => {
    return (
        <div className='relative overflow-hidden'>
            <img className=' absolute -top-[20%] left-0' src={FooterEllipse} alt="ellipse"/>
            <img className=' absolute bottom-0 right-0' src={FooterEllipse2} alt="ellipse2"/>
            <div className='mx-auto px-3 max-w-[1140px] mb-5 sm:mb-8 md:mb-12 lg:my-[70px] mt-10 sm:mt-14 md:mt-20 lg:mt-[110px]'>
                <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
                    <div className='col-span-2 xs:col-span-3 md:col-span-2 xl:col-span-3 2xl:col-span-4 flex flex-col max-w-[255px]'>
                        <img src={logo} alt="logo" />
                        <p className='text-[#32352C] text-xs sm:text-base font-Montserrat font-normal opacity-70 mt-4 sm:mt-[22px]'>Welcome to The Future of the Market. The world's first Global TechFi Platform</p>
                        <div className='flex items-center gap-3 mt-4 sm:mt-6 relative z-10'>
                            <a className='hover:-translate-y-1 duration-500' href="http://discord.com" target='_blank'><img src={Discord} alt="discord"/></a>
                            <a className='hover:-translate-y-1 duration-500' href="http://twitter.com" target='_blank'><img src={Twitter} alt="twitter"/> </a>
                            <a className='hover:-translate-y-1 duration-500' href="http://telegram.com" target='_blank'><img src={Telegram} alt="telegram"/></a>
                            <a className='hover:-translate-y-1 duration-500' href="http://linkden.com" target='_blank'> <img src={Linkedin} alt="linkedin" /></a>
                        </div>
                    </div>
                    <div className="col-span-1 max-md:order-3">
                        <ul>
                            <li className='text-[#32352C] text-base sm:text-lg font-semibold font-Montserrat'>Documents</li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[14px] opacity-80 sm:leading-9' href="#">WhitePaper</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Customers</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Business</a></li>
                        </ul>
                        <div className="col-span-1 max-md:order-2 sm:hidden mt-3">
                        <ul>
                            <li className='text-[#32352C] text-base sm:text-lg font-semibold font-Montserrat'>Company</li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[14px] opacity-80 sm:leading-9' href="#">WUAOCOIN</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">WUAOSHOP</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-span-1 max-md:order-1">
                        <ul>
                            <li className='text-[#32352C] text-base sm:text-lg font-semibold font-Montserrat'>Quick Links</li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[14px] opacity-80 sm:leading-9' href="#">Home</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">About</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Benefits</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">ICO</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Roadmap</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Tokenomics</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">Partnership</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 max-md:order-2 max-sm:hidden">
                        <ul>
                            <li className='text-[#32352C] text-base sm:text-lg font-semibold font-Montserrat'>Company</li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[14px] opacity-80 sm:leading-9' href="#">WUAOCOIN</a></li>
                            <li><a className='text-[#32352C] bottomLine text-xs sm:text-base font-Montserrat font-normal pt-[10px] opacity-80 sm:leading-9' href="#">WUAOSHOP</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-[#32352C] font-Montserrat font-normal text-xs sm:text-base leading-6 text-center opacity-60 py-3 sm:py-4 md:py-5 lg:py-[25px] border-[#9F9F9F] border-t'>© Copyright {(new Date().getFullYear())} - Wuaocoin</p>
        </div>
    )
}

export default Footer