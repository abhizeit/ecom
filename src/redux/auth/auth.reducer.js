import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_REQUEST,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

const token = localStorage.getItem("token") || "";
const initState = {
  isAuth: !!token,
  isLoading: false,
  isError: false,
  token: token,
  isSignedUp: false,
  isSignUpLoading: false,
  isSignUpError: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNUP_REQUEST: {
      return {
        ...state,
        isSignedUp: false,
        isSignUpLoading: true,
        isSignUpError: false,
      };
    }
    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        isSignedUp: false,
        isSignUpLoading: false,
        isSignUpError: true,
      };
    }
    case AUTH_SIGNUP_SUCCESS: {
      return {
        ...state,
        isSignedUp: true,
        isSignUpLoading: false,
        isSignUpError: false,
      };
    }
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
        token: payload,
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
