import React, {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from "native-base";
import {AddStyle, Styles} from '../styles';
import userContext from "../context/user/userContext";
const Add = ({navigation}) => {
    const UserContext = useContext(userContext);
    const {signOut} = UserContext;

    return (
        <SafeAreaView style={AddStyle.container}>
            <Text style={Styles.heading}>Add New Product</Text>
            <View>
                <Text>Hi</Text>
            </View>
            <Button onPress={signOut}>
                <Text>Logout</Text>
            </Button>
        </SafeAreaView>
    )
}

export default Add ;

