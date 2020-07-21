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
    SET_LOADING,
    APP_READY
} from "../types";

const UserState = props => {

    const initialState = {
        user: null,
        isAuth: false,
        loading: false,
        error: null,
        appReady: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState );

    const loadUser = async () => {
       let fb = await firebase.auth().onAuthStateChanged(function(user) {
            // console.log('userContext.loadUser()', user);
            if (user) {
                dispatch({type: LOAD_USER, payload: user});
            }
            setAppReady(true);  
          }); 
        //   fb();  
    }

    const signIn = async (user) => {
        setLoading(true);
        let fb = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                setLoading(false);
                dispatch({type: SIGNIN, payload: user})
            })
            .catch(function(err) {   
                setLoading(false);
                dispatch({type: ERROR, payload: err.message});             
                // var errorCode = error.code;
                // var errorMessage = error.message;
              }); 
        // fb();        
    }
   
    const register = async (user) => {
        setLoading(true);
        let fb = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            setLoading(false);
            dispatch({type: SIGNIN, payload: user})
        })
        .catch(function(err) {
            setLoading(false);
            dispatch({type: ERROR, payload: err.message});
        });
        // fb();
    }

    const signOut = () => {
        let fb = firebase.auth().signOut()
        .then(() => {
            dispatch({type: SIGNOUT})
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err.message});
        })
        // fb();
    };

    const clearError = () => dispatch({type: CLEAR_ERROR});
    const setLoading = (status) => dispatch({type: SET_LOADING, payload: status});
    const setAppReady = (status) => dispatch({type: APP_READY, payload: status});

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isAuth: state.isAuth,
                loading: state.loading,
                error: state.error,
                appReady: state.appReady,
                loadUser,
                register,
                signIn,
                signOut,
                clearError,
                setLoading,
                setAppReady
            }}
        >{props.children}</UserContext.Provider>
    )
}

export default UserState;

