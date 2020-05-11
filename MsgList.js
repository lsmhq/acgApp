import React, { Component } from 'react'
import { Text, View, ToastAndroid } from 'react-native'

export default class MsgList extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            page:1
        }
    }
    componentDidMount(){
        this.fetchData(this.state.page);
    }
    fetchData = (page)=>{
        fetch(`https://cnodejs.org/api/v1/topics?limit=10&page=${page}`).then(res=>{
            return res.json()
        }).then(data=>{
            this.setState({
                data:data.data
            })
        })
    }
    render() {
        return (
            <View>
                {
                    this.state.data.map(val=>{
                        return(
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginTop:20,marginLeft:20,width:180}}>{val.title.length>15?val.title.slice(0,8)+'...':val.title}</Text>
                                    <Text style={{marginTop:20}}>{val.create_at.slice(0,10)}</Text>
                                    <Text 
                                        style={{marginTop:20,
                                                marginLeft:20,
                                                color:val.reply_count==0?'red':'black'
                                            }}
                                    >
                                        {val.reply_count==0?'待回复':'未回复'}
                                    </Text>
                                </View> 
                                
                            </View>

                        )
                    })
                }
                <View style={{marginTop:50,flexDirection:"row"}}>
                    <View
                        style={{backgroundColor:'red',width:100,borderRadius:20,height:40}}
                        onTouchEnd={()=>{
                            if(this.state.page<=1){
                                ToastAndroid.show('已经是第一页了',ToastAndroid.SHORT)
                            }else{
                                this.setState({
                                    page:this.state.page-1
                                },()=>{
                                    console.log(this.state.page)
                                    this.fetchData(this.state.page)
                                })
                            }
                        }}
                    >
                        <Text style={{width:"100%",height:'100%',textAlign:'center',color:'white',lineHeight:40}}>上一页</Text>
                    </View>
                        <Text style={{width:150,textAlign:"center",lineHeight:40}}>{`第${this.state.page}页`}</Text>
                    <View
                        style={{backgroundColor:'red',width:100,borderRadius:20,height:40}}
                        onTouchEnd = {()=>{
                            this.setState({
                                page:this.state.page+1
                            },()=>{
                                console.log(this.state.page)
                                this.fetchData(this.state.page)
                            })
                            
                        }}
                    >
                        <Text style={{width:"100%",height:'100%',textAlign:'center',color:'white',lineHeight:40}}>下一页</Text>
                    </View> 
                </View>

            </View>
        )
    }
}
