import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Styles} from "../styles";
import Moment from "moment";
const SwipeItem = ({item}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Styles.white,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: Styles.reddisabled,                
                marginBottom: 10,
                elevation: 5
            }}
        >
            <View>
                <Text
                    style={{
                        textTransform: "capitalize",
                        fontSize: 16,
                        fontWeight: "800"
                    }}
                >Customer: {item.customerName}</Text>
                <Text>Product: {item.product}</Text>
                <Text>Purchased: {Moment(item.purchaseDate.t).format('Do MMM YYYY')}</Text>
            </View>
            <View>
                <Text>Warrenty</Text>
                <Text>{item.warrenty}</Text>
            </View>
        </View>
    )
}

export default SwipeItem

const styles = StyleSheet.create({})
