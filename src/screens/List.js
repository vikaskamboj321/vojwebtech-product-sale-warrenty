import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {View, ListItem} from "native-base";
import { Styles} from '../styles';
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent, SwipeItem, SwipeAction} from "../components";
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <ScrollView
                style={{padding: 10}}
            >
                {productContext.loading === true ? (
                    <Image 
                        source={require('../static/loading.gif')} 
                        style={{
                            width: 50,
                            resizeMode: "contain",
                            alignSelf: "center",
                            marginTop: -50
                        }}
                    />
                ) : (
                    <SwipeListView
                        data={products}
                        renderItem={ (data, rowMap) => (
                            <SwipeItem item={data.item} navigation={navigation}/>
                        )}
                        renderHiddenItem={ (data, rowMap) => (
                            <SwipeAction item={data.item._id} navigation={navigation}/>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                )}
            </ScrollView>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // rowFront: {
    //     alignItems: 'center',
    //     backgroundColor: '#CCC',
    //     borderBottomColor: 'black',
    //     borderBottomWidth: 1,
    //     justifyContent: 'center',
    //     height: 50,
    // },
    // rowBack: {
    //     alignItems: 'center',
    //     backgroundColor: '#DDD',
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingLeft: 15,
    // },
    // backRightBtn: {
    //     alignItems: 'center',
    //     bottom: 0,
    //     justifyContent: 'center',
    //     top: 0,
    //     width: 75,
    //     flex: 1
    // },
    // backRightBtnRight: {
    //     backgroundColor: 'red',
    //     right: 0,
    // },
    // backTextWhite: {
    //     color: '#FFF',
    // },
})

export default ProductList ;

