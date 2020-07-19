import React, {useState, useEffect} from 'react';
// import {HomeStyle, Styles} from '../styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as firebase from 'firebase';
const Tab = createBottomTabNavigator();

// screens
import Add from './Add';
import Search from './Search';
import List from './List';
const Home = ({navigation}) => {
    
    useEffect(() => {
        const fbInstance = firebase.auth().onAuthStateChanged(user => {
            if(!user){
                navigation.navigate("Login")
            }
        });
        return fbInstance()
    })
    

    return (
        <Tab.Navigator style={{marginBotom: 20}}>
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    )
}

export default Home ;

