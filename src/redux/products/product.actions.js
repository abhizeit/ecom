import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const getProducts = (payload) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  console.log(payload);
  try {
    let { data } = await axios.get("http://localhost:8080/products", {
      params: {
        page: payload,
      },
    });
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
