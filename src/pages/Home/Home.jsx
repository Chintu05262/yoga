import React, { useEffect } from 'react';
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../assets/images/banner1.png'
import Footer from '../../Components/Footer';

import icon from '../../assets/images/svgicon1.png'
import icon2 from '../../assets/images/svgicon2.png'
import icon3 from '../../assets/images/svgicon3.png'
import icon4 from '../../assets/images/svgicon4.png'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'

import why1 from '../../assets/images/why1.jpg'
import why2 from '../../assets/images/why2.jpg'
import why3 from '../../assets/images/why3.jpg'
import testimonial1 from '../../assets/images/testimonial.jpg'
import blog1 from '../../assets/images/blog01.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'


const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
        });
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="banner_wrapper">
                <div className="container">
                    <div className="row banner_flex">
                        <div className="col-lg-6">
                            <div className="banner_wrapper__left">
                                <span data-aos="fade-right" data-aos-delay="50">Stay Healthy</span>
                                <h2 data-aos="fade-right" data-aos-delay="200">Yoga For Peaceful Busy Lifestyle</h2>
                                <p data-aos="fade-right" data-aos-delay="350">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem expedita ullam, quasi autem officiis nisi debitis officia asperiores! Exercitationem expedita eos rerum minima alias.</p>
                                <div className="myBtn" data-aos="fade-right" data-aos-delay="400">
                                    <Link to='/' className='global_btn'>get started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner_wrapper__right" data-aos="fade-up">
                                <img src={banner} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* grid */}
            <section className='grid_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="grid_wrapper__item" data-aos="fade-up" data-aos-delay="100">
                                <img src={icon} className='img-fluid' alt="icon" />
                                <h3>Discover Possible</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="grid_wrapper__item" data-aos="fade-up" data-aos-delay="200">
                                <img src={icon2} className='img-fluid' alt="icon" />
                                <h3>Discover Possible</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="grid_wrapper__item" data-aos="fade-up" data-aos-delay="300">
                                <img src={icon3} className='img-fluid' alt="icon" />
                                <h3>Discover Possible</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="grid_wrapper__item" data-aos="fade-up" data-aos-delay="400">
                                <img src={icon4} className='img-fluid' alt="icon" />
                                <h3>Discover Possible</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* online class */}
            <section className='online_wrapper global_wrapper'>
                <div className="container">
                    <div className="online_wrapper__content">
                        <div className="main_heading" data-aos="fade-up">
                            <h2>Online Yoga Class</h2>
                            <p>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipiscing.</p>
                        </div>
                        <div className="global_content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="online_package">
                                        <div className="online_package__box" data-aos="fade-right">
                                            <div className="online_package__box-img">
                                                <img src={img1} className='img-fluid' alt="yoga_img" />
                                            </div>
                                            <div className="online_package__box-content">
                                                <b>Instructor</b>
                                                <h3>Standing Yoga</h3>
                                                <p>Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pellentesque habitant morbi tristique senectus et. </p>
                                                <div className="info">
                                                    <span>10:00 - 12:00 Mon-Fri <i class='bx bxs-calendar' ></i></span>
                                                    <span>Trainer : Chintu<i class='bx bxs-user-circle' ></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="online_package__box" data-aos="fade-right">
                                            <div className="online_package__box-img">
                                                <img src={img2} className='img-fluid' alt="yoga_img" />
                                            </div>
                                            <div className="online_package__box-content">
                                                <b>Instructor</b>
                                                <h3>Standing Yoga</h3>
                                                <p>Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pellentesque habitant morbi tristique senectus et. </p>
                                                <div className="info">
                                                    <span>10:00 - 12:00 Mon-Fri <i class='bx bxs-calendar' ></i></span>
                                                    <span>Trainer : Chintu<i class='bx bxs-user-circle' ></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="yoga_banner" data-aos="fade-right">
                                        <img src={banner2} className='img-fluid' alt="yoga_banner" />
                                    </div>
                                </div>
                            </div>
                            <div className="second_package">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="yoga_banner" data-aos="fade-right">
                                            <img src={banner3} className='img-fluid' alt="yoga_banner" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="online_package">
                                            <div className="online_package__box" data-aos="fade-right">
                                                <div className="online_package__box-img">
                                                    <img src={img1} className='img-fluid' alt="yoga_img" />
                                                </div>
                                                <div className="online_package__box-content">
                                                    <b>Instructor</b>
                                                    <h3>Standing Yoga</h3>
                                                    <p>Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pellentesque habitant morbi tristique senectus et. </p>
                                                    <div className="info">
                                                        <span>10:00 - 12:00 Mon-Fri <i class='bx bxs-calendar' ></i></span>
                                                        <span>Trainer : Chintu<i class='bx bxs-user-circle' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="online_package__box" data-aos="fade-right">
                                                <div className="online_package__box-img">
                                                    <img src={img2} className='img-fluid' alt="yoga_img" />
                                                </div>
                                                <div className="online_package__box-content">
                                                    <b>Instructor</b>
                                                    <h3>Standing Yoga</h3>
                                                    <p>Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pellentesque habitant morbi tristique senectus et. </p>
                                                    <div className="info">
                                                        <span>10:00 - 12:00 Mon-Fri <i class='bx bxs-calendar' ></i></span>
                                                        <span>Trainer : Chintu<i class='bx bxs-user-circle' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why us */}
            <section className='why_us global_wrapper'>
                <div className="container">
                    <div className="why_us__content">
                        <div className="main_heading" data-aos="fade-up">
                            <h2>Choose Your Spiritual Path</h2>
                            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum consectetuer adipiscing elit</p>
                        </div>
                        <div className="global_content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box" data-aos="fade-up" data-aos-delay="100">
                                        <div className="why_box__img">
                                            <img src={why1} className='img-fluid' alt="why_img" />
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box" data-aos="fade-up" data-aos-delay="200">
                                        <div className="why_box__img">
                                            <img src={why2} className='img-fluid' alt="why_img" />
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box center_box" data-aos="fade-up" data-aos-delay="300">
                                        <div className="why_box__img">
                                            <img src={why3} className='img-fluid' alt="why_img" />
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial */}
            <section className='testimonial_wrapper global_wrapper'>
                <div className="container">
                    <div className="row banner_flex">
                        <div className="col-lg-7">
                            <div className="testimonial_left" data-aos="fade-up" data-aos-delay="100">
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
                            <div className="testimonial_img" data-aos="fade-up" data-aos-delay="100">
                                <img src={testimonial1} className='img-fluid' alt="testimonial_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog */}
            <section className='blog_wrapper global_wrapper'>
                <div className="container">
                    <div className="blog_wrapper__content">
                        <div className="main_heading" data-aos="fade-up" data-aos-delay="100">
                            <h2>Our Most Recent Posts</h2>
                            <p>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipiscing.</p>
                            <div className="myBtn">
                                <Link href="#" className='global_btn'>View More</Link>
                            </div>
                        </div>
                        <div className="global_content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box" data-aos="fade-up" data-aos-delay="100">
                                        <div className="why_box__img">
                                            <img src={blog1} className='img-fluid' alt="why_img" />
                                            <span>15-10-2024</span>
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box" data-aos="fade-up" data-aos-delay="200">
                                        <div className="why_box__img">
                                            <img src={blog2} className='img-fluid' alt="why_img" />
                                            <span>15-10-2024</span>
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="why_box center_box" data-aos="fade-up" data-aos-delay="300">
                                        <div className="why_box__img">
                                            <img src={blog3} className='img-fluid' alt="why_img" />
                                            <span>15-10-2024</span>
                                        </div>
                                        <h3>MEDITATION CLASSES</h3>
                                        <p>Cum sociis Theme natoque penatibus et mag nis dis parturi montes, nascetur ridicu mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact */}
            <section className='contact_wrapper global_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact_wrapper__bg" data-aos="fade-right" data-aos-delay="100">
                                <div className="contact_content" data-aos="fade-right" data-aos-delay="200" >
                                    <h2>Perfect Poses For You</h2>
                                    <p>Stay Calm Be Healthy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact_form" data-aos="fade-right" data-aos-delay="100">
                                <h3>Contact Us</h3>
                                <input type="text" placeholder='Name*' />
                                <input type="number" placeholder='Phone Number*' />
                                <input type="date" placeholder='*' />
                                <textarea rows={7} cols={4} placeholder='Message'></textarea>

                                <button className='global_btn'>Send Message</button>

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

export default Home