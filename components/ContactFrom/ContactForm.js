import React, { useState } from 'react'
import { useRouter } from "next/router"


const ContactForm = () => {

   
    const submitHandler = e => {
        e.preventDefault();
        const newWindow = window.open("https://bit.ly/3jy1jJq", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="submit-area">
                <button type="submit" className="theme-btn">Contact</button>
            </div>
        </form >
    )
}

export default ContactForm;