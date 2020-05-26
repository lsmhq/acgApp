import React, { Component } from 'react'
import {View,Text,TextInput,Image,StyleSheet,TouchableOpacity, ImageBackground,FlatList} from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'

const goods = [
    {
        title: '1.蒜头王八',
        
    },
    {
        title: '2.LOL转会详情',
        
    },
    {
        title: '3.超级赛亚人',
        
    },
    {
        title: '4.驱魔录',
        
    },
    {
        title: '5.石纪元',
        
    },
    {
        title: '6.蓝色灭火器',
        
    },
    {
        title: '7.斗破苍穹',
        
    },
    {
        title: '8.庆余年',
        
    },
]

export default class Search extends Component {
    constructor(){
        super();
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            showValue:"",
            data:[]
        }
    }
    _onChangeText(inputData){
        this.setState({showValue:inputData});
    }
    
    render() {
        return (
            <ImageBackground style={{ flex: 1,opacity:0.9 }}
          source={require('./img/background3.png')}>
            <View style={{}}>
               <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:'30%',color:'white'}}>
                        搜一搜
                    </Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput placeholder='搜索文章'  onChangeText={this._onChangeText}
                    style={styles.search} />
                    <TouchableOpacity style={{width:45,height:43,backgroundColor:'#FFC125',borderStyle:'solid',
                    borderWidth:0.5,marginTop:'11%',marginLeft:20,borderRadius:5
                }}  onPress={(e)=>this.fetch_select(e)}>
                        <Image source={require('./img/search.png')} style={{width:50,height:50,color:'black'}} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    numColumns={1}
                    style={ styles.list}
                    data={this.state.data}
                    renderItem={({item,key})=>{
                        return(
                            <View>
                                <View  style={{height:150,width:'100%',marginBottom:5,justifyContent:'center',
                                            marginTop:5,padding:0,borderStyle: "solid",borderColor: "#cfcfcf",borderWidth: 1,
                                            
                                }} onTouchEnd={()=>{
                                    Actions.articlemsg(
                                        {param1: item.id}
                                    );
                                }}>
                                    <Text style={{marginLeft:190,paddingTop:20,fontSize:22,fontWeight:'300'}}>{item.auther}</Text>
                                    <Text style={{marginLeft:190,paddingTop:15,fontSize:16,fontWeight:'200'}}>{item.title}</Text>
                                    <Image
                                            source={{uri:'https://daitianfang.1459.top/'+item.images}}
                                            style={{width:130,height:100,  marginLeft:25 ,  marginTop:-85           
                                            }}
                                    />
                                    

                                </View>                               
                                                                                                                                              
                           
                                
                            </View>
                        )
                    }
                    }
                    ListFooterComponent={()=>{
                        if(this.state.data.length>0){
                            return(
                                <View style={{height:300,width:'100%'}}>
                                    <Text
                                        style={{
                                            fontSize:20,
                                            width:'100%',
                                            textAlign:'center',
                                            marginTop:'10%'
                                        }}
                                    >没有更多内容啦</Text>
                                </View>
                            )
                        }else{
                            return(
                            <View style={{height:300,width:'100%'}}>
                                <FlatList 
                                    style={{marginTop:20
                                        
                                    }}
                                    data={goods}
                                    numColumns={2}
                                    renderItem={({item})=>(
                                        <View style={styles.good}>
                                            <Text
                                                style={{marginTop: 10,fontSize:20,color:'red'}}
                                            
                                            >{item.title}</Text>   
                                        </View>
                                    )}
                                ></FlatList>
                            </View>
                            )
                        }
                    }}
                  
                >
                </FlatList>

                
            </View>
            </ImageBackground>
        )
    }
    
    fetch_select = (e)=>{
       
        let data = {
            search:''
        };
        let search=this.state.showValue
        data.search=search
        data.type = 'select';
        fetch('https://daitianfang.1459.top/api/v1/chapter?type=all',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },mode:"cors",
            body: JSON.stringify(data)
        }).then(req=>req.json()).then(data=>{
            this.setState({
                data:data
        
            })
            
        })
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
    search:{
        marginTop:'10%',
        marginLeft:'15%',
        textAlignVertical:'center',//竖向居中
        backgroundColor:'white',
        width:'60%',
        height:40,
        textAlign:'center',
        fontSize:18,
        borderRadius:6,
    },
    good:{
        marginLeft:50,
        marginTop:10,
        width:140
        
    }
})
