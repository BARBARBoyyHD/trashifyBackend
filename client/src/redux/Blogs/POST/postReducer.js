import {
  POST_BLOGS_REQUEST,
  POST_BLOGS_SUCCESS,
  POST_BLOGS_ERROR,
} from "./postTypes";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const postBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BLOGS_REQUEST:
      return { ...state, loading: true };
    case POST_BLOGS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_BLOGS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postBlogsReducer;
