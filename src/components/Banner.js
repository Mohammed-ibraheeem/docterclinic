import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './css/Banner.css'

function Banner(props) {
    return (
        <>
            <section className="banner">
                <div className=" page-banner banner-lg contact-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h2>{props.title}</h2>
                                <li>
                                    <Link to="/home" >
                                        <FontAwesomeIcon icon={faHome} /> Home
                                    </Link>
                                    / {props.smtitle}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;