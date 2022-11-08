import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "./auth.types";

const token = localStorage.getItem("token") || "";
const initState = {
  isAuth: !!token,
  isLoading: false,
  isError: false,
  token: token,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_REQUEST: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
        token: "",
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        token: payload.token,
      };
    }
    case AUTH_LOGIN_ERROR: {
      localStorage.setItem("token", "");
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
        token: "",
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
