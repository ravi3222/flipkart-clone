import { combineReducers } from "redux";
import categoryReducer from "./category.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;
