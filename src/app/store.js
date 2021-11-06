import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

let preloadedState;

const persistedCartItems = localStorage.getItem('cart');

if (persistedCartItems)
    preloadedState = {
        cart: JSON.parse(persistedCartItems)
    }

const thunkMiddleware = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, preloadedState, thunkMiddleware)
export default store;