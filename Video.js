import React, { Component } from 'react';
import { Text, View,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux' 
export default class Video extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/video?id=all').then(res=>res.json()).then(data=>{this.setState({
            data:data.data
        })})
    }
    render() {
        return (
            <View style={{backgroundColor:'white',height:'100%'}}>
                
                <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:145,color:'white'}}>
                        视频
                    </Text>       
                </View>
                <FlatList
                    numColumns={2}
                    style={{width:'100%'}}
                    data={this.state.data}
                    renderItem={({item})=>{
                        return(
                        <View 
                            style={{width:'40%',height:200,marginLeft:'7%',marginTop:'4%',backgroundColor:'#D1D1D1',borderRadius:5}}
                            onTouchEnd={()=>{
                                Actions.videoPlayer({id:item.id});
                            }}
                        >
                            <Image
                                source={{uri:`${item.cover}`}}
                                style={{width:'95%',height:'80%',marginTop:'2%',marginLeft:'2%'}}
                            />
                            <View style={{width:'100%',height:'20%',marginTop:'3%',backgroundColor:'#DBDBDB'}}>
                                <Text style={{marginTop:'3%',width:'100%',marginLeft:'18%'}}>{item.titel}</Text>
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
