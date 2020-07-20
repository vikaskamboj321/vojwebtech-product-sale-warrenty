import React from 'react';
import UserState from "./src/context/user/UserState";
import AppContainer from "./AppContainer";
import * as firebase from "firebase";
import {config} from "./src/Config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const App = ({navigation}) => {
    return (
        <UserState>
            <AppContainer />
        </UserState>
    )
}


export default App;