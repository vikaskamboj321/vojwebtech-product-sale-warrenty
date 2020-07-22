import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, SectionList, Button} from 'react-native';
import {View, List, ListItem, Icon} from "native-base";
import { Styles} from '../styles';
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent} from "../components";


const ProductList = ({navigation}) => {
    const productContext = useContext(ProductContext);    
    const userContext = useContext(UserContext);
    const {getAllProducts, products} = productContext;
    useEffect(() => {
        getAllProducts(userContext.user.email);
    }, []);

    return (
        <SafeAreaView>
            <HeaderComponent title="All Products" navigation={navigation} />
            <ScrollView>
                {products.length > 0 ? products.map((product, key) => (
                    <View key={`productList-${key}-${product._id}`}><Text>Customer Name : {product.customerName}</Text></View>
                )) : null}
            </ScrollView>            
        </SafeAreaView>
    )
}

export default ProductList ;

