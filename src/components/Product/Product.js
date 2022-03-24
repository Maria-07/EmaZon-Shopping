import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  //   console.log(props.product);
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="shoe" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price : {price}$</p>
        <p className="seller">
          <small>Manufacturer : {seller}</small>
        </p>
        <p className="rating">
          <small>Rating : {ratings}</small>
        </p>
      </div>
      <button className="card-btn" onClick={() => handleAddToCart(product)}>
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
