import React, { Component } from 'react';
import { Text, View,FlatList,Image} from 'react-native';
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
        },()=>console.log(data))})
    }
    render() {
        return (
            <View>
                <FlatList
                    numColumns={2}
                    style={{width:'100%'}}
                    data={this.state.data}
                    renderItem={({item})=>{
                        return(
                        <View 
                            style={{width:200,height:200,marginLeft:'4%',marginTop:'4%',backgroundColor:'#D1D1D1',borderRadius:5}}
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
