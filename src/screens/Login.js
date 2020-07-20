import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Item, Input, Label, Button, Icon, Spinner } from 'native-base';
import userContext from "../context/user/userContext";
const Login = ({navigation}) => {
    const UserContext = useContext(userContext);
    const {loadUser, isAuth, user, loading, signIn, error, clearError} = UserContext;
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    useEffect( () => {
        loadUser();
    }, [] );

    useEffect(() => {
        if(isAuth === true && user !== null){
            navigation.navigate("Home")
        }
    }, [isAuth, user]);

    useEffect(() => {
        if(error !== null){
            ToastAndroid.showWithGravity(
                error,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            clearError();
        }
    }, [error]);
    


    const loginUser = async () => {
        const {email, password} = login;
        
        if(email === '' || password === ''){
            ToastAndroid.showWithGravity(
                "Please Enter Correct Email/Password.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }else{
            signIn(login);
        }    
    }

    return (
    
        <SafeAreaView style={{padding: 20, justifyContent: "center", flex: 1}}>
            <Image source={require("../static/logo_icon_up.png")} style={{alignSelf: "center", width: 200}} resizeMode="contain" />
            <Item floatingLabel style={{marginBottom: 20, borderBottomColor: "#bb1a14"}}>
              <Label><Text>Email</Text></Label>
              <Input 
                keyboardType="email-address" 
                value={login.email} 
                onChangeText={(text) => setLogin({...login, email: text})} 
                />
            </Item>
            <Item floatingLabel style={{marginBottom: 20, borderBottomColor: "#bb1a14"}}>
              <Label><Text>Password</Text></Label>
              <Input 
                secureTextEntry={true} 
                value={login.password} 
                onChangeText={(text) => setLogin({...login, password: text})}
                />
            </Item>
            <Button 
                style={{backgroundColor: '#bb1a14', marginBottom: 20}}
                onPress={loginUser}
                  disabled={loading}    
            >
                    {loading ? (
                        <View style={{flex:1, flexDirection: "row", justifyContent: "space-around"}} >
                            <View style={{marginLeft: 10, marginRight: 20}}><Spinner color="#ffffff" style={{width: 20}} /></View>
                            <View style={{ flex: 1, marginTop: 30}}><Text  style={{color: "#ffffff"}}>Logging In</Text></View>
                        </View>
                    ): (
                        <View style={{flexDirection: "row", }}>
                            <Icon name='lock' style={{color: "#ffffff"}} />
                            <Text style={{color: "#ffffff"}}>Login</Text>
                        </View>
                    )}
            </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}><Text>Don't have an account?</Text></TouchableOpacity>
    </SafeAreaView>
    )
}

export default Login ;

