import React from 'react'
import Link from  'next/link'
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/teams?populate=*`, fetcher)
    if (error) return <div></div>
    if (!data) return <div>Loading...</div>
    
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'Dedicated Members'} text={"The board, managers, staff, and administrative team at ECO FRIENDS CO. LTD. collaborate to provide our clients with efficient solutions and services."} />
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                    {data.data.map((item) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={item.id}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <img src={item.attributes.tImg.data.attributes.url} alt=""/>
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2>{item.attributes.name}</h2>
                                        <span>{item.attributes.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;