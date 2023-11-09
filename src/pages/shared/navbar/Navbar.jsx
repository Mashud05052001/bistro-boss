import { Link, NavLink } from "react-router-dom";
import cartIcon from '../../../../public/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import './Navbar.css';
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = ({isActiveMenu, setIsActiveMenu}) => {
   
    const navItems = <>
        <li className="w-fit">
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="w-fit">
            <NavLink to={'/contact'}>Contact Us</NavLink>
        </li>
        <li className="w-fit">
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </li>
        <li className="w-fit">
            <NavLink to={'/menu'}>Our Menu</NavLink>
        </li>
        
        <li className="w-fit">
            <NavLink to={'/shop'}>Our Shop</NavLink>
        </li>
        <li className="w-fit">
            <NavLink to={'/login'}>Login</NavLink>
        </li>
        <p className="hidden lg:block">|</p>
        <li className="w-fit">
            <NavLink to={'/register'}>Register</NavLink>
        </li>
        {/* <NavLink to={'/cart'} className={' -mr-2'}>
            <img src={cartIcon} alt="" className="w-10 mt-1"/>
        </NavLink>
        <li className="ml-3" id="signout">
            <p className="cursor-pointer">SignOut</p>              
        </li> */}     
    </>
    return (
        <div className="fixed top-0 z-10 w-full">
            <div className="relative select-none ">
                <div className="flex justify-between bg-[#15151580] text-white py-2 sm:px-8 px-4 relative " >
                    <div className="flex w-full lg:w-auto justify-between items-center ">
                        <Link className=" text-xl font-cinzel">
                            <p className="text-xl md:text-2xl font-extrabold">BISTRO BOSS</p> 
                            <p className="text-base md:text-lg font-semibold leading-4 tracking-[0.18em]">RESTAURANT</p>
                        </Link>
                        <div className="lg:hidden absolute right-4" onClick={()=>setIsActiveMenu(!isActiveMenu)}>
                            {/* <Hamburger /> */}
                            <Hamburger toggled={isActiveMenu} toggle={setIsActiveMenu} />
                        </div>
                    </div>
                    <div className=" hidden lg:flex items-center font-extrabold tracking-wider">
                        <ul className="flex px-1 items-center text-xs" id="navbar-items">
                            {navItems}
                        </ul>
                    </div>
                    <div className="lg:hidden items-center font-extrabold tracking-wider ">
                        <ul className={`bg-[#15151580] absolute top-[75px] md:top-[94px] left-0 ${isActiveMenu ? 'opacity-100' : ' opacity-0'} w-full py-5 items-center duration-200 pl-10 grid grid-cols-2 space-y-2`} id="navbar-items">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;