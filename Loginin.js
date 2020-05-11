import React, { Component } from 'react'
import { View ,TextInput,Button, Alert} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Loginin extends Component {
    constructor(){
        super();
        this.state = {
            username:"",
            data:{}
        }
    }
    myfetch = ()=>{
        let data = JSON.stringify({username:this.state.username});
        fetch('https://www.fastmock.site/mock/41b78e2130d9b361d7033f4f0d50a3d1/daifang/loginin',{
            method:"POST",
            body:data
        }).then(res=>res.json()).then(data=>{
            console.log(this.state.username);
            this.setState({
                data:data.data
            },()=>{
                console.log(this.state.data);
                Alert.alert('提示',this.state.data.data.msg);
            })
        })
    }
    render() {
        return (
            <View>
                <View>
                    <TextInput 
                        placeholder='用户名'
                        onChangeText = {(text)=>{
                            this.setState({
                                username:text
                            })
                        }}
                    />
                </View>
                <View>
                    <TextInput 
                        placeholder='密码'
                        onChangeText = {(text)=>{
                            this.setState({
                                pwd:text
                            });
                        }}
                    />
                </View>
                <Button 
                    title="注册"
                    onPress={()=>{
                        this.myfetch();
                    }}
                />
            </View>
        )
    }
}
