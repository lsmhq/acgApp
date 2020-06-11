import React, { Component } from 'react'
import { Text, View, Image, ScrollView ,StyleSheet,TouchableOpacity} from 'react-native'
import { Router, Scene ,Tabs, Actions} from 'react-native-router-flux';

export default class Goods extends Component {
    constructor(){
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            data: [],
            timebig:date,         
            time:new Date(), 
            msg:'',
            btn:'',
            src:'',
            fun:()=>{

            }
        }
    }
    fetch_addgood(e){
        let data = {

        };
        var timesign=this.state.timebig+this.state.time.toLocaleTimeString();
        data.type='insert';  
        data.userid='4qG1yUvxWG';
        data.goodsid=this.props.id;       
        data.timetemp=timesign;
        data.goodsname=this.state.data.goodsname;
        console.log(data.goodsid)
        console.log(data.goodsname)
        console.log(data.timetemp)
        console.log(data.userid)
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
                    this.setState({
                        msg:'添加成功',
                        btn:'确认',
                        src:'/images/success.png',
                        fun:()=>{
                            
                    },
                        
                    })   
                    this.componentDidMount();
                    break;
                }
                case 'error':{
                    this.setState({
                        msg:'添加失败',
                        btn:'确认',
                        src:'/images/failed.png',
                        fun:()=>{
                            
                        }
                    },()=>{
                       
                    })   
                    break;
                }
            }
        })
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
        // console.log(this.state);
        return (
                
            <View style={{height:'100%'}}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:145,color:'white'}}>
                        商品详情
                    </Text>       
                </View>
                {/* <ScrollView 
                > */}
                <View style={{borderColor:'gray',backgroundColor:'#D4D4D4',borderWidth:1,height:'39%'}}>
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
                    <TouchableOpacity     onPress={(e)=>{
                                    this.fetch_addgood(e)
                                }}
                        style={{
                            width:'50%',
                            backgroundColor:'orange',
                            height:'100%'
                        }}>
                        <Text
                            style={{width:'100%',textAlign:'center',color:'white',fontSize:20,marginTop:'10%'}}
                        >加入购物车</Text></TouchableOpacity>
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
