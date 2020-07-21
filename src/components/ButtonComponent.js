import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {Button, Spinner} from "native-base";
import { Styles} from "../styles";
const ButtonComponent = ({onPress, title, icon, loading, loadingTitle}) => {
    if(loading === true){
        return (
            <Button disabled={true} style={styles.buttonDisabled}>
                <Text style={styles.buttonText}>{loadingTitle}</Text>
                <Spinner style={styles.buttonIcon} color={Styles.white}/>
            </Button>
        )
    }
    return (
        <Button onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
            <Ionicons name={icon} style={styles.buttonIcon} />
        </Button>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    buttonDisabled: {
        backgroundColor: Styles.reddisabled,
        padding: 20,
        height: 50,
        marginTop: 15,
        marginBottom: 15
    },
    button: {
        backgroundColor: Styles.red,
        padding: 20,
        height: 50,
        marginTop: 15,
        marginBottom: 15
    },
    buttonText: {
        fontSize: 20,
        color: Styles.white
    },
    buttonIcon: {
        color: "#ffffff",
        fontSize: 35
    }
})
