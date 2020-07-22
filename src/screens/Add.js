import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import { View, Item, Input, Label, DatePicker, Text} from "native-base";
import ProductContext from "../context/products/productContext";
import UserContext from "../context/user/userContext";
import {HeaderComponent, ButtonComponent} from "../components";
import { Styles } from '../styles';
const Add = ({navigation}) => {

    const productContext = useContext(ProductContext);
    const userContext = useContext(UserContext);
    
    const [error, setError] = useState("");

    useEffect(() => {
        if(productContext.error !== null){
            setError(productContext.error);
            productContext.clearError();
        }
    }, [productContext.error])

    const [product, setProduct] = useState("");
    const [warrenty, setWarrenty] = useState("");
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerMobile, setCustomerMobile] = useState("");

    const registerProduct = async () => {
        setError("");
        
        if(product === "" || warrenty === "" || purchaseDate === "" || customerName === "" || customerEmail === "" || customerMobile === ""){
            setError("All Fields Are Required.")
        }else{
            await productContext.addProduct({
                product, 
                warrenty, 
                purchaseDate, 
                customerName, 
                customerEmail, 
                customerMobile, 
                user: userContext.user.email 
            });
            setProduct("");
            setWarrenty("");
            setPurchaseDate("");
            setCustomerEmail("");
            setCustomerName("");
            setCustomerMobile("");
        }
    }

    return (
        <ScrollView behavior="height">
            <HeaderComponent navigation={navigation} title={"Add New Item"} />
            <View style={{padding: 10}}>
                <Text style={styles.heading}>Product Details</Text>
                <Item style={styles.input} floatingLabel>
                    <Label>Product</Label>
                    <Input onChangeText={text => setProduct(text)} value={product}/>
                </Item>
                <Item style={styles.input} floatingLabel>
                    <Label>Warrenty</Label>
                    <Input  onChangeText={text => setWarrenty(text)} value={warrenty} />
                </Item>
                <Item style={styles.input}>
                    <Label>Purchase Date</Label>
                    <DatePicker 
                        placeHolderText="Select Purchasing Date" 
                        maximumDate={new Date()}
                        defaultDate={purchaseDate}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        customStyles={{
                            datePicker:{backgroundColor: '#222'}
                        }}
                        onDateChange={ text => setPurchaseDate(text)}
                    />
                </Item>
                <View style={{marginBottom: 20}}></View>
                <Text style={styles.heading}>Customer Details</Text>
                <Item style={styles.input} floatingLabel>
                    <Label>Name</Label>
                    <Input onChangeText={text => setCustomerName(text)} value={customerName} />
                </Item>
                <Item style={styles.input} floatingLabel>
                    <Label>Email</Label>
                    <Input onChangeText={text => setCustomerEmail(text)} value={customerEmail} />
                </Item>
                <Item style={styles.input} floatingLabel>
                    <Label>Mobile</Label>
                    <Input onChangeText={text => setCustomerMobile(text)} value={customerMobile} />
                </Item>
                    <View><Text style={{color: Styles.red, marginTop: 5, marginBottom: 5}}>{error}</Text></View>
                <ButtonComponent 
                    style={{marginTop: 20}}
                    title="Register"
                    icon="ios-add-circle-outline"
                    loading={productContext.loading}
                    loadingTitle="Registering"
                    onPress={registerProduct}
                />
            </View>            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25
    },
    input : {
        marginTop: 15
    }

})

export default Add ;

