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
            <Link to='./' className='navbarLink'>Home</Link>
            </div>
            <div className='navbarContainer'>
                <Link to='./skills' className='navbarLink'>Skills</Link>
            </div>
            <div className='navbarContainer'>
                <Link  to='./portfolio' className='navbarLink'>Portfolio</Link>
            </div>
        </nav>
    )
}

export default Navbar;