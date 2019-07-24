// Dependencies
import axios from "axios";

// Action Types
import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR
} from "./actionTypes";

// Base actions
import { request, received, error } from "../Shared/redux/baseActions";

export const fetchCoins = () => dispatch => {
  // Dispatching our request action
  dispatch(request(FETCH_COINS_REQUEST));

  // Axios data
  const axiosData = {
    method: "GET",
    url: "https://api.coinmarketcap.com/v1/ticker/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  // If everything is correct, we dispatch our received action
  return axios(axiosData)
    .then(res => dispatch(received(FETCH_COINS_SUCCESS, res.data)))
    .catch(err => {
      console.log("AXIOS ERROR", err.response);
      dispatch(error(FETCH_COINS_ERROR));
    });
};
