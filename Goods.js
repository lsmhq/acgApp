import React, { Component } from 'react'
import { Text, View, Image, ScrollView, FlatList } from 'react-native'

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
                <View style={{borderColor:'gray',backgroundColor:'#D4D4D4',borderWidth:1,height:'35%'}}>
                    <Image
                        source={{uri:`https://daitianfang.1459.top${this.state.data.path}`}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <FlatList
                    numColumns={1}
                    style={{width:'100%'}}
                    data={[this.state.data]}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <View style={{height:'50%'}}>
                                    <Text 
                                        style={{
                                            fontSize:20,
                                            color:'orange',
                                            marginTop:'2%',
                                            marginLeft:'5%'
                                        }}>价格:￥{item.price}</Text>
                                    <Text
                                        style={{
                                            fontSize:15,
                                            color:'black',
                                            marginTop:'2%',
                                            marginLeft:'5%'
                                        }}
                                    >商品名:{item.name}</Text>
                                    <Text
                                        style={{
                                            fontSize:15,
                                            color:'black',
                                            marginTop:'2%',
                                            marginLeft:'5%'
                                        }}
                                    >生产厂家:{item.source}</Text>
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
                                    >{item.description}</Text>
                                </View>
                            </View>
                        )
                    }}
                    ListFooterComponent = {()=>{
                        return(
                            <View style={{width:'100%',height:200}}>
                                <Text></Text>
                            </View>
                        )
                    }}   
                >
                </FlatList>
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
