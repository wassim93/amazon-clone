import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./consts";

export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET:
      // find first index of product to delete
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        // found prod
        newBasket.splice(index, 1);
      } else {
        console.warn("product unavailable in the basket");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
