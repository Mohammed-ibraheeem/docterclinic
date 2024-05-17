function Testimonial() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">Testimonial</h6>
                        <h2 class="title m-b0">
                            See What Are The Patients
                            <br />Saying About us
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <div className="thumb-wraper">
                                <img className="bg-img" src='' alt='..' />
                                <ul>
                                    <li data-member="1"><a href="/react/"><img src='' alt='..' /></a></li>
                                    <li data-member="2"><a href="/react/"><img src='' alt='..' /></a></li>
                                    <li data-member="3"><a href="/react/"><img src='' alt='..' /></a></li>
                                    <li data-member="4"><a href="/react/"><img src='' alt='..' /></a></li>
                                    <li data-member="5"><a href="/react/"><img src='' alt='..' /></a></li>
                                    <li data-member="6"><a href="/react/"><img src='' alt='..' /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slick-slider testimonial-slide slick-initialized">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;