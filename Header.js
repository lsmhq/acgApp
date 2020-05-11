import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
export default class Search extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white',height:80}}>
                <View><TextInput placeholder='   请输入商品名称' style={{width:'84%',backgroundColor:'#CCCCCC',fontSize:16,top:20,left:30,borderRadius:5}}/></View>
            </View>
        )
    }
}
