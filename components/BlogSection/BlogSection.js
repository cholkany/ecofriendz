import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/posts?populate=*`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'Latest News & Blog'} />
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {data.data.map((item) => (
                                <div className={`post  format-standard-image`} key={item.id}>
                                <div className="entry-media video-holder">
                                    <img src={item.attributes.image.data.attributes.url} alt="" />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi ti-user"></i> By <Link href="/">{}</Link> </li>
                                        <li>
                                            <i className="fi flaticon-calendar"></i> 
                                            <Moment format="MMM Do YYYY">
                                                {item.attributes.publishedAt}
                                            </Moment>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${item.attributes.slug}`}>{item.attributes.title}</Link></h3>
                                    <ReactMarkdown children={item.attributes.desciption} />
                                    <Link
                                        onClick={ClickHandler}
                                        href='/blog-single/[slug]'
                                        as={`/blog-single/${item.attributes.slug}`}
                                        className="read-more">READ MORE...</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;