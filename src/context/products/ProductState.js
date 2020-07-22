import React, {useReducer} from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import * as firebase from "firebase";
import "firebase/firestore";
import {
    ALL_PRODUCTS, CURRENT, FILTER, ADD_NEW, REMOVE, CLEAR_ERROR, SET_LOADING
} from "../types";

const ProductState = props => {
    const initialState = {
        products: [],
        filtered: null,
        error: null,
        current: null,
        loading: false,
    }

    const products = firebase.firestore().collection('products');

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    // add new product
    const addProduct = async (product) => {
        setLoading(true);
        await products.add(product)
        .then((data) => {
            console.log('[product added]', data)
            dispatch({type: ADD_NEW, payload: data})
        }).catch(err => {
            console.log('[product not added]', err);
            dispatch({type: ERROR, payload: err})

        })    
        setLoading(false);
    }

    // get all products
    const getAllProducts = (user) => {
        setLoading(true);
        products.where("user", "==", user).get().then(async (querySnapshot) => {
            let res = [];
            await querySnapshot.forEach((doc) => {
                res.push({_id: doc.id, ...doc.data()});
                // console.log(`${doc.id} => ${doc.data()}`);
            });
            setLoading(false);
            console.log('[db products]', res);
            dispatch({type: ALL_PRODUCTS, payload: res});
        });        
    }

    const filterProducts = (searchQuery) => dispatch({type: FILTER})
    const searchProducts = (searchQuery) => dispatch({type: ALL_PRODUCTS})
    const clearError = () => dispatch({type: CLEAR_ERROR})
    const setCurrent = (product) => {
        dispatch({type: CURRENT, payload: product })
    }
    const removeProduct = product => dispatch({type: REMOVE, payload: product})
    const setLoading = status => dispatch({type: SET_LOADING, payload: status})
    return (
        <ProductContext.Provider 
            value={{
                products : state.products,
                filtered : state.filtered,
                error : state.error,
                current : state.current,
                loading : state.loading,
                getAllProducts,
                filterProducts,
                clearError,
                searchProducts,
                setCurrent,
                removeProduct,
                addProduct,
                setLoading
            }}
        >
        {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;