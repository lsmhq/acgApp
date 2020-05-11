import {ScrollView,View,Image, Text, AsyncStorage, Alert, ToastAndroid} from 'react-native'
import React, { Component } from 'react'
export default class WelcomePage extends Component {
    render(){
        return(
            <>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    style={{backgroundColor:'#EE7942'}}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{width:450,height:200}}><Image width='100%'  source={require('./image/screen1.jpg')}/></View>
                    <View style={{width:450,height:200}}><Image width='100%'  source={require('./image/screen1.jpg')}/></View>
                    <View style={{width:450,height:200}}>
                        <Image width='100%'  source={require('./image/screen1.jpg')}/>
                        <View 
                            style = {{position:'absolute',right:50,top:50,backgroundColor:'#CAE1FF',width:150,height:50,borderRadius:10}}
                            onTouchEnd = {()=>{
                                this.props.parents('no');
                            }}
                            >
                            <Text 
                                style = {{fontSize:20,color:'#ABABAB',width:'100%',height:'100%',textAlign:'center',lineHeight:50}}
                            >
                                    开始体验
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}