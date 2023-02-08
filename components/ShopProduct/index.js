import React from "react";
import Link  from "next/link";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const ShopProduct = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
   
  };

  const inquireButton = (e) => {
    e.preventDefault();
    const newWindow = window.open("https://bit.ly/3jy1jJq", '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const { data, error } = useSWR(`https://orca-app-oekqg.ondigitalocean.app/api/products?populate=*`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)
  

  return (
      <section className="wpo-shop-section">
          <div className="container">
              <div className="row">
                  <div className="col col-xs-12">
                      <div className="shop-grids clearfix">
                      {data &&
                          data.data.map((item) => (
                            <div className="grid" key={item.id}>
                                <div className="img-holder">
                                    <img src={item.attributes.img.data.attributes.url} alt=""/>
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} href='/product-single/[slug]' as={`/product-single/${item.attributes.slug}`}>{item.attributes.title}</Link></h3>
                                      <span>Avialable</span>
                                    <div className="add-to-cart">
                                         <button
                                            data-bs-toggle="tooltip"
                                            data-bs-html="true"
                                            title="Add to Cart"
                                            onClick={inquireButton}
                                          >
                                            Inquire
                                          </button>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </div>
                     { /*<div className="pagination-wrapper pagination-wrapper-center">
                          <ul className="pg-pagination">
                              <li>
                                  <a href="#" aria-label="Previous">
                                      <i className="ti-angle-left"></i>
                                  </a>
                              </li>
                              <li className="active"><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li>
                                  <a href="#" aria-label="Next">
                                      <i className="ti-angle-right"></i>
                                  </a>
                              </li>
                          </ul>
                          </div>*/}
                  </div>
              </div>
          </div> 
      </section>
  );
};

export default ShopProduct;
