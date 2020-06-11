import React, { Component } from 'react'
import { Text, View, TextInput,Button, Alert ,AsyncStorage,TouchableOpacity,StyleSheet,Image,ToastAndroid} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Person from './Person'
export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            pwd:'',
            res:{token:''},
            isloading:false,
        }
    }
    fetch_login = (e)=>{
        let data = {};
        data.type = 'login';
        data.username =e.username
        data.password = e.pwd;
        console.log(data.username)
        console.log(data.password)
        if(data.username === '' || data.password === ''){
            ToastAndroid.show("用户名或密码不能为空", ToastAndroid.SHORT);
        }else{
            fetch('https://daitianfang.1459.top/acg',{
            method:'POST',
            mode:'cors',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(req=>{return req.json()}).then(data=>{
            if(data.res == 'success'){
                Actions.home();
                this.setState({
                    isloading:true,
                })
                AsyncStorage.setItem('userid',data.id)
                
                console.log(data);
                console.log(this.state.isloading)
                Actions.home();
               
                
            }else{
                ToastAndroid.show("用户名或者密码错误", ToastAndroid.SHORT); 
            }
        });
        }

    }
    render() {  
        if(this.state.isloading==false){
            return (
                <View style={{backgroundColor:'white',height:'100%'}}>
                    <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:120,color:'white'}}>
                        个人中心
                    </Text>
                          
                    </View>
                    <View>

                        <Image  style={{width:'60%',marginLeft:'20%',marginTop:'10%'}}
                                source={require('./img/Logo-大.png')}
                        />

                        <TextInput  style={styles.search}
                            placeholder='用户名'
                            onChangeText = {(text)=>{
                                this.setState({
                                    username:text
                                })
                            }}
                        />
                    </View>
                    <View>
                        <TextInput   style={styles.search}
                            placeholder='密码'
                            onChangeText = {(text)=>{
                                this.setState({
                                    pwd:text
                                });
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.bt} onPress={()=>{
                            if(this.state.username.length != 0 && this.state.pwd.length != 0){
                                let data = {username:this.state.username,pwd:this.state.pwd}
                                this.fetch_login(data);
                                
                            }else
                                Alert.alert('提示','请填写完整');
                        }}   >
                            <Text style={styles.font}>
                                登录
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} onPress={()=>{
                            Actions.loginin();
                        }}  >
                            <Text style={styles.font}>
                                注册
                            </Text>
                    </TouchableOpacity>
                       
                    
                    
                </View>
            )
        }
        else{
            return(
                <Person />
            )
        }
        
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
    search:{
        marginTop:'10%',
        marginLeft:'20%',
        textAlignVertical:'center',//竖向居中
        backgroundColor:'white',
        width:'60%',
        height:40,
        fontSize:18,
        borderRadius:6,
        borderWidth:1,
    },
    bt:{
        marginLeft:'30%',
        marginTop:'10%',
        width:'40%',
        backgroundColor:'yellow',
        borderWidth:1,
        height:30
    },
    font:{
        textAlign:'center',
        fontSize:20
    }
})
