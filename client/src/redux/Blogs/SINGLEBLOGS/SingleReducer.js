import {
  SINGLE_BLOGS_REQUEST,
  SINGLE_BLOGS_SUCCESS,
  SINGLE_BLOGS_ERROR,
} from "./SingleType";

const initialState = {
  loading: false,
  data: {}, // Changed from `null` to an empty object for easier conditional rendering
  error: null,
};

const singleBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_BLOGS_REQUEST:
      return { ...state, loading: true, error: null };
    case SINGLE_BLOGS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case SINGLE_BLOGS_ERROR:
      return { ...state, loading: false, error: action.payload, data: {} };
    default:
      return state;
  }
};

export default singleBlogsReducer;
