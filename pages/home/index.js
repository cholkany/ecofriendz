import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Hero3 from '../../components/hero3/hero3';
import Features from '../../components/Features/Features';
import FunFact2 from '../../components/FunFact2/FunFact2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import AppointmentS2 from '../../components/AppointmentS2/AppointmentS2';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';






const HomePage =(props) => {
    
    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero3 />
            <Features fClass={'wpo-features-section-s2'}/>
            <ServiceSection2 props={data} />
            <FunFact2 />
            <ProjectSection />
            <TeamSection />
            <AppointmentS2 />
            <Testimonial />
            <BlogSection />
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage;

