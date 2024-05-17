import React from "react";
import logo from './Assets/download.png';
import facebook from './Assets/download98.png';
import twiter from './Assets/download (9).png';
import instagram from './Assets/download (10).png';
import linkedin from './Assets/download (11).png';
import image1 from './Assets/download (12).png'
import image2 from './Assets/download (13).png'
import image3 from './Assets/download (14).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './css/Footer.css'

const Footers = () => {
    return (
        <>
            <footer>
                <div className="container con1">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img src={logo} alt="..." className="Footerlogo" />
                            <p>
                                Lorem ipsum is dolor sit amet,
                                csectetur adipiscing elit,
                                dolore smod tempor incididunt ut labore et.
                            </p>
                            <div className="footer-content">
                                <div className="footer-icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="footer-text">
                                    <h6>Contact Us</h6>
                                    <h4>+01 123 456 7890</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h2 className="footer-title" >Quick Links</h2>
                            <ul>
                                <li><a href=" "><span>About Us</span></a></li>
                                <li><a href=" "><span>Services</span></a></li>
                                <li><a href=" "><span>Booking</span></a></li>
                                <li><a href=" "><span>Faq's</span></a></li>
                                <li><a href=" "><span>Blogs</span></a></li>
                                <li><a href=" "><span>Our Team</span></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h2 className="footer-title">Our Service</h2>
                            <ul>
                                <li> <a href=" "><span>Dental Care</span></a>   </li>
                                <li> <a href=" "><span>Cardiac Clinic</span></a>   </li>
                                <li>  <a href=" "><span>Massege Therapy</span></a>   </li>
                                <li>  <a href=" "><span>Cardiology</span></a>   </li>
                                <li>   <a href=" "><span>Precise Diagnosis</span></a>   </li>
                                <li>   <a href=" "><span>Abmbulance Services</span></a>   </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h2 className="footer-title">Subcribe</h2>
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button type="submit" >Subcribe Now</button>
                            </form>
                            <ul className="social">
                                <li><a href=" "><img src={facebook} alt="..." /></a></li>
                                <li><a href=" "><img src={twiter} alt="..." /></a></li>
                                <li><a href=" "><img src={instagram} alt="..." /></a></li>
                                <li><a href=" "><img src={linkedin} alt="..." /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-botom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <span>
                                        Copyright © 2023 Design & Developed by ThemeTrades
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="img-1" src={image1} alt="..." />
                <img className="img-2" src={image2} alt="..." />
                <img className="img-3" src={image3} alt="..." />
                <img className="img-4" src={image1} alt="..." />
            </footer>
        </>
    )
}
export default Footers;