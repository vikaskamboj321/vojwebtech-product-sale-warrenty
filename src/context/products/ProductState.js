import React, {useReducer} from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import * as firebase from "firebase";
import "firebase/firestore";
import {
    ALL_PRODUCTS, CURRENT, FILTER, CLEAR_FILTER, ADD_NEW, REMOVE, CLEAR_ERROR, SET_LOADING
} from "../types";

const ProductState = props => {
    const initialState = {
        products: [],
        filtered: [],
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
            let pro = {_id: data.id, ...product}
            console.log('[product added]', data);
            dispatch({type: ADD_NEW, payload: pro});
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

    const filterProducts = (searchQuery) => dispatch({type: FILTER, payload: searchQuery})
    const clearFilter = () => dispatch({CLEAR_FILTER})
    // const searchProducts = (searchQuery) => dispatch({type: ALL_PRODUCTS})
    
    const clearError = () => dispatch({type: CLEAR_ERROR})
    
    const setCurrent = (product) => {
        dispatch({type: CURRENT, payload: product })
    }
    
    const removeProduct = product => {
        setLoading(true);
        products.doc(product).delete().then(function() {
            console.log("Product successfully deleted!");
            dispatch({type: REMOVE, payload: product});
        }).catch(function(error) {
            console.error("Error removing product: ", error);
            dispatch({type: ERROR, payload: err})
        });
    }
    
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
                clearFilter,
                clearError,
                // searchProducts,
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