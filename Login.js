import React, { Component } from 'react'
import { Text, View, TextInput,Button, Alert ,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            pwd:'',
            res:{token:''}
        }
    }
    myFetch = (data)=>{
        console.log(JSON.stringify(data));
        fetch(
                'https://www.fastmock.site/mock/3b3c90a4b253f9d2ab6d536c28c80b75/login/second',
                {   method:'POST',
                    body:{username:"123",pwd:"123"},
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            ).then(req=>req.json()).then(data=>{this.setState(
                                                    {res:data},
                                                    ()=>{
                                                        if(this.state.res.data.token == '987654321'){
                                                            Alert.alert('提示','登录成功',[{text:'确定',onPress:()=>{
                                                                AsyncStorage.setItem('user','true',()=>{
                                                                    this.props.parents('true')
                                                            });}}]);
                                                        }else
                                                            Alert.alert('提示','用户名或密码错误',[{text:'确定'}]);})})
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
                    title="登录"
                    onPress={()=>{
                        if(this.state.username.length != 0 && this.state.pwd.length != 0){
                            let data = {username:this.state.username,pwd:this.state.pwd}
                            this.myFetch(data);
                            
                        }else
                            Alert.alert('提示','请填写完整');
                    }}
                />
                <View style={{height:30}}></View>
                <Button
                    title="注册"
                    onPress={()=>{
                        Actions.loginin();
                    }}
                />
            </View>
        )
    }
}
