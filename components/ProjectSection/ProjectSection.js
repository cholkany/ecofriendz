import React, { useState } from 'react';
import Projects from '../../api/project'
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import useSWR from 'swr'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ProjectSection = () => {

    const [number, setCount] = useState(6);
    const [buttonActive, setButtonState] = useState(false);

    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/projects?populate=*`, fetcher)
    if (error) return <div></div>
    if (!data) return <div>Loading...</div>

    return (
        <section className="wpo-projects section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'Our Latest Project'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="projects-grids gallery-container clearfix">
                            {data.data.map((project) => (
                                <div className="grid" key={project.id}>
                                    <div className="project-inner">
                                        <div className="img-holder">
                                            <img className="img-responsive" src={project.attributes.pImg.data.attributes.url} alt="" />
                                        </div>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.attributes.slug}`}>{project.attributes.title}</Link></h3>
                                                <p>{project.attributes.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/*<div className={`See-all-btn ${buttonActive ? "d-none" : ""}`}>
                            <span onClick={() => setButtonState(!buttonActive)}>
                                <a className="theme-btn" onClick={() => setCount(number + number)}>
                                    View All Project
                                </a>
                            </span>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
