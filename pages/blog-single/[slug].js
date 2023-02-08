import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import useSWR from 'swr'

const submitHandler = (e) => {
    e.preventDefault()
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const BlogSingle = (props) => {
    const router = useRouter()
    const slug = router.query.slug
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/posts/${slug}?populate=*`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={data && data.data.attributes.title} pagesub={data && data.data.attributes.subTitle} />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img src={data && data.data.attributes.image.data.attributes.url} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-calendar"></i><Moment format="MMM Do YYYY">{data && data.data.attributes.publishedAt}</Moment></li>
                                        </ul>
                                    </div>
                                    <h2>{data && data.data.attributes.title}</h2>
                                    <ReactMarkdown children={data && data.data.attributes.content}/>
                                </div>

                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                

                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href="/">

                                            <span className="post-control-link">Previous Post</span>
                                            <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>

                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="/">

                                            <span className="post-control-link">Next Post</span>
                                            <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default BlogSingle;
