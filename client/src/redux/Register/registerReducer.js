import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./registerTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case REGISTER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
