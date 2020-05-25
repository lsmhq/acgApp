import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class videoPlayer extends Component {
    constructor(){
        super()
        this.state = {
            id:'',
            data:[]
        }
    }
    render() {
        return (
            <View>
                <Text> id:{this.props.id} </Text>
            </View>
        )
    }
}
