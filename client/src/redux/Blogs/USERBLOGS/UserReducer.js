import {
  USER_BLOGS_REQUEST,
  USER_BLOGS_SUCCESS,
  USER_BLOGS_ERROR,
} from "./UserTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_BLOGS_REQUEST:
      return { ...state, loading: true };
    case USER_BLOGS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_BLOGS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userBlogsReducer;
