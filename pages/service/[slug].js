import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import ServiceSidebar from './single/sidebar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Benefits from './single/benefits';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const SeviceSinglePage = (props) => {
    const router = useRouter()

    const slug = router.query.slug
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/services/${slug}?populate=*`, fetcher)

    if (error) return <div></div>
    if (!data) return <div>Loading...</div>
    console.log({data: data.data})
    return (
        <Fragment>

            <>
            <Navbar />
            <PageTitle pageTitle={data && data.data.attributes.Title} pagesub={data && data.data.attributes.Title} />
            <div className="wpo-project-details-area wpo-service-details section-padding">
                <div className="container">
                    <div className="row">
                        <ServiceSidebar />
                        <div className="col-lg-8 order-lg-2 order-md-1 order-1">
                            <div className="wpo-minimals-wrap">
                                <div className="minimals-img">
                                    <img src={data.data.attributes.sImg.data.attributes.url}  alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h2>{data && data.data.attributes.Title}</h2>
                                <p>{data && data.data.attributes.Description}</p>
                                <div className="row">
                                    {data.data.attributes.images.data.map((image) =>{
                                            <div className="col-md-6 col-sm-6 col-12" key={image.id}>
                                                <div className="wpo-p-details-img">

                                                    <img src={image.attributes.url} alt="" />
                                                     
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="wpo-faq-section">
                                <h4>Frequently Ask Questions</h4>
                                <Benefits />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
            </>
        </Fragment>
    )
};
export default SeviceSinglePage;
