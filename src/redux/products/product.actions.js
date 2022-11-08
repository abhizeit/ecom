import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
