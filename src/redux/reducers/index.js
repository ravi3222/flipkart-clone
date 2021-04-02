import { combineReducers } from "redux";
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
});

export default rootReducer;
