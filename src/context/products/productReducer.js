import {
    ALL_PRODUCTS, CURRENT, FILTER, ADD_NEW, REMOVE, CLEAR_ERROR, SET_LOADING, CLEAR_FILTER
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
            return {
                ...state,
                filtered: state.products.filter(product => {
                    console.log('filterReducer', product)
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return product.product.match(regex) || product.customerMobile.match(regex) || product.customerEmail.match(regex) || product.customerName.match(regex);
                })
            }
        case CLEAR_FILTER :
            return {
                ...state,
                filtered : []
            }
        case ADD_NEW:
            return {
                ...state,
                products: [action.payload, ...state.products],
                error: "Product Added Successfully"
            }
        case REMOVE:
            return {
                ...state,
                filtered: state.filtered.filter(product => product._id !== action.payload),
                products: state.products.filter(product => product._id !== action.payload),
                loading: false
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
        default: 
            return {
                ...state
            }
    }
}