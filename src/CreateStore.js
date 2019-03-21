import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const devToolsOption = { trace: true, name: "Corporation" };
const enhancedDevTools = composeWithDevTools(devToolsOption);

export const middlewares = [ReduxThunk];
const enhancer = enhancedDevTools(applyMiddleware(...middlewares));

export const store = createStore(RootReducer, {}, enhancer);
