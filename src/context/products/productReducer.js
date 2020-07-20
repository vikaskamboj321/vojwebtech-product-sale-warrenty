import {
    ALL_PRODUCTS, CURRENT, FILTER, ADD_NEW, REMOVE, CLEAR_ERROR
} from "../types";

export default (state, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
        case CURRENT:
        case FILTER:
        case ADD_NEW:
        case REMOVE:
        case CLEAR_ERROR:
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}