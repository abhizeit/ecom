import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "./auth.types";

export const login = (payload) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_REQUEST });
  try {
    let { data } = await axios.post("https://reqres.in/api/login", payload);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data.token });
  } catch (e) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};
export const logout = () => ({ type: AUTH_LOGOUT });
