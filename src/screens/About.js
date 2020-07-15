import React from 'react';
import {View, Text, Image} from 'react-native';
import {AboutStyle, Styles} from '../styles';
const About = () => {
    return (
        <View style={AboutStyle.container}>
        <Image source={require('../static/logo_icon_up.png')} />
            <Text style={AboutStyle.heading}>VOJ Product Sale Management</Text>
            <Text style={AboutStyle.text}>This Application is build by VOJ WebTech. You can use it free of cost.</Text>
        </View>
    )
}

export default About ;

