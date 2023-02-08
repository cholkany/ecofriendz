import React, { Fragment, useEffect, useState } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle/PageTitle';
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ProductSinglePage = (props) => {
    
    const router = useRouter()

    const slug = router.query.slug
    const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/products/${slug}?populate=*`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    return (
        <Fragment>
            <Navbar2 topbarNone={'wpo-header-style-1'}/>
            <PageTitle pageTitle={data && data.data.attributes.title} pagesub={data && data.data.attributes.title}/>
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {data ? <Product
                        item={data}
                        addToCart={1}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
