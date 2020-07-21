import React from 'react';
import {View, Text} from 'react-native';
import {SearchStyle, Styles} from '../styles';
import HeaderComponent from "../components/HeaderComponent";
const Search = ({navigation}) => {
    return (
        <View>
            <HeaderComponent title="Search Product" navigation={navigation} />
        </View>
    )
}

export default Search ;

