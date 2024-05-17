import pic1 from "./Assets/pic-1.ad1ed7ee8284087fe9ee (1).jpg";
import pic2 from "./Assets/pic-2.0593bc2fd8a13cf8c19f (1).jpg";
import pic3 from "./Assets/pic-3.fa689b1037dbf69567a3 (1).jpg";
import bed from './Assets/hospital-bed.png'
import image1 from './Assets/download (7).png'
import image2 from './Assets/download (7).png'
import image3 from './Assets/download (8).png'
import image4 from './Assets/download (19).png'
import image5 from './Assets/download (20).png'
import { GiAmbulance, GiLoveInjection } from 'react-icons/gi'
import { MdOutlineBloodtype } from 'react-icons/md'

import './css/AboutUs.css'

const AboutUS = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="about-thumb-area">
                                <ul>
                                    <li><img className="about-thumb1" src={pic1} alt="" /></li>
                                    <li><img className="about-thumb2" src={pic2} alt="" /></li>
                                    <li><img className="about-thumb3" src={pic3} alt="" /></li>
                                    <li><div className="exp-bx">
                                        20 <span> Year Experience</span>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30 mmm">
                            <div className="heading-bx">
                                <h6 className="title-ext text-secondary">About Us</h6>
                                <h2 className="title">The Great Place Of Medical Hospital Center</h2>
                                <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20 co" >
                                    <div className="feature-container feature-bx1 feature1">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <GiAmbulance />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Emergency Help</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20  co">
                                    <div className="feature-container feature-bx1 feature2">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <img src={bed} alt="bed" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Qualified Doctors</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20 co">
                                    <div className="feature-container feature-bx1 feature3">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <MdOutlineBloodtype className="blood" />                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Best Professionals</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20 co">
                                    <div className="feature-container feature-bx1 feature4">
                                        <div className="icon-md">
                                            <span className="icon-cell">
                                                <GiLoveInjection className="inj" />
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="ttr-title">Medical Treatment</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary shadow " href=" ">Read More</a>
                        </div>
                    </div>
                </div>
                <img className="imga-1" src={image1} alt="." />
                <img className="imga-2" src={image2} alt="." />
                <img className="imga-3" src={image3} alt="." />
                <img className="imga-4" src={image4} alt="." />
                <img className="imga-5" src={image5} alt="." />
            </section >
        </>
    )
}
export default AboutUS;