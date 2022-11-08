import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishlist.types";

export const addToWishlist = (payload) => ({
  type: ADD_TO_WISHLIST,
  payload,
});
export const removeFromWishlist = (payload) => ({
  type: REMOVE_FROM_WISHLIST,
  payload,
});
