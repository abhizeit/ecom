import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishlist.types";

const initState = {
  wishlist: [],
};

export const wishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST: {
      return { ...state, wishlist: [...state.wishlist, payload] };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlist: [...state.wishlist.filter((i) => i.id !== payload.id)],
      };
    }
    default: {
      return state;
    }
  }
};
