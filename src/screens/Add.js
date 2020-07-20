import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from "native-base";
import {AddStyle, Styles} from '../styles';
const Add = ({navigation}) => {

    const logout = () => {
        
    }

    return (
        <SafeAreaView style={AddStyle.container}>
            <Text style={Styles.heading}>Add New Product</Text>
            <View>
                <Text>Hi</Text>
            </View>
            <Button onPress={logout}>
                <Text>Logout</Text>
            </Button>
        </SafeAreaView>
    )
}

export default Add ;

