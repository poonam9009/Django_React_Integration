import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducers from "./reducers/index";

const intialState = [];
const middleware = [thunk];
const store = createStore(
    RootReducers,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;