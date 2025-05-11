import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import './Contact.css';


const Contact = () => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb_wrapper">
                <div className="container">
                    <div className="banner_wrapper__content">
                        <h1 data-aos="fade-up">Contact Us</h1>
                        <div className="breadcrumb_menu" data-aos="fade-up">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>/</span></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <section className="address_wrapper global_wrapper">
                <div className="container">
                    <div className="row">
                        {['London', 'USA', 'India', 'Australia'].map((location, index) => (
                            <div className="col-xl-3 col-sm-6" key={index}>
                                <div className="address_box" data-aos="fade-up">
                                    <h3>{location}</h3>
                                    <p>No: 58 A, Madison Street, USA</p>
                                    <a href="tel:000123456789">000 123 456789</a>
                                    <a href="tel:001122121456">001 122 121456</a>
                                    <a href="mailto:info@examples.com">info@examples.com</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="reach_wrapper global_wrapper">
                <div className="container">
                    <div className="reach_wrapper__content">
                        <div className="main_heading" data-aos="fade-up">
                            <h2>Reach Us</h2>
                            <p>A pellentesque sit amet porttitor eget dolor morbi non arcu.</p>
                        </div>
                        <div className="global_content">
                            <div className="form_input" data-aos="fade-up">
                                <div className="form_input__box">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form_input__box">
                                    <input type="email" placeholder="Email" />
                                    <input type="tel" placeholder="Mobile No" />
                                </div>
                                <div className="form_input__box">
                                    <textarea rows={4} placeholder="Message"></textarea>
                                </div>
                                <div className="myBtn">
                                    <button className="send--btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map_wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19536.216528717694!2d77.08022522207696!3d28.621041796514344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1731435295107!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Janakpuri, New Delhi"
                ></iframe>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Contact;
