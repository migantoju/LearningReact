// Dependencies
import { createStore } from "redux";

// Root reducer
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
