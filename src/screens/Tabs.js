import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Container, Icon} from "native-base";
const BottomTab = createBottomTabNavigator();
import Ionicons from "@expo/vector-icons/Ionicons";
import Add from "./Add";
import Search from "./Search";
import List from "./List";
import {Styles} from "../styles";
const Tabs = ({navigation}) => {
    return (
        <Container style={{paddingBottom: 20}}>            
            <BottomTab.Navigator
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;
                //     if (route.name === 'Add') {
                //         iconName = 'add-circle';
                //     } else if (route.name === 'Search') {
                //         iconName = 'search1';
                //     } else if (route.name === 'List') {
                //         iconName = 'list';
                //     }
                //     return <Ionicons name={iconName} size={size} color={color} />;
                // },
                })}
                tabBarOptions={{
                activeTintColor: Styles.red,
                inactiveTintColor: Styles.black,
                }}
            >
                <BottomTab.Screen name="Add" component={Add} />
                <BottomTab.Screen name="Search" component={Search} />
                <BottomTab.Screen name="List" component={List} />
            </BottomTab.Navigator>
        </Container>
    )
}

export default Tabs
