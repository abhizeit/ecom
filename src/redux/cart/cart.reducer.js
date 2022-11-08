import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./cart.types";

const initState = {
  cartItems: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== payload.id),
        ],
      };
    }
    case UPDATE_CART: {
      console.log(payload.id);
      console.log(typeof payload.count);
      return {
        ...state,
        cartItems: state.cartItems.map((c) =>
          c.id === payload.id ? { ...c, count: payload.count } : c
        ),
      };
    }
    default: {
      return state;
    }
  }
};
