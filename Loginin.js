import React, { Component } from 'react'
import { Text, View, TextInput,Button, Alert ,AsyncStorage,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            pwd:'',
            res:{token:''},
            
        }
    }
    
    render() {  
        
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
                            Actions.loginin();
                        }}  >
                            <Text style={styles.font}>
                                注册
                            </Text>
                    </TouchableOpacity>
                       
                    
                    
                </View>         )
        
       
        
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
