import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Goods extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        fetch(`https://daitianfang.1459.top/api/v1/goods?id=${this.props.id}`).then(
            (data)=>data.json()
        ).then(data=>{
            this.setState({
                data:data.data[0]
            })
        });
    }
    render() {
        console.log(this.state);
        return (
            <View style={{overflow:'scroll'}}>
                <View style={{borderColor:'gray',backgroundColor:'#D4D4D4',borderWidth:1,height:'70%'}}>
                    <Image
                        source={{uri:`https://daitianfang.1459.top${this.state.data.path}`}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={{height:'30%'}}>
                    <Text>价格:￥{this.state.data.price}</Text>
                    <Text>商品名:{this.state.data.name}</Text>
                    <Text>生产厂家:{this.state.data.source}</Text>
                </View>
                <View>
                    <Text>详细信息</Text>
                    <Text>{this.state.data.description}</Text>
                </View>
            </View>
        )
    }
}
