import React from 'react';
import logo from '../../assets/logo.svg'
import './Navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <nav className={"portfolio__navbar"}>
            <div className="portfolio__navbar--logo">
                <motion.img
                    src={logo}
                    alt="Rohit"
                />
            </div>
        </nav>
    );
};

export default Navbar;