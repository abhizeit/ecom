import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_REQUEST,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

export const login = (payload) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:8080/users/login",
      payload
    );
    if (!data.token) {
      dispatch({ type: AUTH_LOGIN_ERROR });
    } else {
      dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data.token });
    }
  } catch (e) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const signup = (payload) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:8080/users/signup",
      payload
    );
    if (!data.error) {
      dispatch({ type: AUTH_SIGNUP_SUCCESS });
    } else {
      dispatch({ type: AUTH_SIGNUP_ERROR });
    }
  } catch (e) {
    dispatch({ type: AUTH_SIGNUP_ERROR });
  }
};

export const logout = () => ({ type: AUTH_LOGOUT });
