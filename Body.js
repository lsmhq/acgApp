import React, { Component } from 'react'
import { View, Text, FlatList,  Image,ImageBackground, TextInput, Button} from 'react-native'
import {Actions } from 'react-native-router-flux'
export default class All extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
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
        return (
            <View style={{width:'100%'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'80%'}}>
                       <TextInput 
                            style={{borderWidth:1,borderColor:'pink'}}
                            placeholder='请输入商品名'
                        /> 
                    </View>
                    <View style={{width:'20%',marginTop:'2%'}}>
                        <Button title="搜索"/>
                    </View>
                </View>
                <FlatList
                    numColumns={2}
                    style={{width:'100%'}}
                    data={this.state.data}
                    renderItem={({item})=>{
                        
                        return(
                        <View 
                            style={{width:200,height:200,marginLeft:'4%',marginTop:'4%',backgroundColor:'#D1D1D1',borderRadius:5}}
                            onTouchEnd={()=>{
                                Actions.goods();
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
