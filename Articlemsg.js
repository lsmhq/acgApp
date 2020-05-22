import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image,FlatList, Dimensions} from 'react-native'
export default class Articlemsg extends Component {
    render() {
        return (
            <View>
                <Text>
                {this.props.param1 }
                </Text>
            </View>
        )
    }
}
