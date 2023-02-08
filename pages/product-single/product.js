import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link  from "next/link";
import ReactMarkdown from "react-markdown";

const Product = ({ item, addToCart }) => {

  return (

    <div className="row align-items-center">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img src={item.data.attributes.img.data.attributes.url} alt="products" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.data.attributes.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <span>(5.0 reviews)</span>
          </div>
          <div className="price">
            <span className="current">${item.price}</span>
            <span className="old">${item.delPrice}</span>
          </div>
          <ReactMarkdown children={item.data.attributes.description} />
          <div className="product-option">
            <div className="product-row">
              <button className="theme-btn"><Link href="https://bit.ly/3jy1jJq">Contact</Link></button>
              <div>
              </div>
            </div>
          </div>
          <div className="tg-btm">
            <p><span>Categories:</span>Products</p>
            <p><span>Tags:</span>{item.data.attributes.title}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
