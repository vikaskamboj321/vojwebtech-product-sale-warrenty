import React, {useReducer} from "react";
import UserContext from "./userContext";
import UserReducer from "./UserReducer";
import * as firebase from "firebase";
import {
    ERROR,
    SIGNIN,
    SIGNOUT,
    LOAD_USER,
    CLEAR_ERROR
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
            setLoading(false);
            console.log(user)
            if (user) {
                dispatch({type: LOAD_USER, payload: {uesrname: "vikaskamboj321", name: "Vikas", mobile: "8295054241"}});
            }
          });        
    }

    const signIn = async (user) => {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                dispatch({type: SIGNIN, payload: user})
            })
            .catch(function(err) {   
                dispatch({type: ERROR, payload: err.message});             
                // var errorCode = error.code;
                // var errorMessage = error.message;
              });
       
    }
   
    const register = async (user) => {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
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
                clearError
            }}
        >{props.children}</UserContext.Provider>
    )
}

export default UserState;

