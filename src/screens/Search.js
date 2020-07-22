import React, {useContext, useEffect} from 'react';
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {createStackNavigator} from "@react-navigation/stack";
import List from "./List";
import Product from "./Product";
const Stack = createStackNavigator();
const Search = ({navigation}) => {
    const productContext = useContext(ProductContext);    
    const userContext = useContext(UserContext);    

    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

export default Search ;

