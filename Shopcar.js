import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image,FlatList, ScrollView, } from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'
import Mycood from './Mycood'
export default class Shopcar extends Component {
    constructor(){
        super();
        this.state = {
            data: [],//所有产品
            data2:[],//用户产品
            msg:'',
            btn:'',
            src:'',
            fun:()=>{

            },
            count:'',
            
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })             
    }
    componentWillMount(){
        fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id=4qG1yUvxWG')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data2:res.data});
        })
    }
    render() {
        return (
            <View>
               <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:145,color:'white'}}>
                        购物车
                    </Text>
                            
                </View>
                <ScrollView>
                <Mycood/>
                <View style={{width:'100%',height:25,backgroundColor:'white'}}>
                    <Text style={{textAlign:'center',fontSize:20,color:'black'}}>推荐商品</Text>
                </View>
                <FlatList
                        numColumns={2}
                        style={{width:'100%',backgroundColor:'white'}}
                        data={this.state.data}
                        renderItem={({item})=>{
                            return(
                            <View 
                                style={{width:'44%',height:200,marginLeft:'4%',marginTop:'4%',backgroundColor:'aliceblue',borderRadius:5,borderWidth:1}}
                                onTouchEnd={()=>{
                                    Actions.goods({id:item.id});
                                }}
                            >
                                <Image
                                    source={{uri:`https://daitianfang.1459.top${item.path}`}}
                                    style={{width:'95%',height:'60%',marginTop:'2%',marginLeft:'2%',alignItems:"center"}}
                                />
                                <View style={{width:'100%',height:'35%',marginTop:'3%',}}>
                                    <Text style={{marginLeft:'15%',marginTop:'3%'}}>{item.name}</Text>
                                    <Text style={{marginLeft:'15%',marginTop:'7%',color:'#EE7600'}}>售价:{item.price}</Text>
                                </View>
                            </View>
                            )
                        }
                        }
                        ListFooterComponent={()=>{
                            return(
                                <View style={{height:150,width:'100%'}}></View>
                            )
                        }}
                    >
                    </FlatList>
                    </ScrollView>
                    <View style={{width:'100%',height:100,backgroundColor:'white',
                    position:'absolute',marginTop:'160%',zIndex:1}}>
                    <Text style={{fontSize:26,color:'orange',marginTop:8,marginLeft:20}}>总件：{this.state.data2.length}</Text>
                    <Text     style={{fontSize:26,width:'20%',height:60,backgroundColor:'red',textAlign:'center',
                                marginTop:-43,marginLeft:'70%',textAlignVertical:'center'
                }}>结算</Text>
                </View>
            </View>
           
        )
    }
}
const styles = StyleSheet.create({
    head:{
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center', 
        backgroundColor:'#FFB6C1'
    },
})
