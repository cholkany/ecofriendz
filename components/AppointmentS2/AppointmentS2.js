import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const AppointmentS2 = () => {

    const submitHandler = e => {
        e.preventDefault();
        const newWindow = window.open("https://bit.ly/3jy1jJq", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };


    return (
        <section className="wpo-contact-section-s2 section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <span>ONLINE BOOKING</span>
                                    <h2>Online Booking For Appointments.</h2>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">GET AN APPOINMENT</button>
                                    </div>
                                </form>

                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppointmentS2;