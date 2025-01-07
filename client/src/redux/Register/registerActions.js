
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./registerTypes";
import axios from "axios";

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload:data
  };
};

const registerError = (error) => {
    return {
      type: REGISTER_ERROR,
      payload: error.response ? error.response.data.message : error.message,
    };
  };
  

export const register = (data,navigate) => {
  return (dispatch) => {
    dispatch(registerRequest());
    axios.post("http://localhost:5000/api/register", data,{withCredentials: true})
      .then((response) => {
        dispatch(registerSuccess(response.data));
        console.log(response.data);
        navigate("/pages/login")
      })
      .catch((error) => { 
        dispatch(registerError(error));
      });
  };
};
