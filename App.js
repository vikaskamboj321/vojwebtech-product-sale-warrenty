import React, {useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import LoadingScreen from "./src/screens/LoadingScreen";
import * as firebase from "firebase";
import {config} from "./src/Config";

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const MyStack = createStackNavigator();
const App = ({navigation}) => {
    const [isAuth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        const fbInstance = firebase.auth().onAuthStateChanged(function(user) {
            setLoading(false);
            console.log(user)
            if (user) {
                setAuth(true)
                navigation.navigate("Home");
            }
          });
          return fbInstance();        
    }, [] );

    // if(loading === true){
    //     return <LoadingScreen />
    // }

    return (
            <NavigationContainer>
                <MyStack.Navigator 
                    headerMode="none"
                  >
                      <MyStack.Screen name="Home" component={Home} />
                      <MyStack.Screen name="Login" component={Login} />
                        <MyStack.Screen name="Register" component={Register} />
                    {/* {loading === false && isAuth === true ? (
                        <React.Fragment>
                            <MyStack.Screen name="Home" component={Home} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <MyStack.Screen name="Login" component={Login} />
                            <MyStack.Screen name="Register" component={Register} />
                        </React.Fragment>
                    )} */}
                </MyStack.Navigator>
            </NavigationContainer>
    )
}


export default App;