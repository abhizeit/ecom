import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_LOADING,
  RESET_CART,
  UPDATE_CART,
} from "./cart.types";
export const getCartItems = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  let { data } = await axios.get(`http://localhost:8080/carts`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  console.log(data);
  if (data.error) {
    dispatch({ type: GET_CART_ERROR });
  } else {
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  }
};
export const addToCart = (payload) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_LOADING });
  let { data } = await axios.post(
    `http://localhost:8080/carts`,
    { product: payload._id },
    {
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );

  if (!data.error) {
    console.log(data);
    dispatch({ type: ADD_TO_CART, payload: data });
  } else {
    dispatch({ type: ADD_TO_CART_ERROR });
  }
};
export const removeFromCart = (payload) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART_LOADING });
  let { data } = await axios.delete(
    `http://localhost:8080/carts/${payload.id}`
  );
  if (data.error) {
    dispatch({ type: REMOVE_FROM_CART_ERROR });
  } else {
    dispatch({ type: REMOVE_FROM_CART, payload });
  }
};

export const resetCart = () => ({ type: RESET_CART });
export const updateCart = (payload) => ({ type: UPDATE_CART, payload });
