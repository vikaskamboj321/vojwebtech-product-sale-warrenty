import React, {useContext, useEffect, useState } from 'react';
import {SafeAreaView, Image, View, Text, StyleSheet} from 'react-native';
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent} from "../components";
import Moment from "moment";
import { Styles } from '../styles';
const Product = ({navigation, route}) => {
    const productContext = useContext(ProductContext);    
    const userContext = useContext(UserContext);
    const params = route.params;
    const [loading, setLoading] = useState(true);
    const {current, setCurrent} = productContext;
    if(params === undefined){
        navigation.navigate("List");
    }
    useEffect(() => {
        setCurrent(params.item);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [current]);
    console.log(current);    

    return (
        <SafeAreaView style={{flex: 1}}>
            <HeaderComponent title="Product Details" navigation={navigation} backButton={true} />
            {loading === true ? (
                <Image 
                    source={require('../static/loading.gif')} 
                    style={{
                        width: 50,
                        resizeMode: "contain",
                        alignSelf: "center",
                        marginTop: -50
                    }}
                />
            ) : current !== null ? (
                <View style={{padding: 10}}>
                    <Text style={styles.heading}>Product Details</Text>
                    <View style={styles.view}>
                        <Text style={styles.subHeading}>Product</Text>
                        <Text style={styles.text}>{current[0].product}</Text>
                    </View>
                    <View  style={styles.view}>
                        <Text style={styles.subHeading}>Warrenty</Text>
                        <Text style={styles.text}>{current[0].warrenty}</Text>
                    </View>
                    <View  style={styles.view}>
                        <Text style={styles.subHeading}>Purchase Date</Text>
                        <Text style={styles.text}>{Moment(current[0].purchaseDate.t).format('Do MMM YYYY')}</Text>
                    </View>

                    <View style={{marginBottom: 20}}></View>
                    <Text style={styles.heading}>Customer Details</Text>
                    <View  style={styles.view}>
                        <Text style={styles.subHeading}>Name</Text>
                        <Text style={styles.text}>{current[0].customerName}</Text>
                    </View>
                    <View  style={styles.view}>
                        <Text style={styles.subHeading}>Email</Text>
                        <Text style={styles.text}>{current[0].customerEmail}</Text>
                    </View>
                    <View  style={styles.view}>
                        <Text style={styles.subHeading}>Mobile</Text>
                        <Text style={styles.text}>{current[0].customerMobile}</Text>
                    </View>
                </View>
            ) : (
                <View style={{
                    justifyContent: "center",
                    alignItems: 'center',
                    flex:1
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >Product Not Found</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25
    },
    subHeading: {
        fontSize:15,
        flex: 1
    },
    text : {
        fontSize: 20,
        flex: 1
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: Styles.lightred,
        paddingHorizontal: 30 
    }
})

export default Product ;

