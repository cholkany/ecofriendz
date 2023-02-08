import React from 'react'
import Services from '../../api/service';
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
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/services?populate=*`, fetcher)

    if (error) return <div></div>
    if (!data) return <div>Loading...</div>

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {data && data.data.map((item) => (
                            <li key={item.id}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${item.attributes.slug}`}>{item.attributes.Title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br/> Help You!</h2>
                    <p>If you want to know more about our services, or have any questions or feedback, please feel free to ...</p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceSidebar;