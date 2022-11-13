import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
  UPDATE_CART,
} from "./cart.types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const resetCart = () => ({ type: RESET_CART });
export const updateCart = (payload) => ({ type: UPDATE_CART, payload });
