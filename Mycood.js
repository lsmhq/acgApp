import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image,FlatList, } from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'
export default class Mycood extends Component {
    constructor(){
        super();
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state ={
            data:[],
            data2:[],
            timebig:date,         
            time:new Date(),
        }
    }

    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id=4qG1yUvxWG')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data},()=>{
                var arr=[];
                for(var i=0;i<this.state.data.length;i++){
                    fetch('https://daitianfang.1459.top/api/v1/goods?id='+this.state.data[i].goodsid)
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res.data[0]);
                        arr.push(res.data[0]);
                        console.log(arr);
                    }).then(()=>{
                        this.setState({
                            data2:arr
                        },()=>{
                            console.log(this.state.data2);
                        })
                    })
                }
                
            });

        })
       
        
        
        }
        render() {
            if(this.state.data.length === 0){
                return (
                    <View style={{textAlign:'center',}}>
                        <View style={{marginTop:'10%'}}>
                       <Text style={{textAlign:'center',fontSize:26}} >
                           购物车空空如也，真的不想买点什么吗？
                       </Text>
                       </View>
                    </View>
                )
            }else{
                return (
                    <View style={{backgroundColor:"white" ,}}>
                        <FlatList
                        numColumns={1}
                        style={{width:'100%'}}
                        data={this.state.data2}
                        renderItem={({item})=>{
                            return(
                                <View 
                                style={{width:'90%',height:150,marginLeft:'5%',marginTop:'1%',backgroundColor:'aliceblue',borderRadius:5,borderWidth:1}}
                                onTouchEnd={()=>{
                                    Actions.goods({id:item.id});
                                }}
                            >
                                <TouchableOpacity style={{width:'6%',height:'15%',backgroundColor:'red'
                                                        ,marginLeft:'93.8%' ,zIndex:1   
                            }} onPress={(id)=>{
                                    this.fetch_del(item.id)
                                }}>
                                <Text style={{fontSize:20}}>
                                     &nbsp; X
                                </Text>
                                </TouchableOpacity>
                                 <Text style={{marginLeft:'45%',marginTop:'5%',fontSize:16}}>
                                    商品名称：{item.name}
                                </Text>
                                <Text style={{marginLeft:'45%',marginTop:'5%',fontSize:16,color:'orange'}}>
                                    价格：{item.price}
                                </Text>
                                <Image
                                    source={{uri:`https://daitianfang.1459.top${item.path}`}}
                                    style={{width:'25%',height:'70%',marginTop:'-22%',marginLeft:'6%',}}
                                />
                               

                                
                            </View>
                            )
                        }
                        }
                        ListFooterComponent={()=>{
                            return(
                                <View style={{height:10,width:'100%'}}></View>
                            )
                        }}
                    >
                    </FlatList>
                    </View>
                )
            }
    
        }
        fetch_del(id){
            let data = {};
            var timesign=this.state.timebig+this.state.time.toLocaleTimeString();
            data.type='del';
            data.userid='4qG1yUvxWG';
            data.goodsid=id;
            data.timetemp=timesign;
            console.log(data.goodsid)
            console.log(data.userid)
            console.log(data.timetemp)
            fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id=4qG1yUvxWG',{
                method:'POST',
                mode:'cors',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            }).then(req=>{
                return req.text();
            }).then(data=>{
                switch (data) {
                    case 'success':{         
                        this.componentDidMount();                
                        break;
                    }
                    case 'error':{                  
                        break;
                    }
                }
            })
          }
    
        
    }
    
