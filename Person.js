import React, { Component } from 'react'
import { View,Text,ToastAndroid, Image,StyleSheet ,TouchableOpacity,ImageBackground,FlatList, TextInput, AsyncStorage,DatePickerAndroid} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
export default class Person extends Component {
    constructor() {
        super()
        this._onChangeText = this._onChangeText.bind(this);
        this._onChangeText1 = this._onChangeText1.bind(this);
        this._onChangeText2 = this._onChangeText2.bind(this);
        this._onChangeText3 = this._onChangeText3.bind(this);
        this._onChangeText4 = this._onChangeText4.bind(this);
        this._onChangeText5 = this._onChangeText5.bind(this);
        this.state={
            
            data: [],
            fans:0,
            fouce:0,
            name:'',sex:'',hobby:'',hometown:'',birthday:'',signatrue:'',
            avatarSource: {sign:false,source:{}},
            data2:[],
            userid:'',
        }
        
    }
    _onChangeText(inputData){   
        this.setState({name:inputData});
    }
    _onChangeText1(inputData){
        this.setState({sex:inputData});
    }
    _onChangeText2(inputData){
        this.setState({hobby:inputData});
    }
    _onChangeText3(inputData){
        this.setState({hometown:inputData});
    }
    _onChangeText4(inputData){
        this.setState({birthday:inputData});
    }
    _onChangeText5(inputData){
        this.setState({signatrue:inputData});
    }
    getData = ()=>{
        AsyncStorage.getItem('userid',(err,val)=>{
            this.setState({
             userid:  val 
             
            },()=>{
                console.log(this.state.userid) 
                fetch('https://daitianfang.1459.top/api/v1/person?id='+this.state.userid)
                .then((res)=>res.json())
                .then((res)=>{
                this.setState({data2:res.data});
                console.log(this.state.data2)
                fetch('https://daitianfang.1459.top/api/v1/fans?id=' +this.state.userid).then(req=>req.json()).then(data=>{
                this.setState({
                fans:data.data.count
                
                })
                console.log(this.state.count)
                })
                fetch('https://daitianfang.1459.top/api/v1/fouce?id='+this.state.userid).then(req=>req.json()).then(data=>{
                this.setState({
                fouce:data.data.count
            })
        })
            })
            }
            )
            
            
        })
        
        
    }
    componentDidMount(){
        this.getData();
        
        
    }
    fetch_person(e){
        let data = {};
        data.type='update_font';
        data.name = this.state.name;
        data.sex = this.state.sex;
        data.hobby = this.state.hobby;
        data.hometown = this.state.hometown;
        data.birthday = this.state.birthday;
        data.signatrue =this.state.signatrue;
        data.id=this.state.data2[0].id;
        fetch('https://daitianfang.1459.top/api/v1/person',{
            method:'POST',
            mode:'cors',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(req=>{
            return req.text();
        }).then(data=>{
            switch (data) {
                case 'success':{
                    ToastAndroid.show("修改成功", ToastAndroid.SHORT);
                    this.componentDidMount();
                    break;
                }
                case 'error':{
                    ToastAndroid.show("服务器出了差错", ToastAndroid.SHORT);
                    break;
                }
            }
        })
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
            <ImageBackground style={{ flex: 1,opacity:0.9 }}
          source={require('./img/background3.png')}>
            <View>
                <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:120,color:'white'}}>
                        个人中心
                    </Text>
                          
                    </View>
                <FlatList 
                    style={{marginTop:20
                        
                    }}
                    data={this.state.data2}
                    numColumns={1}
                    renderItem={({item})=>(
                        
                        <View style={{alignItems:'center',flexDirection:'column'}}>
                            <Image
                            source={{uri:"https://daitianfang.1459.top/images/avatar/"+item.avatarid}}
                            style={{width:100,height:100, borderRadius:65      
                            }}
                            />
                            <Text style={{fontWeight:'bold',fontSize:24,color:'rgb(255,64,129)',marginTop:15}}>{item.name}</Text>
                            <Text style={{fontWeight:'500',fontSize:18,color:'rgb(255,64,129)',marginTop:15}}>{item.signatrue}</Text>
                            <View style={{width:'100%',flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-evenly'}}>
                                <Text style={{width:50 ,fontSize:22,fontWeight:'bold',color:'rgb(255,64,129)'}}>粉丝    &nbsp; &nbsp;{this.state.fans}</Text>
                                <Text  style={{width:50 ,fontSize:22,fontWeight:'bold',color:'rgb(255,64,129)'}}>关注    &nbsp; &nbsp;{this.state.fouce}</Text>
                                <Text  style={{width:50 ,fontSize:22,fontWeight:'bold',color:'rgb(255,64,129)'}}>等级  &nbsp;{item.level}</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    昵称： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}} 
                                    onChangeText={this._onChangeText}  defaultValue={item.name} />
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    性别： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}}onChangeText={this._onChangeText1} defaultValue={item.sex} />
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    爱好： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}} onChangeText={this._onChangeText2}defaultValue={item.hobby} />
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    家乡： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}}onChangeText={this._onChangeText3} defaultValue={item.hometown} />
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    生日： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}}onChangeText={this._onChangeText4} defaultValue={item.birthday} />
                            </View>
                            <View style={{flexDirection:'row',marginTop:14,marginLeft:-40}}>
                                <Text style={{marginTop:10,fontSize:18}}>
                                    签名： 
                                </Text>
                                <TextInput style={{borderBottomWidth:0.7,borderBottomColor:'red',fontSize:16,
                                    
                                    width:230,height:40,textAlign:'center'}}onChangeText={this._onChangeText5} defaultValue={item.signatrue} />
                            </View>
                            <TouchableOpacity onPress={(e)=>this.fetch_person(e)} >
                                <Text  style={{width:80,height:35,fontSize:22,textAlign:'center',borderWidth:1,
                                    justifyContent:'center', marginTop:20,
                                    backgroundColor:'yellow'}}>提交</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                ></FlatList> 
               
            </View>
            </ImageBackground>
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
