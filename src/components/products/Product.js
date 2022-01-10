import React from "react";
import { ADD_TO_BASKET } from "../../consts";
import { useStateValue } from "../../provider/StateProvider";
import "./product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("dispatch");
    //dispatch item to data layer
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button className="product__addbtn" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
