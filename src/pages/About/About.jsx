import React from 'react';
import './About.css';
import Footer from '../../Components/footer';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '../../assets/images/testimonial.jpg'
import img1 from '../../assets/images/img1.jpg';
import icon3 from '../../assets/images/icon3.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: false,
        focusOnSelect: false,
        cssEase: 'linear',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };

    return (
        <>
            <div className="breadcrumb_wrapper">
                <div className="container">
                    <div className="banner_wrapper__content">
                        <h1>about us</h1>
                        <div className="breadcrumb_menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>/</span></li>
                                <li><Link to="/">About us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us */}
            <section className='about_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_wrapper__img">
                                <img src={img1} className='img-fluid' alt="about_img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_wrapper__right">
                                <h3>Benefits Of</h3>
                                <h2>Yoga & Meditation</h2>
                                <div className="about_grid">
                                    <div className="about_grid__box">
                                        <h3>Flexbility <img src={icon3} alt="icon" /></h3>
                                        <p>Aliquet sagittis id purus ut faucibus pulvinar. Arcu felis bibendum ut tristique et egestas.</p>
                                    </div>
                                    <div className="about_grid__box">
                                        <h3>Relieving Stress <img src={icon3} alt="icon" /></h3>
                                        <p>Aliquet sagittis id purus ut faucibus pulvinar. Arcu felis bibendum ut tristique et egestas.</p>
                                    </div>
                                    <div className="about_grid__box">
                                        <h3>Mental Health <img src={icon3} alt="icon" /></h3>
                                        <p>Aliquet sagittis id purus ut faucibus pulvinar. Arcu felis bibendum ut tristique et egestas.</p>
                                    </div>
                                    <div className="about_grid__box">
                                        <h3>Reduce Anxiety <img src={icon3} alt="icon" /></h3>
                                        <p>Aliquet sagittis id purus ut faucibus pulvinar. Arcu felis bibendum ut tristique et egestas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* shape */}
            <section className='shape_wrapper global_wrapper'>
                <div className="container">
                    <div className="row banner_flex">
                        <div className="col-lg-6">
                            <div className="shape_wrapper__left">
                                <h2>We Shape Mind & Body</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eum possimus sapiente, aspernatur libero animi fugiat voluptatibus quaerat ducimus non adipisci dolores minima earum laborum repellendus voluptates, officiis aliquam, molestiae accusamus consectetur fugit. Cupiditate animi eius omnis debitis tenetur alias?</p>
                                <p>Nec nam aliquam sem et tortor consequat id. Ornare massa eget egestas purus viverra accumsan. In dictum non consectetur a. Sed sed risus pretium quam.</p>
                                <div className="myBtn">
                                    <Link to="" className='check_btn'> Check Schedule <i className='bx bx-arrow-back'></i></Link>
                                </div>
                                <div className="number_grid">
                                    <div className="number_grid__box">
                                        <h2>20+</h2>
                                        <h3>People Benefited</h3>
                                    </div>
                                    <div className="number_grid__box">
                                        <h2>30+</h2>
                                        <h3>Coaches Trained</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_wrapper__img">
                                <img src={img1} className='img-fluid' alt="about_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* slider */}
            <section className='slider_wrapper'>
                <div className="container">
                    <div className="slider_wrapper__content">
                        <div className="custom-marquee">
                            <Slider {...sliderSettings}>
                                {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                                    <div className="slider_one__box" key={index}>
                                        <img src={logo} className='img-fluid' alt="logo" />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>

            {/* testimonial */}
            <section className='testimonial_wrapper global_wrapper'>
                <div className="container">
                    <div className="row banner_flex">
                        <div className="col-lg-7">
                            <div className="testimonial_left">
                                <Slider {...settings}>
                                    <div className="testimonial_box">
                                        <h3>“Ut porttitor leo diam sollicitudin tempor id eu. I'd like to use the torrent before it becomes suspended. Potenti nullam ac tortor vitae purus faucibus.”</h3>
                                        <p>Designer - Jasmine</p>
                                    </div>
                                    <div className="testimonial_box">
                                        <h3>“Ut porttitor leo diam sollicitudin tempor id eu. I'd like to use the torrent before it becomes suspended. Potenti nullam ac tortor vitae purus faucibus.”</h3>
                                        <p>Designer - Jasmine</p>
                                    </div>
                                    <div className="testimonial_box">
                                        <h3>“Ut porttitor leo diam sollicitudin tempor id eu. I'd like to use the torrent before it becomes suspended. Potenti nullam ac tortor vitae purus faucibus.”</h3>
                                        <p>Designer - Jasmine</p>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="testimonial_img">
                                <img src={testimonial1} className='img-fluid' alt="testimonial_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}

export default About