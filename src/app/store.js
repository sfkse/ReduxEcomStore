import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

const thunkMiddleware = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, thunkMiddleware)
export default store;