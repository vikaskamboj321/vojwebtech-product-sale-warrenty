import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Container} from "native-base";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import Add from "./Add";
import Search from "./Search";
import List from "./List";
import {Styles} from "../styles";
const BottomTab = createBottomTabNavigator();
const Tabs = ({navigation}) => {
    return (
        <Container>            
            <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Add') {
                        iconName="ios-add-circle-outline"
                    } else if (route.name === 'Search') {
                        iconName="ios-search"
                    } else if (route.name === 'List') {
                        iconName="ios-list"
                    }
                    return <Ionicons name={iconName} size={40} color={color} />
                },
                })}
                tabBarOptions={{
                    activeTintColor: Styles.red,
                    inactiveTintColor: Styles.black,
                    labelStyle: { fontSize: 15 },
                    style: { 
                        backgroundColor: Styles.lightred, 
                        height: 80,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
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
