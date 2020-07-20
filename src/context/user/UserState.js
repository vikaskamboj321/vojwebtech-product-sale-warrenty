import React, {useReducer} from "react";
import UserContext from "./userContext";
import UserReducer from "./UserReducer";
import * as firebase from "firebase";
import {
    ERROR,
    SIGNIN,
    SIGNOUT,
    LOAD_USER,
    CLEAR_ERROR,
    SET_LOADING
} from "../types";

const UserState = props => {

    const initialState = {
        user: null,
        isAuth: false,
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState );

    const loadUser = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            console.log('userContext.loadUser()', user);
            if (user) {
                dispatch({type: LOAD_USER, payload: {uesrname: "vikaskamboj321", name: "Vikas", mobile: "8295054241"}});
            }
          });        
    }

    const signIn = async (user) => {
        setLoading(true);
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                setLoading(false);
                dispatch({type: SIGNIN, payload: user})
            })
            .catch(function(err) {   
                dispatch({type: ERROR, payload: err.message});             
                // var errorCode = error.code;
                // var errorMessage = error.message;
              });
       
    }
   
    const register = async (user) => {
        setLoading(true);
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            setLoading(false);
            dispatch({type: SIGNIN, payload: user})
        })
        .catch(function(error) {
            dispatch({type: ERROR, payload: err.message});
          });
       
    }

    const signOut = () => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({type: SIGNOUT})
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err.message});
        })
        
    };

    const clearError = () => dispatch({type: CLEAR_ERROR});
    const setLoading = (status) => dispatch({type: SET_LOADING, payload: status});

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isAuth: state.isAuth,
                loading: state.loading,
                error: state.error,
                loadUser,
                register,
                signIn,
                signOut,
                clearError,
                setLoading
            }}
        >{props.children}</UserContext.Provider>
    )
}

export default UserState;

