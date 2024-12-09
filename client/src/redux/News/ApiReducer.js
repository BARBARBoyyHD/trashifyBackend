import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "./ApiTypes";

const initialState = {
    loading:false,
    data:[],
    error:""
}

const newsReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_NEWS_REQUEST:
          return {
            ...state,
            loading: true
          };
        case GET_NEWS_SUCCESS:
          return {
            ...state,
            loading: false,
            news: action.payload
          };
        case GET_NEWS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
}

export default newsReducer