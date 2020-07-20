import React from 'react';
import UserState from "./src/context/user/UserState";
import ProductState from "./src/context/products/ProductState";
import AppContainer from "./AppContainer";
import * as firebase from "firebase";
import {config} from "./src/Config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const App = ({navigation}) => {
    return (
        <UserState>
            <ProductState>    
                <AppContainer />
            </ProductState>
        </UserState>
    )
}


export default App;