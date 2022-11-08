import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./cart.types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
export const updateCart = (payload) => ({ type: UPDATE_CART, payload });
