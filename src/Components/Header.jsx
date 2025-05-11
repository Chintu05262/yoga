import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import logo from '../../src/assets/images/logo.svg';

const Header = () => {
    // State to manage the mobile navigation menu visibility
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    // Toggle function for the mobile navigation
    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    return (
        <div>
            <div className="myNav">
                <div className="container">
                    <div className="myNav_content">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                            
                                {/* <li><Link to='/shop'>Shop</Link></li> */}
                                {/* <li><Link to='/blog'>Blog</Link></li> */}
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="book-now">
                            <button className='global_btn'>Book now</button>
                            <div className="menu_icon" onClick={toggleMobileNav}>
                                <i className='bx bx-menu'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}
            <div className={`mobile_nav ${isMobileNavVisible ? 'active' : ''}`}>
                <div className="mobile_nav__content">
                    <div className="mobile_header">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="cancel_menu" onClick={toggleMobileNav}>
                            <i className='bx bx-x'></i>
                        </div>
                    </div>
                    <div className="mobile_menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                       
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
