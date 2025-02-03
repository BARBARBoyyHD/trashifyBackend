import { USER_PROFILE_REQUEST,USER_PROFILE_SUCCESS,USER_PROFILE_ERROR } from "./profileTypes";
import axios from "axios";

const userProfileRequest = ()=>{
    return{
        type:USER_PROFILE_REQUEST
    }
}

const userProfileSuccess = (data)=>{
    return{
        type:USER_PROFILE_SUCCESS,
        payload:data
    }
}

const userProfileError = (error)=>{
    return{
        type:USER_PROFILE_ERROR,
        payload:error
    }
}

export const userProfile = ()=>{
    return(dispatch)=>{
        dispatch(userProfileRequest())
        axios.get("http://localhost:5000/api/userProfile",{withCredentials:true})
        .then((response)=>{
            dispatch(userProfileSuccess(response.data))
            
        })
        .catch((error)=>{
            dispatch(userProfileError(error))
        })

    }
}