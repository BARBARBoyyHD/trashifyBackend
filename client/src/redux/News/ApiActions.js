import axios from "axios";
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "./ApiTypes";

// Action to indicate the request is in progress
const getNewsRequest = () => {
  return {
    type: GET_NEWS_REQUEST
  };
};

// Action to handle successful API response
const getNewsSuccess = (data) => {
  return {
    type: GET_NEWS_SUCCESS,
    payload: data
  };
};

// Action to handle errors in the API request
const getNewsFailed = (error) => {
  return {
    type: GET_NEWS_ERROR,
    payload: error
  };
};

// Thunk action to get the news from the API
export const getNews = () => {
  return (dispatch) => {
    dispatch(getNewsRequest()); // Dispatch the request action
    
    axios
      .get("http://localhost:5000/api/news/waste/management")
      .then((response) => {
        console.log("API Response:", response.data);
        // Dispatch success action with the fetched data
        dispatch(getNewsSuccess(response.data.articles || []));
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        // Dispatch error action if there's a failure
        dispatch(getNewsFailed(error.message || "Error fetching news"));
      });
  };
};
