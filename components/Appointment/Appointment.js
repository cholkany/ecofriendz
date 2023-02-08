import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import VideoModal from '../ModalVideo/VideoModal';


const Appointment = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        const newWindow = window.open("https://bit.ly/3jy1jJq", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };


    return (
        <section className="wpo-contact-section section-padding">
            <div className="wpo-contact-img">
                <img src='/images/call.jpg' alt="" />
            </div>
            <div className="wpo-contact-img-s2">
                <img src='/images/contact.png' alt="" />
            </div>
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
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

export default Appointment;