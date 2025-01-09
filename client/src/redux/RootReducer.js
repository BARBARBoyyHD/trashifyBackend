import { combineReducers } from "redux";
import newsReducer from "./News/ApiReducer";
import registerReducer from "./Register/registerReducer";
import loginReducer from "./Login/LoginReducer";
import getBlogsReducer from "./Blogs/GET/GetReducer";
import postBlogsReducer from "./Blogs/POST/postReducer";
import userBlogsReducer from "./Blogs/USERBLOGS/UserReducer";
import getUserProfileReducer from "./Profile/GET/profileReducer";
import singleBlogsReducer from "./Blogs/SINGLEBLOGS/SingleReducer";
const rootReducer = combineReducers({
  news: newsReducer,
  register: registerReducer,
  login: loginReducer,
  getBlogs: getBlogsReducer,
  postBlogs: postBlogsReducer,
  userBlogs: userBlogsReducer,
  userProfile:getUserProfileReducer,
  singleBlogs:singleBlogsReducer
});

export default rootReducer;
