import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./LoginTypes";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    return: data,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    return: error,
  };
};

export const login = (data, callback) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("http://localhost:5000/api/login", data, { withCredentials: true })
      .then((response) => {
        dispatch(loginSuccess(response.data));
        console.log(response.data);
        if (callback) {
          callback(response.status); // Pass response status to the callback
        }
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};
