import React, { Component } from 'react'
import { View, Text, FlatList,  Image,ImageBackground, TextInput, Button} from 'react-native'
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
            )
        }else{
            return (
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
                        style={{width:'100%'}}
                        data={this.state.data}
                        renderItem={({item})=>{
                            return(
                            <View 
                                style={{width:'44%',height:200,marginLeft:'4%',marginTop:'4%',backgroundColor:'#D1D1D1',borderRadius:5}}
                                onTouchEnd={()=>{
                                    Actions.goods({id:item.id});
                                }}
                            >
                                <Image
                                    source={{uri:`https://daitianfang.1459.top${item.path}`}}
                                    style={{width:'95%',height:'60%',marginTop:'2%',marginLeft:'2%',alignItems:"center"}}
                                />
                                <View style={{width:'100%',height:'35%',marginTop:'3%',backgroundColor:'#DBDBDB'}}>
                                    <Text style={{marginLeft:'15%',marginTop:'3%'}}>{item.name}</Text>
                                    <Text style={{marginLeft:'15%',marginTop:'7%',color:'#EE7600'}}>售价:{item.price}</Text>
                                </View>
                            </View>
                            )
                        }
                        }
                        ListFooterComponent={()=>{
                            return(
                                <View style={{height:100,width:'100%'}}></View>
                            )
                        }}
                    >
                    </FlatList>
                </View>
            )
        }
       
    }
}
