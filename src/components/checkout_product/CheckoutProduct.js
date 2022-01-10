import React from "react";
import { useStateValue } from "../../provider/StateProvider";
import "./checkout_product.css";
const CheckoutProduct = ({ product }) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={product.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{product.title}</p>
        <p>
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
