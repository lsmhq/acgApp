import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image,FlatList, } from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'
import Articletext from './Articletext'
export default class Articlemsg extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/chapter?type='+this.props.param1).then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data
            })
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
                        文章
                    </Text>
                    <TouchableOpacity onPress={()=>Actions.shopcar()}>
                        <Image source={require('./img/关注.png')} style={{width:40,height:40,marginLeft:140}} />
                    </TouchableOpacity>         
                    </View>
                <FlatList
                    numColumns={1}
                    style={{width:'100%'}}
                    data={this.state.data}
                    renderItem={({item,key})=>{
                        return(
                            <View>
                                    <Image
                                        source={{uri:'https://daitianfang.1459.top/'+item.images}}
                                        style={{width:'100%',height:150,          
                                    }}
                                    />
                                    <View style={{flexDirection:'column',}}>
                                        <Text style={{textAlign:'center',fontSize:25,marginTop:15,width:'90%',marginLeft:'5%'}}>
                                            {item.title}
                                        </Text>
                                        <Text style={{textAlign:'center',fontSize:15,marginTop:20}}>
                                            小编：{item.auther}
                                        </Text>
                                        <Text style={{textAlign:'center',fontSize:15,marginTop:5}}>
                                            小编ID：{item.autherid}
                                        </Text>
                                    </View>
                                   <View>
                                      
                                       <Articletext url={'https://daitianfang.1459.top'+item.context+'.json'}/> 
                                       
                                          
                                    </View> 
                                                                                                                                              
                           
                                
                            </View>
                        )
                    }
                    }
                  
                >
                </FlatList>
            </View>
        )
    }
    fetch_addfouce(){
        let data = {

        };
        data.type='insert';  
        data.id=this.state.cookie_obj.userid;
        data.fouceid=document.getElementById('autherid').innerText
        fetch('https://daitianfang.1459.top/api/v1/fouce',{
            method:'POST',
            mode:'cors',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(req=>{
            return req.text();
        }).then(data=>{
            switch (data) {
                case 'success':{
                    this.setState({
                        msg:'关注成功',
                        btn:'确认',
                        src:'/images/success.png',
                        fun:()=>{
                            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
                        }
                    },()=>{
                        ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
                    })   
                    break;
                }
                case 'error':{
                    this.setState({
                        msg:'关注失败',
                        btn:'确认',
                        src:'/images/failed.png',
                        fun:()=>{
                            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
                        }
                    },()=>{
                        ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
                    })   
                    break;
                }
            }
        })
      }
}
const styles = StyleSheet.create({
    head:{
        
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center', 
        backgroundColor:'#FFB6C1'
    },
})

