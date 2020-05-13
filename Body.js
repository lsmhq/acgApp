import React, { Component } from 'react'
import { View, Text, FlatList,  ImageBackground } from 'react-native'
export default class All extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all').then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                {
                    this.state.data.map((val,idx)=>{
                        return(
                            <View style={{width:'40%',marginLeft:'10%',backgroundColor:'#F2F2F2'}}>
                                <Text>{val.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
