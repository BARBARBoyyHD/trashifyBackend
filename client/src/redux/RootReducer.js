import { combineReducers } from "redux";
import newsReducer from "./News/ApiReducer";
import registerReducer from "./Register/registerReducer";
import loginReducer from "./Login/LoginReducer";

const rootReducer = combineReducers({
    news:newsReducer,
    register:registerReducer,
    login:loginReducer
})

export default rootReducer