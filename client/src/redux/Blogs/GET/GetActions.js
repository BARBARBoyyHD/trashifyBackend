import axios from "axios";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_ERROR,
} from "./GetTypes";

const getBlogsRequest = () => {
  return {
    type: GET_BLOGS_REQUEST,
  };
};

const getBlogsSuccess = (data) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: data,
  };
};

const getBlogsError = (error) => {
  return {
    type: GET_BLOGS_ERROR,
    payload: error,
  };
};

export const getBlogs = (callback) => {
  return (dispatch) => {
    dispatch(getBlogsRequest());
    axios
      .get("http://localhost:5000/api/getAllBlogs", { withCredentials: true })
      .then((response) => {
        dispatch(getBlogsSuccess(response.data));
        if (callback) {
          callback(response.status); // Ensure callback receives success status
        }
        
      })
      .catch((error) => {
        dispatch(getBlogsError(error));

        // Check if error response exists and pass status to callback
        if (callback && error.response) {
          callback(error.response.status);
        }
      });
  };
};
