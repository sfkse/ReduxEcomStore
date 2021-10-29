import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";

export const rootReducer = combineReducers({
    cart: cartReducer
})