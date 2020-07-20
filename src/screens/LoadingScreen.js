import React from 'react'
import {View, Image} from 'react-native';
function LoadingScreen() {
    return (
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Image source={require("../static/logo_icon_up.png")} />    
            <Image source={require("../static/loading.gif")} style={{width: 50, marginTop: -80}} resizeMode="contain" />    
        
        </View>
    )
}

export default LoadingScreen;
