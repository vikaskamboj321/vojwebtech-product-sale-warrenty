import React from 'react'
import { TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { Icon, Text, View } from 'native-base';
import {Styles} from "../styles";
const HeaderComponent = ({navigation, title}) => {
    return (
        <View>
            <StatusBar 
                backgroundColor={Styles.red}  
                barStyle = "light-content"    
                translucent = {false} 
            />
            <ImageBackground 
                source={require('../static/drawerBackground.jpg')}
                style={{
                    marginTop: 0, 
                    paddingTop: 20,
                    paddingBottom: 20, 
                    paddingHorizontal: 20, 
                    flexDirection: 'row', 
                    justifyContent: "space-between", 
                    backgroundColor: Styles.red,
                    resizeMode: "contain"
                }}>  
                <View>
                    <Text style={{color: Styles.white}}>{title ? title : "VOJ WebTech"}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Icon name='menu' style={{color: Styles.white}} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default HeaderComponent
