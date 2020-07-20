import {
    ERROR,
    SIGNIN,
    SIGNOUT,
    LOAD_USER,
    CLEAR_ERROR,
    SET_LOADING,
    APP_READY
} from "../types";

export default (state, action) => {
    switch(action.type){
        case LOAD_USER:
        case SIGNIN:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                error: null
            }
        case SIGNOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
                error: null
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case APP_READY:
            return {
                ...state,
                appReady: action.payload
            }
        default:
            return {
                ...state
            }
    }
}