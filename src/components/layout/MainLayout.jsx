import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/shared/navbar/Navbar';
import Footer from '../../pages/shared/footer/Footer';
import { useState } from 'react';

const MainLayout = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    return (
        <div className='font-inter'>
            <Navbar isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu}/>
            <div onClick={()=>setIsActiveMenu(false)}>
                <Outlet/>
                <div className='mt-96'/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;    