import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../provider/StateProvider";
import { getBasketTotal } from "../../reducer";
import "./subtotal.css";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <CurrencyFormat
      renderText={(value) => (
        <div className="subtotal">
          <p>
            Subtotal ( {basket.length} items ): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
          <button className="subtotal__btn">Proceed to checkout</button>
        </div>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType="text"
      thousandSeparator={true}
      prefix={"$"}
    />
  );
};

export default Subtotal;
