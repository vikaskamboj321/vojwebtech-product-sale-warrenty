import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from "../components/HeaderComponent";
const List = ({navigation}) => {
    return (
        <View>
            <HeaderComponent title="All Products" navigation={navigation} />
        </View>
    )
}

export default List ;

