import {
    ALL_PRODUCTS, CURRENT, FILTER, ADD_NEW, REMOVE, CLEAR_ERROR, SET_LOADING
} from "../types";

export default (state, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case CURRENT:
            return {
                ...state,
                current: state.products.filter(product => product._id === action.payload)
            }
        case FILTER:
        case ADD_NEW:
            return {
                ...state,
                products: [action.payload, ...state.products],
                error: "Product Added Successfully"
            }
        case REMOVE:
        case CLEAR_ERROR:
            return {
                ...state
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}