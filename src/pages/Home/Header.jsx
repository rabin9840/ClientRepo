import React, { useState, useEffect } from 'react'
// import data
import { header } from '../../data';
// import components
import Nav from './Navbar';

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    // destructure header data
    const { logo } = header;
    // scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    
    return (
        <header
            className={`${
                isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[0.05px]'
            } py-6 lg:py-4 fixed w-full transition-all z-10`}
        >
            <div className='h-10 container mx-auto flex justify-between items-center'>
                {/* logo */}
                <a href='#' data-aos='fade-down' data-aos-delay='1000'>
                    <img src={logo} alt='' />
                </a>
                <div
                    className='hidden lg:flex'
                    data-aos='fade-down'
                    data-aos-delay='1200'
                >
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;