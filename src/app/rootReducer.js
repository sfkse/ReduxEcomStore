import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { loadingReducer } from "./loading/loadingSlicer";
import { productReducer } from "./product/productSlice";

export const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    loading: loadingReducer
})