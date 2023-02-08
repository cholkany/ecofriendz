import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Projects from '../../api/project';
import Benefits from './benefits'
import ServiceSidebar from './sidebar';
import Footer from '../../components/footer/Footer';
import ReactMarkdown from "react-markdown";
import useSWR from 'swr'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ProjectSinglePage = (props) => {
    const router = useRouter()

    const slug = router.query.slug
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/projects/${slug}?populate=*`, fetcher)

    if (error) return <div></div>
    if (!data) return <div>Loading...</div>
    console.log({data: data.data})

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={data && data.data.attributes.title} pagesub={data && data.data.attributes.subTitle} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <img src={data && data.data.attributes.pImg.data.attributes.url} alt="" />
                                </div>

                                {/*<div className="wpo-project-details-list">
                                    <div className="row">
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Client Name</span>
                                                <h2>Robert William</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>$500</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Date</span>
                                                <h2>25 Dec 2022</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{data && data.data.attributes.title}</h2>
                                        <ReactMarkdown children={data && data.data.attributes.description} />
                                        <div className="wpo-service-single-sub-img">
                                        <ReactMarkdown children={data && data.data.attributes.body} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
};
export default ProjectSinglePage;
