import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";

const Subtotal = () => {
  return (
    <CurrencyFormat
      renderText={(value) => (
        <div className="subtotal">
          <p>
            Subtotal (2 items): <strong>$250</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
          <button className="subtotal__btn">Proceed to checkout</button>
        </div>
      )}
      decimalScale={2}
      value={0}
      displayType="text"
      thousandSeparator={true}
      prefix={"$"}
    />
  );
};

export default Subtotal;
