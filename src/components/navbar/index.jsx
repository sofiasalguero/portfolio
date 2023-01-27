import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <nav className='Navbar'>
             <div className='navbarContainer'>
             <img src="/logo.PNG" className="logo"/>
            </div>
            <div className='navbarContainer'>
            <p className='navbarLink'>Home</p>
            </div>
            <div className='navbarContainer'>
                <p className='navbarLink'>Skills</p>
            </div>
            <div className='navbarContainer'>
                <p className='navbarLink'>Portfolio</p>
            </div>
        </nav>
    )
}

export default Navbar;