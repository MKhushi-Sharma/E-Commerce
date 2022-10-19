import React, { Fragment, useEffect } from "react";
import "./Home.css";
// import headphone from "./../images/headphones.png";
import ProductCard from "./ProductCard.js";
const products = [{
  name:"Headphone",
  ratings:4,
  image:"image1",
  numOfReviews:50,
  price:1200
},{
  name:"iPhone 13",
  ratings:4.5,
  image:"image1",
  numOfReviews:500,
  price:120000
},{
  name:"Airbuds",
  ratings:5,
  image:"image1",
  numOfReviews:750,
  price:2700
},]
const Home = () => { 
    return (
        <Fragment>
        <div className="banner">
            <div className="text">
            <p>Welcome to Infinity Bazaar</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                VIEW
              </button>
            </a>
            </div>
            {/* <div>
              <img src={headphone} alt="headphone" />
            </div> */}
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="procontainer" id="container">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
        </Fragment>
    )
}

export default Home
