import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        products: [],
        isLoading: false,
        isError: true,
      };
    }
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        products: [],
        isLoading: true,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};
