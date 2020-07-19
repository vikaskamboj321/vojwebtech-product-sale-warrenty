import React from 'react';
import {HomeStyle, Styles} from '../styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// screens
import Add from './Add';
import Search from './Search';
import List from './List';
const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    )
}

export default Home ;

