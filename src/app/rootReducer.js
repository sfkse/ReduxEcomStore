import { combineReducers } from "redux";
import { cartPriceReducer } from "./cart/cartPriceSlice";
import { cartReducer } from "./cart/cartSlice";
import { loadingReducer } from "./loading/loadingSlicer";
import { productReducer } from "./product/productSlice";

export const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    loading: loadingReducer,
    cartPrice: cartPriceReducer
})