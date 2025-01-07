import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./LoginTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
