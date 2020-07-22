import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image, StyleSheet, RefreshControl} from 'react-native';
import {Item, Input, Icon} from "native-base";
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent, SwipeItem, SwipeAction} from "../components";
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProductList = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const productContext = useContext(ProductContext);    
    const userContext = useContext(UserContext);
    const {getAllProducts, products, filtered, filterProducts, clearFilter} = productContext;
    useEffect(() => {
        getAllProducts(userContext.user.email);
    }, []);

    const searchProduct = text => {
        setSearch(prevText => text);
        filterProducts(text)
    }
    const resetSearch = () => {
        setSearch(prevText => "");
        clearFilter();
    }
    console.log(filtered);
    return (
        <SafeAreaView>
            <HeaderComponent title="All Products" navigation={navigation} />
            <View
                style={{padding: 10}}
            >
                <View
                    style={{
                        marginBottom: 20
                    }}
                >
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search Product" value={search} onChangeText={searchProduct} />
                        {/* <Icon name="ios-close" /> */}
                    </Item>
                    {/* <TouchableOpacity
                        style={{
                            alignSelf: "flex-end"
                        }}
                        onPress={() => resetSearch}
                    ><Text>Clear Filter</Text></TouchableOpacity> */}
                </View>
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
                ) : filtered.length > 0 ? (
                    <ScrollView
                        // refreshControl={
                        //     <RefreshControl refreshing={refreshing} onRefresh={getAllProducts(userContext.user.email)} />
                        // }
                    >
                        <SwipeListView
                            data={filtered}
                            renderItem={ (data, rowMap) => (
                                <SwipeItem key={`filteredProduct-${data.item._id}`} item={data.item} navigation={navigation}/>
                            )}
                            renderHiddenItem={ (data, rowMap) => (
                                <SwipeAction key={`filteredProductHidden-${data.item._id}`} item={data.item._id} navigation={navigation}/>
                            )}
                            leftOpenValue={75}
                            rightOpenValue={-75}
                        />
                    </ScrollView>
                ) : (
                    <ScrollView
                        contentContainerStyle={styles.scrollView}                        
                    >
                        <SwipeListView
                            data={products}
                            renderItem={ (data, rowMap) => (
                                <SwipeItem key={`product-${data.item._id}`} item={data.item} navigation={navigation}/>
                            )}
                            renderHiddenItem={ (data, rowMap) => (
                                <SwipeAction key={`productHidden-${data.item._id}`} item={data.item._id} navigation={navigation}/>
                            )}
                            leftOpenValue={75}
                            rightOpenValue={-75}
                        />
                    </ScrollView>
                )}
            </View>            
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

