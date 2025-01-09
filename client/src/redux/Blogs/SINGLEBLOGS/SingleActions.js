import {
  SINGLE_BLOGS_REQUEST,
  SINGLE_BLOGS_SUCCESS,
  SINGLE_BLOGS_ERROR,
} from "./SingleType";
import axios from "axios";

const singleBlogsRequest = () => ({
  type: SINGLE_BLOGS_REQUEST,
});

const singleBlogsSuccess = (data) => ({
  type: SINGLE_BLOGS_SUCCESS,
  payload: data,
});

const singleBlogsError = (error) => ({
  type: SINGLE_BLOGS_ERROR,
  payload: error,
});

export const singleBlogs = (id) => {
  return (dispatch) => {
    dispatch(singleBlogsRequest());
    axios
      .get(`http://localhost:5000/api/getSingleBlogs/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(singleBlogsSuccess(response.data));
        console.log("Fetched Blog Data:", response.data);
      })
      .catch((error) => {
        dispatch(singleBlogsError(error.message));
        console.error("Error fetching blog:", error);
      });
  };
};
