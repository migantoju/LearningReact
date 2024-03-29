// Dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Root reducer
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState) {
  const middleware = [thunk];
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
