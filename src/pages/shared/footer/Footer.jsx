import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import {  useState } from 'react';
const Footer = () => {
    // eslint-disable-next-line no-unused-vars
    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <footer className="font-inter text-[#FFF] select-none">
            <div className="grid grid-cols-2 ">
                <aside className="bg-[#1F2937] py-16 sm:py-24 text-center">
                    <h2 className="text-xl sm:text-3xl  mb-4 sm:mb-6 font-medium">CONTACT US</h2>
                    <div className="font-light space-y-2 text-sm sm:xl">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </aside> 
                <aside className="bg-[#111827] py-16 sm:py-24 text-center space-y-6">
                    <h2 className="text-xl sm:text-3xl font-medium">Follow Us</h2>
                    <p className="font-light text-sm sm:xl">123 ABS Street, Uni 21, Bangladesh</p>
                    <div className=' w-fit mx-auto flex space-x-4 sm:space-x-8'>
                        <a href="#">
                            <BiLogoFacebook className='w-8 h-8'/>
                        </a>
                        <a href="#">
                            <AiOutlineInstagram className='w-8 h-8'/>
                        </a>
                        <a href="#">
                            <AiOutlineTwitter className='w-8 h-8'/>
                        </a>
                    </div>
                </aside>
            </div>
            <div className="footer footer-center p-4  bg-[#151515] font-medium sm:text-base">
                <p>Copyright © {year} - CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;