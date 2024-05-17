import React from "react";
import headerimg from './Assets/doctor.7c2bc96d67d3eba1d64a.png'
import image1 from './Assets/download11.png'
import image2 from './Assets/download (7).png'
import image3 from './Assets/download (5).png'
import image4 from './Assets/download (6).png'
import image6 from './Assets/download (8).png'
import './css/Home.css'
const Home = () => {
    return (
        <header className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col">
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <button><a href=" ">Read More</a></button>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img className="img-11" src={headerimg} alt="..." />
                    </div>
                    <img className="img-2" src={image1} alt="..." />
                    <img className="img-3" src={image2} alt="..." />
                    <img className="img-4" src={image3} alt="..." />
                    <img className="img-5" src={image4} alt="..." />
                    <img className="img-7" src={image6} alt="..." />
                </div>
            </div>
        </header>
    )
}
export default Home;