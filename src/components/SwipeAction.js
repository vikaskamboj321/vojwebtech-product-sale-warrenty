import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {Styles} from "../styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
const SwipeAction = ({navigation, item}) => {

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: Styles.lightred,
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
            }}
        >
            <TouchableOpacity 
                onPress={() => navigation.navigate("Product", {item: item})}
                style={{
                    width: 75,
                    backgroundColor: Styles.red,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Ionicons name="ios-eye" size={30} color={Styles.white} />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => alert(item)}
                style={{
                    width: 75,
                    backgroundColor: Styles.red,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Ionicons name="ios-trash" size={30} color={Styles.white} />
            </TouchableOpacity>
        </View>
    )
}

export default SwipeAction

const styles = StyleSheet.create({})
