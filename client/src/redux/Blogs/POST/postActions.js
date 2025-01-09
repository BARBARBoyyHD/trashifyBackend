import axios from "axios";
import {
  POST_BLOGS_REQUEST,
  POST_BLOGS_SUCCESS,
  POST_BLOGS_ERROR,
} from "./postTypes";

const postBlogsRequest = () => {
  return {
    type: POST_BLOGS_REQUEST,
  };
};

const postBlogsSuccess = (data) => {
  return {
    type: POST_BLOGS_SUCCESS,
    payload: data,
  };
};

const postBlogsError = (error) => {
  return {
    type: POST_BLOGS_ERROR,
    payload: error,
  };
};

export const postBlogs = (data, callback) => {
  return (dispatch) => {
    dispatch(postBlogsRequest());
    axios
      .post("http://localhost:5000/api/createBlogs", data, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(postBlogsSuccess(response.data));
        console.log(response.data);
        if (callback) {
          callback(response.status);
        }
      })
      .catch((error) => {
        dispatch(postBlogsError(error));
      });
  };
};
