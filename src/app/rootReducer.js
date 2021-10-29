import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./product/productSlice";

export const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
})