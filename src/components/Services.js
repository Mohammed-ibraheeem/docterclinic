import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/Services.css'
import { PiStethoscopeDuotone } from 'react-icons/pi'
import { TbMedicineSyrup } from 'react-icons/tb'
import { GiLoveInjection, GiAmbulance } from 'react-icons/gi'
import { BsBagPlus } from 'react-icons/bs'
import piic1 from './Assets/download48486.png'
import piic2 from './Assets/download (19).png'
import piic3 from './Assets/download (12).png'
import piic4 from './Assets/download (23).png'

function Services() {
    return (
        <>
            <section className='service-wraper'>
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-7 mb-30 serv1">
                        <div className="heading-bx">
                            <h6 className="title-ext text-secondary">Services</h6>
                            <h2 className="title">We Cover A Big Variety Of Medical Services</h2>
                            <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                        </div>
                        <a className="btn btn-secondary btn-lg shadow btn1" href=" " >All Services</a>
                    </div>
                    <div className="col-xl-7 mb-15">
                        <OwlCarousel items={3} margin={40} autoplay={true} loop={true} >
                            <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1">
                                <div>
                                    <div className="slider-item" tabindex="-1">
                                        <div className="feature-container feature-bx2 feature1">
                                            <div className="feature-box-xl mb-30">
                                                <span className="icon-cell">
                                                    <PiStethoscopeDuotone className='icon-1' />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="ttr-title">Diagnostics</h3>
                                                <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                                <a className="btn btn-primary light" href=' '>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="1" className="slick-slide slick-active" tabindex="-1">
                                <div>
                                    <div className="slider-item" tabindex="-1">
                                        <div className="feature-container feature-bx2 feature2">
                                            <div className="feature-box-xl mb-30">
                                                <span className="icon-cell">
                                                    <TbMedicineSyrup className='icon-1' />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="ttr-title">Treatment</h3>
                                                <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                                <a className="btn btn-primary light" href=' '>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false">
                                <div>
                                    <div className="slider-item" tabindex="-1">
                                        <div className="feature-container feature-bx2 feature3">
                                            <div className="feature-box-xl mb-30">
                                                <span className="icon-cell">
                                                    <GiLoveInjection className='icon-1' />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="ttr-title">Surgery</h3>
                                                <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                                <a className="btn btn-primary light" href=' '>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="3" className="slick-slide slick-active" tabindex="-1" aria-hidden="false">
                                <div>
                                    <div className="slider-item" tabindex="-1">
                                        <div className="feature-container feature-bx2 feature1">
                                            <div className="feature-box-xl mb-30">
                                                <span className="icon-cell">
                                                    <GiAmbulance className='icon-1' />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="ttr-title">Vaccine</h3>
                                                <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                                <a className="btn btn-primary light" href=' '>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="4" className="slick-slide slick-active" tabindex="-1" aria-hidden="false">
                                <div>
                                    <div className="slider-item" tabindex="-1">
                                        <div className="feature-container feature-bx2 feature2">
                                            <div className="feature-box-xl mb-30">
                                                <span className="icon-cell">
                                                    <BsBagPlus className='icon-1' />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="ttr-title">Emergency</h3>
                                                <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                                <a className="btn btn-primary light" href=' '>View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                <img className='piic-1' src={piic1} alt='..' />
                <img className='piic-2' src={piic2} alt='..' />
                <img className='piic-3' src={piic3} alt='..' />
                <img className='piic-4' src={piic4} alt='..' />
            </section>
        </>
    )
}

export default Services;