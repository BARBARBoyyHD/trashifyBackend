import { combineReducers } from "redux";
import newsReducer from "./News/ApiReducer";

const rootReducer = combineReducers({
    news:newsReducer
})

export default rootReducer