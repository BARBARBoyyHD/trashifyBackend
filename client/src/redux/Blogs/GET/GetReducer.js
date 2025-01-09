import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_ERROR,
} from "./GetTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { ...state, loading: true };
    case GET_BLOGS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_BLOGS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getBlogsReducer;
