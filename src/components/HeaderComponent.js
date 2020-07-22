import React from 'react'
import { TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { Icon, Text, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {Styles} from "../styles";
const HeaderComponent = ({navigation, title, backButton }) => {
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
                {backButton === true ? (
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-round-back"color={Styles.white} size={35} />
                        </TouchableOpacity>
                    </View>
                ) : null}                
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
