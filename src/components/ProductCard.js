import React from "react";
import headphone from "./../images/headphones.png";
import { Rating } from "@material-ui/lab";
import image1 from "./../images/headphones.png"; 
// import image2 from ; 
// import image3 from ; 

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="productCard">
      {/* <img src={product.image} alt={product.name} /> */}
      <img src={image1} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </div>
  );
};

export default ProductCard;
