import { cartConstants } from "../actions/constants";

const initialState = {
  cartItems: {
    // 123: {
    //   _id: 123,
    //   name: "Samsung mobile",
    //   price: 200,
    //   qty: 1,
    // },
  },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    default:
      return state;
  }
  return state;
};
