import React from 'react'
import footerlogo from '../../src/assets/images/whitelogo.svg'
import { Link } from 'react-router-dom';
import './footer.css'
import 'boxicons/css/boxicons.min.css'; // Only if not already included in the project
const Footer = () => {
    return (
        <div>
            <div className="footer_wrapper global_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="footer_left">
                                <div className="footer_logo">
                                    <img src={footerlogo} className='img-fluid' alt="" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea odit officia. Tempore corrupti, quod quis vero sapiente officiis nesciunt?</p>
                                </div>
                                <div className="social">
                                    <Link to="#" aria-label="Facebook">
                                        <i className="bx bxl-facebook"></i>
                                    </Link>
                                    <Link to="#" aria-label="Instagram">
                                        <i className="bx bxl-instagram"></i>
                                    </Link>
                                    <Link to="#" aria-label="LinkedIn">
                                        <i className="bx bxl-linkedin"></i>
                                    </Link>
                                    <Link to="#" aria-label="YouTube">
                                        <i className="bx bxl-youtube"></i>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="footer_box">
                                <h3>Quick Links</h3>
                                <div className="footer_links">
                                    <Link to="#" aria-label="Home">Home</Link>
                                    <Link to="#" aria-label="About Us">About us</Link>
                                    <Link to="#" aria-label="Contact Us">contact us</Link>
                                    <Link to="#" aria-label="FAQs">FAQs</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="footer_box">
                                <h3>legal pages</h3>
                                <div className="footer_links">
                                    <Link to="#" aria-label="Home">History</Link>
                                    <Link to="#" aria-label="About Us">Privacy Policy</Link>
                                    <Link to="#" aria-label="Contact Us">Terms & Condition</Link>
                                    <Link to="#" aria-label="FAQs">My Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12">
                            <div className="footer_box">
                                <h3>contact info</h3>
                                <div className="footer_links">
                                    <Link to="#" >Address :- Gali No. 25 Nangloi Najafgarh road, Ranhola 110041</Link>
                                    <Link to="tel:9716046924">Call :- +91 9716046924</Link>
                               
                                    <Link to="mailto:chintukumar4102@gmail.com">Email :- chintukumar4102@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Design and Developed by Chintu Kumar 2025.</p>
            </div>
        </div>
    )
}

export default Footer