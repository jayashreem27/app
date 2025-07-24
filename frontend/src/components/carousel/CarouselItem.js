import React from "react";
import "./Carousel.scss"; // Fixed the typo here
import { Link, json } from "react-router-dom";
import { shortenText } from "../../utils";

const CarouselItem = ({ url, name, price, descripition }) => {
  const handleCartAdd = () => {
    alert('Added to cart!');
    const cartitems = []
    if (localStorage.getItem('cartItems')) {
      const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    }
    cartitems.push(url);
    localStorage.setItem('cartItems', JSON.stringify(cartitems));
  }
  return (
    <div className="carouselItem">
      <Link to="/product-details">
        <img className="product--image" src={url} alt="product" />
        <p className="price">{`$${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className="--mb">{shortenText(descripition, 26)}</p>
      </Link>
      <button className="--btn --btn-primary --btn-block" onClick={handleCartAdd}>Add To Cart</button>
    </div>
  );
};

export default CarouselItem;