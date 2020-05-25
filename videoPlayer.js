import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class videoPlayer extends Component {
    constructor(){

    }
    render() {
        return (
            <View>
                <Text> {this.props.id} </Text>
            </View>
        )
    }
}
