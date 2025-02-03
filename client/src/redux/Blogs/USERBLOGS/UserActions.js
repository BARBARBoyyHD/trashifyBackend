import {
  USER_BLOGS_REQUEST,
  USER_BLOGS_SUCCESS,
  USER_BLOGS_ERROR,
} from "./UserTypes";
import axios from "axios";

const userBlogsRequest = () => {
  return {
    type: USER_BLOGS_REQUEST,
  };
};

const userBlogsSuccess = (data) => {
  return {
    type: USER_BLOGS_SUCCESS,
    payload: data,
  };
};

const userBlogsError = (error) => {
  return {
    type: USER_BLOGS_ERROR,
    payload: error,
  };
};

export const userBlogs = () => {
  return (dispatch) => {
    dispatch(userBlogsRequest());
    axios
      .get("http://localhost:5000/api/getAllBlogsUserID", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(userBlogsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(
          userBlogsError(
            error.response?.data?.message || "Something went wrong"
          )
        );
      });
  };
};
