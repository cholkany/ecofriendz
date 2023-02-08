import React from 'react'


const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src='/images/about/about.png' alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>About Us</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                Established in 2020, ECO FRIENDS CO. LTD. is a South Sudanese-owned company offering specialized services in general cleaning and landscaping. 
                                As South Sudan continues to grapple with unclean surroundings, environmental degradation, and inefficient waste management, 
                                the birth of Eco Friends brought a glimmer of hope by presenting an efficient solution to these problems. 
                                Committed to aiding our clients and further enhancing local communities, 
                                our qualified staff strives for excellence in providing top-notch cleaning and maintenance services as well as 
                                consultation services for businesses, organizations, and other establishments. 
                                At Eco Friends, we aspire to be recognized not just for transforming lives but also for boosting the country’s business sector; 
                                an objective we are slowly achieving thanks to the South Sudanese youth that runs the firm!
                                    <div className="signeture">
                                        <h4>Andrew Lam Mabor</h4>
                                        <p>Managing Director</p>
                                        <span><img src='' alt=""/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;