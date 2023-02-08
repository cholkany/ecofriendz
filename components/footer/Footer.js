import React from 'react'
import Link from "next/link";
import Services from '../../api/service';
import Projects from '../../api/project'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/services?populate=*`, fetcher)
    if (error) return <div></div>
    if (!data) return <div>Loading...</div>
    console.log(data)
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src='/images/logo2.png' alt="blog" />
                                </div>
                                <p>The board, managers, staff, and administrative team at ECO FRIENDS CO. LTD. collaborate to provide our clients with efficient solutions and services.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} target="_blank" href="https://www.facebook.com/ecostoressd" legacyBehavior>
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} target="_blank" href="https://twitter.com/EcoFriendsCoLt1" legacyBehavior>
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} target="_blank" href="https://www.instagram.com/eco_friends_co_ltd_/" legacyBehavior>
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>Chan Building, South of the University of Juba, Next to Ivory Bank, Juba</li>
                                        <li><i className="fi flaticon-phone-call"></i>+211 918 189 973</li>
                                        <li><i className="fi flaticon-phone-call"></i>+211 925 318 933</li>
                                        <li><i className="fi flaticon-send"></i>ecofriendsco.ltd@gmail.com</li>
                                        <li><i className="fi flaticon-send"></i>info@ecofriendsltd.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services </h3>
                                </div>
                                <ul>
                                    {data.data.map((item) => (
                                        <li key={item.id}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${item.attributes.slug}`}>{item.attributes.Title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3></h3>
                                </div>
                                <ul className="d-flex">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy;ECO FRIENDS CO. LTD by <Link onClick={ClickHandler} target="_blank" href="https://ieyenu.com">iEyenu</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;