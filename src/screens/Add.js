import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from "native-base";
import userContext from "../context/user/userContext";
import HeaderComponent from "../components/HeaderComponent";
const Add = ({navigation}) => {
    const UserContext = useContext(userContext);

    return (
        <SafeAreaView>
            <HeaderComponent navigation={navigation} title={"Add New Item"} />
            <Text>Add New Product</Text>            
        </SafeAreaView>
    )
}

export default Add ;

