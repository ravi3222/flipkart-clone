import { combineReducers } from "redux";
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";
import { cartReducer } from "./cart.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
