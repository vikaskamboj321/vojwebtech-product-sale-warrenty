import React, {useReducer} from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import * as firebase from "firebase";
import {
    ALL_PRODUCTS, CURRENT, FILTER, ADD_NEW, REMOVE, CLEAR_ERROR
} from "../types";

const ProductState = props => {
    const initialState = {
        products: null,
        filtered: null,
        error: null,
        current: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const addProduct = (product) => dispatch({type: ADD_NEW, payload: product})
    const getAllProducts = () => dispatch({type: ALL_PRODUCTS})
    const filterProducts = (searchQuery) => dispatch({type: FILTER})
    const searchProducts = (searchQuery) => dispatch({type: ALL_PRODUCTS})
    const clearError = () => dispatch({type: CLEAR_ERROR})
    const setCurrent = (product) => dispatch({type: CURRENT, payload: product })
    const removeProduct = product => dispatch({type: REMOVE, payload: product})
    
    return (
        <ProductContext.Provider 
            value={{
                products : state.products,
                filtered : state.filtered,
                error : state.error,
                current : state.current,
                getAllProducts,
                filterProducts,
                clearError,
                searchProducts,
                setCurrent,
                removeProduct,
                addProduct
            }}
        >
        {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;