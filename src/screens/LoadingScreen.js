import React from 'react'
import {View, ActivityIndicator} from 'react-native';
function LoadingScreen() {
    return (
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <ActivityIndicator size="large" color="#bb1a14" />
        </View>
    )
}

export default LoadingScreen;
