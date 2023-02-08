import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero3 = () => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-5 col-lg-5 offset-lg-7 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-subtitle">
                                <span>::keep your space</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Clean & Green with <span>Eco Friends</span> .</h2>
                            </div>
                            <div className="wpo-hero-des">
                                <p>At Eco Friends, we understand that quality cleaning and environmentally-friendly services are important.
                                </p>
                            </div>
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="appointment" className="theme-btn">Book now</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                </div>
            </div>
        </section>
    );
}



export default Hero3;