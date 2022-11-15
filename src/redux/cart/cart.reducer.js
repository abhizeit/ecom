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

const initState = {
  cartItems: [],
  isLoading: false,
  isError: false,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        isLoading: false,
        isError: false,
        cartItems: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    }
    case REMOVE_FROM_CART_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REMOVE_FROM_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case REMOVE_FROM_CART: {
      console.log(payload.id);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item._id !== payload.id),
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
    case ADD_TO_CART_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TO_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case RESET_CART: {
      return {
        initState,
      };
    }
    default: {
      return state;
    }
  }
};
