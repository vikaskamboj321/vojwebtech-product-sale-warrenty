import React, {useEffect, useContext, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import userContext from "./src/context/user/userContext";
import LoadingScreen from "./src/screens/LoadingScreen";
const MyStack = createStackNavigator();

const AppContainer = () => {
    const UserContext = useContext(userContext);
    const {loadUser, isAuth, user, appReady} = UserContext;
    useEffect(() => {
        loadUser();
    }, []);
    
    if(appReady === false){
        return <LoadingScreen />
    }
    
    return (
            <NavigationContainer>
                <MyStack.Navigator 
                    headerMode="none"
                    // screenOptions={{
                    //     headerStyle: {
                    //         backgroundColor: '#f4511e',
                    //     },
                    //     headerTintColor: '#fff',
                    //     headerTitleStyle: {
                    //         fontWeight: 'bold',
                    //     },
                    // }}
                  >
                    {isAuth === true && user !== null ? (
                        <React.Fragment>
                            <MyStack.Screen name="Home" component={Home} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <MyStack.Screen name="Login" component={Login} />
                            <MyStack.Screen name="Register" component={Register} />  
                        </React.Fragment>
                    )}
                </MyStack.Navigator>
            </NavigationContainer>
    )
}


export default AppContainer;