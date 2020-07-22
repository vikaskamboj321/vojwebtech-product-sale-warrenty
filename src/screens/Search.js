import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import {SwipeRow, Button, Icon, View} from "native-base";
import { Styles} from '../styles';
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent} from "../components";

const Search = ({navigation}) => {
    const productContext = useContext(ProductContext);    
    const userContext = useContext(UserContext);
    const {getAllProducts, products} = productContext;
    useEffect(() => {
        getAllProducts(userContext.user.email);
    }, []);

    return (
        <SafeAreaView>
            <HeaderComponent title="Search Product" navigation={navigation} />
            <ScrollView>
                {products.length > 0 ? products.map((product, key) => (
                    <View key={`productList-${key}-${product._id}`}><Text>Customer Name : {product.customerName}</Text></View>
                )) : null}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search ;

