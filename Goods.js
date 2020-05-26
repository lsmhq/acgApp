import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

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
            
            <View style={{height:'100%'}}>
                {/* <ScrollView 
                > */}
                <View style={{borderColor:'gray',backgroundColor:'#D4D4D4',borderWidth:1,height:'45%'}}>
                    <Image
                        source={{uri:`https://daitianfang.1459.top${this.state.data.path}`}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={{height:'20%'}}>
                    <Text 
                        style={{
                            fontSize:25,
                            color:'orange',
                            marginTop:'2%',
                            marginLeft:'5%'
                        }}>价格:￥{this.state.data.price}</Text>
                    <Text
                        style={{
                            fontSize:25,
                            color:'black',
                            marginTop:'2%',
                            marginLeft:'5%'
                        }}
                    >商品名:{this.state.data.name}</Text>
                    <Text
                        style={{
                            fontSize:25,
                            color:'black',
                            marginTop:'2%',
                            marginLeft:'5%'
                        }}
                    >生产厂家:{this.state.data.source}</Text>
                </View>
                <View style={{
                    height:'0.1%',
                    borderColor:'gray',
                    borderRadius:5,
                    borderWidth:1,
                    backgroundColor:'gray',
                    width:'90%',
                    marginLeft:'5%'
                }}></View>
                <View style={{height:'25%'}}>
                    <Text
                        style={{width:'100%',textAlign:'center',fontSize:20}}
                    >详细信息</Text>
                    <Text
                        style={{
                            lineHeight:25,
                            width:'90%',
                            marginLeft:'5%'
                        }}
                    >{this.state.data.description}</Text>
                </View>
                <View style={{
                    height:'10%',
                    width:'100%',
                    position:'relative',
                    flexDirection:'row'
                }}>
                    <View 
                        style={{
                            width:'50%',
                            backgroundColor:'orange',
                            height:'100%'
                        }}>
                        <Text
                            style={{width:'100%',textAlign:'center',color:'white',fontSize:20,marginTop:'10%'}}
                        >加入购物车</Text></View>
                    <View 
                        style={{
                            width:'50%',
                            backgroundColor:'red',
                            height:'100%'
                        }}>
                        <Text
                            style={{width:'100%',textAlign:'center',color:'white',fontSize:20,marginTop:'10%'}}
                        >立即购买</Text></View>
                </View>
                {/* </ScrollView> */}
            </View>
            
        )
    }
}
