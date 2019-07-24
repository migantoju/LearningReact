// Dependencies
import { combineReducers } from "redux";

// Components Reducers
import coins from "../../reducers/coinsReducer";

// Shared Reducers
import device from "./deviceReducer";

const rootReducer = combineReducers({
  device,
  coins
});

export default rootReducer;
