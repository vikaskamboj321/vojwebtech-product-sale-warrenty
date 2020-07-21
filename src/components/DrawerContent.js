import React, {useContext} from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Container, Icon, Card, CardItem, Text } from 'native-base';
import UserContext from "../context/user/userContext";
import {Styles} from "../styles";
const DrawerContent = ({navigation}) => {
    const userContext = useContext(UserContext);
    const {signOut, user} = userContext;
    const bgImage = require('../static/drawerBackground.jpg');
    return (
        <Container style={{flex: 1, justifyContent: "space-between"}}>
            <View style={styles.drawerHeader}>
                <View
                    style={{
                        height: 200
                    }}
                >
                    <ImageBackground source={bgImage} 
                        style={{
                            resizeMode: "cover", 
                            flex: 1, 
                            justifyContent: "center", 
                            padding: 20,
                        }}>
                        <View
                            style={{
                                backgroundColor: Styles.white,
                                borderRadius: 100,
                                width: 70,
                                height: 70,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Image source={require("../static/favicon.png")}
                                style={{
                                    resizeMode: "contain"
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                color: Styles.white,
                                marginTop: 10,
                                fontSize: 20
                            }}
                        >{user !== null ? user.email : null}</Text>
                    </ImageBackground>
                </View>
                <ScrollView style={{padding: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
                        <Card>
                            <CardItem>
                                <Text>Home</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>                
                    <TouchableOpacity onPress={() => navigation.navigate("About")}>
                        <Card>
                            <CardItem>
                                <Text>About</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>                
                    <TouchableOpacity onPress={() => navigation.navigate("Support")}>
                        <Card>
                            <CardItem>
                                <Text>Contact</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>                
                </ScrollView>
            </View>
            <TouchableOpacity style={{backgroundColor: Styles.red}} onPress={signOut}>
                <ImageBackground source={bgImage} style={{resizeMode: "cover", paddingHorizontal: 30, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between"}} >
                    <Icon name="log-out"  style={{ color: Styles.white}} />    
                    <Text style={{ color: Styles.white, fontSize: 20 }}>
                        Logout
                    </Text>
                </ImageBackground>

            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        flex: 1
    }
})

export default DrawerContent
