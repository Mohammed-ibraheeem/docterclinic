import './css/Contact.css'
import Banner from "./Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faIdBadge, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import twiter from './Assets/download (9).png';
import instagram from './Assets/download (10).png';
import linkedin from './Assets/download (11).png';
import phone from './Assets/download12123165.png';
import massage from './Assets/download (18).png';
import location from './Assets/download (17).png';
import { useState } from 'react';
const Contact = () => {

    const [name, setname] = useState("");

    const Changename = (e) => {
        setname(e.target.value);
    }

    const FormHandler = (e) => {
        e.PreventDefault();
        if (name.length === '') {
            alert('notempty');
            return;
        }
        console.log(name)
    }

    return (
        <>
            <Banner title="Contact Us" smtitle="Contact Us" />
            <section className="contact-us">
                <div className="container">
                    <div className="contact-wraper">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-30" >
                                <form onSubmit={FormHandler}>
                                    <div className="form-group col-md-12">
                                        <input name="name" type="text" required className="form-control" placeholder="Your Name" onChange={Changename} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input name="email" type="email" required className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input name="phone" type="text" required className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <select className="form-select form-control">
                                            <option>Selecty Departmant</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12 ">
                                        <textarea name="message" placeholder="Type Massge" className="form-control" ></textarea>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button name="submit" type="submit" className="btn w-100 btn-secondary btn-lg bt1" >Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-30 ">
                                <div className=" contact-info ovpr-dark side">
                                    <div className="overlay">
                                        <h4 className="title mb-30">Contact Us For Any Informations
                                            Location</h4>
                                        <div className="icon-box">
                                            <h6 className="title">
                                                <FontAwesomeIcon icon={faMapLocation} />Location
                                                <hr />
                                            </h6>
                                            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                        </div>
                                        <div className="icon-box">
                                            <h6 className="title">
                                                <FontAwesomeIcon icon={faIdBadge} />Email & Phone
                                                <hr />
                                            </h6>
                                            <a href="/react/contact-us" >info@yourdomain.com</a>
                                            <p>(+68) 120034509</p>
                                        </div>
                                        <div className="icon-box">
                                            <h6 className="title">
                                                <FontAwesomeIcon icon={faEarth} />Follow Us
                                                <hr />
                                            </h6>
                                            <ul className="social-media">
                                                <li><a rel="noreferrer" target="_blank" href="https://twitter.com/" ><img src={twiter} alt="..." /></a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" ><img src={linkedin} alt="..." /></a></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/" ><img src={instagram} alt="..." /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature4">
                                <div className=" icon-md feature-icon">
                                    <img src={phone} alt='...' />
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-title">
                                        Contact Number
                                    </h5>
                                    <p>+001 123 456 790</p>
                                    <p>+002 3424 44 00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature3">
                                <div className=" icon-md feature-icon">
                                    <img src={massage} alt='...' />
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-title">
                                        Email Address
                                    </h5>
                                    <p>info@yourdomain.com</p>
                                    <p>example@support.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature2">
                                <div className=" icon-md feature-icon">
                                    <img src={location} alt='...' />
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-title">
                                        Address
                                    </h5>
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;