import React from 'react'
import Services from '../../../api/service';
import Link from  'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const { data, error } = useSWR(`http://localhost:1337/api/services`, fetcher)

     if (error) return <div>Failed to load</div>
     if (!data) return <div>Loading...</div>
     console.log({data: data.data})

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                <div className="widget category-widget">
                    <h3>Our Services</h3>
                    <ul>
                        {data.data.map((item) => (                                                                                                                                                                      
                            <li key={item.id}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${item.attributes.slug}`}>{item.attributes.Title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceSidebar;