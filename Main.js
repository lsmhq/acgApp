import React, { Component } from 'react'
import { View, Text} from 'react-native'
export default class Main extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <View>
                <Text style={{backgroundColor:'white',width:'100%',height:'30%',fontSize:20,lineHeight:50}}>第一个页面</Text>
            </View>
        )
    }
}
