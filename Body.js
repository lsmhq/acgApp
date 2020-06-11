import React, { Component } from 'react'
import { View, Text, FlatList,  Image,ImageBackground, TextInput, Button,StyleSheet,TouchableOpacity} from 'react-native'
import {Actions } from 'react-native-router-flux'
export default class All extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            search:''
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
        if(this.state.data.length == 0){
            return(
                <View>
                      <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:145,color:'white'}}>
                        商城
                    </Text>
                    <TouchableOpacity onPress={()=>Actions.shopcar()}>
                        <Image source={require('./img/购物车.png')} style={{width:40,height:40,marginLeft:140}} />
                    </TouchableOpacity>         
                </View>
                <View style={{height:'20%',width:'100%'}}>
                    <View 
                        style={{
                            flexDirection:'row',
                            height:'42%',
                            width:'100%',
                            backgroundColor:'white',
                            borderBottomColor:'gray',
                            borderBottomWidth:2}}
                    >
                        <View style={{width:'80%'}}>
                           <TextInput
                                style={{
                                    borderWidth:1,
                                    borderColor:'pink',
                                    marginTop:4,
                                    borderRadius:5,
                                    fontSize:20,
                                    textAlign:'center',
                                    marginLeft:'2%'
                                }}
                                value={this.state.search}
                                placeholder='请输入商品名'
                                onChangeText = {(text)=>{
                                    this.setState({
                                        search:text
                                    });
                                }}
                            /> 
                        </View>
                        <View 
                            style={{
                                width:'15%',
                                marginTop:'2%',
                                marginLeft:'2%',
                                backgroundColor:'#7A67EE',
                                height:'68%',
                                borderRadius:5
                            }}
                            onTouchEnd = {
                                ()=>{
                                    console.log('搜索');
                                    let data = {type:'select',search:this.state.search};
                                    fetch('https://daitianfang.1459.top/api/v1/goods?id=all',
                                            {   method:'POST',
                                                body:JSON.stringify(data),
                                                headers:{'Content-Type': 'application/json'},
                                                mode:'cors'
                                            }).then(
                                                data=>data.json()
                                    ).then(data=>{
                                        this.setState({
                                            data:data,
                                            search:''
                                        },()=>{console.log(this.state.data)})
                                    })
                                }
                            }
                        >
                            <Text
                                style={{
                                    width:'100%',
                                    fontSize:20,
                                    color:'white',
                                    textAlign:'center',
                                    marginTop:'8%'
                                }}
                            >搜索</Text>
                        </View>
                    </View>
                    <Text 
                        style={{
                            width:'100%',
                            fontSize:25,
                            textAlign:'center'
                            }}>没有找到您想要的东西</Text>
                </View>
                </View>
            )
        }else{
            return (
                <View style={{backgroundColor:'white'}}>
                  <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:145,color:'white'}}>
                        商城
                    </Text>
                    <TouchableOpacity onPress={()=>Actions.shopcar()}>
                        <Image source={require('./img/购物车.png')} style={{width:40,height:40,marginLeft:140}} />
                    </TouchableOpacity>         
                </View>
                <View style={{height:'100%'}}>
                    <View 
                        style={{
                            flexDirection:'row',
                            height:'10%',
                            backgroundColor:'white',
                            borderBottomColor:'gray',
                            borderBottomWidth:2}}
                    >
                        <View style={{width:'80%',height:'100%'}}>
                           <TextInput
                                style={{
                                    borderWidth:1,
                                    borderColor:'pink',
                                    marginTop:4,
                                    borderRadius:5,
                                    fontSize:20,
                                    textAlign:'center',
                                    marginLeft:'2%'
                                }}
                                value={this.state.search}
                                placeholder='请输入商品名'
                                onChangeText = {(text)=>{
                                    this.setState({
                                        search:text
                                    });
                                }}
                            /> 
                        </View>
                        <View 
                            style={{
                                width:'15%',
                                marginTop:'2%',
                                marginLeft:'2%',
                                backgroundColor:'#7A67EE',
                                height:'70%',
                                borderRadius:5
                                
                            }}
                            onTouchEnd = {
                                ()=>{
                                    console.log('搜索');
                                    let data = {type:'select',search:this.state.search};
                                    fetch('https://daitianfang.1459.top/api/v1/goods?id=all',
                                            {   method:'POST',
                                                body:JSON.stringify(data),
                                                headers:{'Content-Type': 'application/json'},
                                                mode:'cors'
                                            }).then(
                                                data=>data.json()
                                    ).then(data=>{
                                        this.setState({
                                            data:data,
                                            search:''
                                        },()=>{console.log(this.state.data)})
                                    })
                                }
                            }
                        >
                            <Text
                                style={{
                                    width:'100%',
                                    fontSize:20,
                                    color:'white',
                                    textAlign:'center',
                                    marginTop:'8%'
                                }}
                            >搜索</Text>
                        </View>
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
                                <View style={{height:140,width:'100%'}}></View>
                            )
                        }}
                    >
                    </FlatList>
                </View>
                </View>
            )
        }
       
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
