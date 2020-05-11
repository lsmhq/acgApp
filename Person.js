import React, { Component } from 'react'
import { View,Text, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
export default class Person extends Component {
    constructor() {
        super()
        this.state={
            list:[
                {title:'我的个人中心',
                data:[
                    {title:'账户管理',push:()=>{Actions.list()}},
                    {title:'收货地址',push:()=>{Actions.list()}},
                    {title:'我的信息',push:()=>{Actions.list()}},
                    {title:'我的订单',push:()=>{Actions.list()}},
                    {title:'我的二维码',push:()=>{Actions.list()}},
                    {title:'我的积分',push:()=>{Actions.list()}},
                    {title:'我的收藏',push:()=>{Actions.list()}}]},
                {title:'E族活动',
                data:[
                    {title:'居家维修保养',push:()=>{Actions.list()}},
                    {title:'出行接送',push:()=>{Actions.list()}},
                    {title:'我的受赠人',push:()=>{Actions.list()}},
                    {title:'我的住宿优惠',push:()=>{Actions.list()}},
                    {title:'我的活动',push:()=>{Actions.list()}},
                    {title:'我的发布',push:()=>{Actions.list()}}]}
            ],
            avatarSource: {sign:false,source:{}}
        }
    }
        onClickChoosePicture = () => {
            const options = {
                title: '',
                cancelButtonTitle: '取消',
                takePhotoButtonTitle: '拍照',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                }
            };
    
            ImagePicker.showImagePicker(options, (response) => {
                console.log('Response = ', response);
    
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = {uri: response.uri};
                    this.setState({
                        avatarSource:{sign:true,source:source} ,
                    });
                    console.warn(this.state.avatarSource);
                }
            });
        }
    
    render() {
        return (
            <View>
                <View 
                    style={{
                        width:'100%',
                        height:160,
                        backgroundColor:'red'
                    }}>
                    <View 
                        style={{left:'40%'}} 
                        onTouchEnd = {this.onClickChoosePicture}
                    >
                        <Image 
                            source={this.state.avatarSource.sign?this.state.avatarSource.source:require('./image/person.png')}
                            style={{
                                borderRadius:80,
                                borderWidth:2,
                                borderColor:'white',
                                left:10,
                                top:30,
                                height:80,
                                width:80
                                }}
                        />
                        <Text 
                            style={{
                                color:'white',
                                top:30,
                                left:-20,
                                fontSize:20
                                }}
                        >
                            BINNU DHILLON
                        </Text>
                    </View>
                </View>

                <View>
                <View 
                    style={{
                        width:'100%',
                        backgroundColor:'white'
                }}>
                    {
                        this.state.list.map((val,index)=>{
                            return(
                            <View 
                                style={{
                                    width:'100%',
                                    height:260,
                                    top:70*index
                            }}>
                                <Text 
                                    style={{
                                        left:20
                                }}>
                                    {val.title}
                                </Text>
                                <View 
                                    style={{
                                        flexDirection:"row",
                                        flexWrap:"wrap",
                                        top:10
                                }}>
                                {
                                    val.data.map(val=>{
                                        return(
                                            <View 
                                                style={{
                                                    width:'33.3%',
                                                    height:100,
                                                    backgroundColor:'white'
                                                }} 
                                                onTouchEnd = {()=>{
                                                    val.push()
                                                }}
                                            >
                                                <View 
                                                    style={{
                                                        backgroundColor:'#f99c9c',
                                                        width:'80%',
                                                        height:"80%",
                                                        left:20,
                                                        borderRadius:5
                                                    }}>
                                                    <Image 
                                                        style={{
                                                            width:'50%',
                                                            height:'80%',
                                                            top:0,
                                                            left:30,
                                                            borderRadius:50}} 
                                                        source={require('./image/person.png')}/>
                                                    <Text 
                                                        style={{
                                                            width:'100%',
                                                            height:'20%',
                                                            textAlignVertical:'bottom',
                                                            textAlign:"center"}}>
                                                            {val.title}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }  
                                </View>
                            </View>)
                        })
                    }
                    </View>
                </View>
            </View>
        )
    }
}
