import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ima1 from "./Assets/pic1.a3848a1189e2114e1b47.jpg"
import ima2 from "./Assets/pic2.67db6c474a828bd7a0cd.jpg"
import ima3 from "./Assets/pic3.89b8315141d75bd31ced.jpg"
import ima4 from "./Assets/pic4.28ea761e88293ca4d821.jpg"
import ima5 from "./Assets/pic5.44c2a54210474d223a99.jpg"

function LatestNews() {
    return (
        <>
            <section>
                <div className="container" >
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">Latest News</h6>
                        <h2 class="title">Our Latest News</h2>
                    </div>
                </div>
                <div className="slick-slider tt-slider blog-slide slider-sp0 slick-arrow-none slick-initialized" dir="ltr">
                    <OwlCarousel items={3} margin={40} autoplay={true} loop={true} >
                        <div className="slider-item">
                            <div className="blog-card">
                                <div className="post-media">
                                    <a href="/react/blog-details">
                                        <img src={ima1} alt='...' />
                                    </a>
                                </div>
                                <div className="post-info">
                                    <ui class="post-meta">
                                        <li class="author">
                                            <a href=' '>
                                                <img src='' alt='' />Michel</a>
                                        </li>
                                        <li class="date">
                                            <i></i>
                                            17 July 2021
                                        </li>
                                    </ui>
                                    <h5 class="post-title">
                                        <a href=' '>Health Will Be A Thing Of The Past And Here's Why</a>
                                    </h5>
                                    <a href=' ' class="btn btn-outline-primary btn-sm">Read More
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="slider-item">
                            <div className="blog-card">
                                <div className="post-media">
                                    <a href="/react/blog-details">
                                        <img src={ima2} alt="..." />
                                    </a>
                                </div>
                                <div className="post-info">
                                    <ui class="post-meta">
                                        <li class="author">
                                            <a href=' '>
                                                <img src='' alt='' />Michel</a>
                                        </li>
                                        <li class="date">
                                            <i></i>
                                            17 July 2021
                                        </li>
                                    </ui>
                                    <h5 class="post-title">
                                        <a href=' '>Health Will Be A Thing Of The Past And Here's Why</a>
                                    </h5>
                                    <a href=' ' class="btn btn-outline-primary btn-sm">Read More
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="slider-item">
                            <div className="blog-card">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={ima3} alt='' /></a>
                                </div>
                                <div className="post-info">
                                    <ui class="post-meta">
                                        <li class="author">
                                            <a href=' '>
                                                <img src='' alt='' />Michel</a>
                                        </li>
                                        <li class="date">
                                            <i></i>
                                            17 July 2021
                                        </li>
                                    </ui>
                                    <h5 class="post-title">
                                        <a href=' '>Health Will Be A Thing Of The Past And Here's Why</a>
                                    </h5>
                                    <a href=' ' class="btn btn-outline-primary btn-sm">Read More
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="slider-item">
                            <div className="blog-card">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={ima4} alt='' /></a>
                                </div>
                                <div className="post-info">
                                    <ui class="post-meta">
                                        <li class="author">
                                            <a href=' '>
                                                <img src='' alt='' />Michel</a>
                                        </li>
                                        <li class="date">
                                            <i></i>
                                            17 July 2021
                                        </li>
                                    </ui>
                                    <h5 class="post-title">
                                        <a href=' '>Health Will Be A Thing Of The Past And Here's Why</a>
                                    </h5>
                                    <a href=' ' class="btn btn-outline-primary btn-sm">Read More
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="slider-item">
                            <div className="blog-card">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={ima5} alt='' /></a>
                                </div>
                                <div className="post-info">
                                    <ui class="post-meta">
                                        <li class="author">
                                            <a href=' '>
                                                <img src='' alt='' />Michel</a>
                                        </li>
                                        <li class="date">
                                            <i></i>
                                            17 July 2021
                                        </li>
                                    </ui>
                                    <h5 class="post-title">
                                        <a href=' '>Health Will Be A Thing Of The Past And Here's Why</a>
                                    </h5>
                                    <a href=' ' class="btn btn-outline-primary btn-sm">Read More
                                        <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}
export default LatestNews;

