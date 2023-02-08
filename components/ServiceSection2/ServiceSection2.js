import React, { useState, useEffect } from 'react'
import Services from '../../api/service'
import SectionTitle from '../SectionTitle';
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ServiceSection2 =(props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/services?populate=*`, fetcher)

    if (error) return <div></div>
    if (!data) return <div>Loading...</div>

    console.log(data)
    
    return (
        <section className={`wpo-service-section-s2 section-padding ${props.sClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <SectionTitle MainTitle={'Best Services We Offer'} />
                    </div>
                </div>
                <div className="row">
                    {data.data.map((item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-img">
                                    <img src={item.attributes.sImg.data.attributes.url} width="100%" alt=""/>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link  href='/service/[slug]' as={`/service/${item.attributes.slug}`}>{item.attributes.Title}</Link></h2>
                                    <p>{item.attributes.Description}</p>
                                    <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${item.attributes.slug}`}>READ MORE<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection2;