import React from "react";
import { useStateValue } from "../../provider/StateProvider";
import CheckoutProduct from "../checkout_product/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.css";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          {user && <h3>Hello,{user?.email} </h3>}
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        {basket.map((prod) => (
          <CheckoutProduct key={prod.id} product={prod} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
