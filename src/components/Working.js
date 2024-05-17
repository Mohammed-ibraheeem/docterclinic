import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import pi1 from './Assets/download (13).png'
import pi2 from './Assets/download (22).png'
import pi3 from './Assets/download11.png'
import './css/Working.css'
function Working() {
    return (
        <>
            <section className="section-area section-sp5 work-area sec-work">
                <div className="container-sm">
                    <div className="heading-bx text-center">
                        <h6 class="title-ext text-secondary">Working Process</h6>
                        <h2 className='title'>How we works?</h2>
                    </div >
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx dii-1">
                                <div className="work-num-bx">01</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Make Appointmnet</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a class="btn btn-primary light" href=' ' >View More
                                    <span className="btn-icon-bx"><FontAwesomeIcon icon={faChevronRight} />  </span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx active dii-2">
                                <div className="work-num-bx">02</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Take Treatment</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a class="btn btn-primary light" href=' ' >View More
                                    <span className="btn-icon-bx"><FontAwesomeIcon icon={faChevronRight} />  </span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx dii-3">
                                <div className="work-num-bx">03</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Registration</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a class="btn btn-primary light" href=' ' >View More
                                    <span className="btn-icon-bx"><FontAwesomeIcon icon={faChevronRight} />  </span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="imgaa-1" src={pi1} alt="." />
                <img className="imgaa-2" src={pi2} alt="." />
                <img className="imgaa-3" src={pi3} alt="." />
            </section>
        </>
    )
}
export default Working;