import { USER_PROFILE_REQUEST,USER_PROFILE_SUCCESS,USER_PROFILE_ERROR } from "./profileTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const getUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getUserProfileReducer;
