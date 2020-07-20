import {
    ERROR,
    SIGNIN,
    SIGNOUT,
    LOAD_USER,
    CLEAR_ERROR
} from "../types";

export default (state, action) => {
    switch(action.type){
        case LOAD_USER:
        case SIGNIN:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false,
                error: null
            }
        case SIGNOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
                loading: false,
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
        default:
            return {
                ...state
            }
    }
}