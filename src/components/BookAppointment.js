import './css/BookAppointment.css'
import imaaage1 from './Assets/mobile.f82d73222992d2101a09.png'
import imaaage2 from './Assets/women.eb5c49c523f7d6240d33.png'
import imaaage3 from './Assets/download (2).png'
import imaaage4 from './Assets/download (1).png'
import imaaage5 from './Assets/download (3).png'
import imaaage6 from './Assets/download (4).png'
import piiic1 from './Assets/download (6).png'
import piiic2 from './Assets/download (8).png'
import piiic3 from './Assets/download (12).png'
import piiic4 from './Assets/download (22).png'

function BookAppointment() {
    return (
        <>
            <section className="section-area account-wraper1">
                <div className="container-fluid">
                    <div className="appointment-inner section-sp2">
                        <div className='container'>
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="appointment-form form-wraper">
                                        <h3 className="title" >Book Appointment</h3>
                                        <form action="#">
                                            <div className="form-group">
                                                <select className="form-select form-control">
                                                    <option>Selecty Departmant</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-select form-control">
                                                    <option>Select Doctor</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input type='text' className='form-control' placeholder='Your Name' />
                                            </div>
                                            <div className="form-group">
                                                <input type='number' className='form-control' placeholder='Phone Number' />
                                            </div>
                                            <div className="form-group">
                                                <input type='date' className='form-control' />
                                            </div>
                                            <button type='submit' className="btn btn-secondary btn-lg" >Appointment Now</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6">
                                    <div className="appointment-thumb">
                                        <img className='imaaage-1' src={imaaage1} alt='..' />
                                        <div className="images-group">
                                            <img className='imaaage-2' src={imaaage2} alt='..' />
                                            <img className='imaaage-3' src={imaaage3} alt='..' />
                                            <img className='imaaage-4' src={imaaage4} alt='..' />
                                            <img className='imaaage-5' src={imaaage5} alt='..' />
                                            <img className='imaaage-6' src={imaaage6} alt='..' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className='piiic-1' src={piiic1} alt='..' />
                        <img className='piiic-2' src={piiic2} alt='..' />
                        <img className='piiic-3' src={piiic3} alt='..' />
                        <img className='piiic-4' src={piiic4} alt='..' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default BookAppointment;

