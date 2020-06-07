import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,
    ToastAndroid,
    TouchableOpacity,Image,FlatList, Dimensions,DrawerLayoutAndroid, ActionSheetIOS, ImageBackground} from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window').width
export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            type:'all',
            Swiper:0,
        }
    }
    componentDidMount(e){
        fetch('https://daitianfang.1459.top/api/v1/chapter?type='+this.state.type).then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    handleDrawerOpen=()=> { 

      } 
    
      handleDrawerClose=()=>{
        
      }
    
      open=()=>{
        this.drawer.openDrawer();
      }
    
      close=()=>{
        this.drawer.closeDrawer();
      }
   
    render() {
        var navigationView = ( 
            <ImageBackground style={{ flex: 1,opacity:0.9 }}
          source={require('./img/background.png')}>
            <View style={{flex: 1,}}>  
                <Image                                        
                                        source={require('./image/icon0.png')}
                                        style={{width:100 ,height:100,marginLeft:100,marginTop:20}}                                     
                                    /> 
                <View style={{flexDirection:'column',alignItems:'center',marginTop:5}}>
                    <Text style={styles.txtleft1}>昵称</Text>
                    <Text style={styles.txtleft1}>签名</Text>
                    <Text style={styles.txtleft} onPress={this.close}>首页</Text>
                    <Text style={styles.txtleft} onPress={()=>Actions.card()}>个人中心</Text>
                    <Text style={styles.txtleft} onPress={()=>Actions.msg()}>商城</Text>
                    <Text style={styles.txtleft}>关注</Text>
                    <Text style={styles.txtleft}>粉丝</Text>
                    <Text style={styles.txtleft}>关于我们</Text> 
                    <Text style={styles.txtleft}>设置</Text> 
                </View> 
                {/* <TouchableOpacity >
                    <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                </TouchableOpacity>  */}
            </View>  
            </ImageBackground> 
            );  
       
        return (
            <DrawerLayoutAndroid  
            ref={(drawer) => { this.drawer = drawer; }}
            drawerWidth={300} 
            onDrawerClose={this.handleDrawerClose}
            onDrawerOpen={this.handleDrawerOpen} 
            drawerPosition={DrawerLayoutAndroid.positions.Left}  
            renderNavigationView={() =>navigationView}>
            <View style={{backgroundColor:'white',}}>
                 <View style={styles.head}>
                 <TouchableOpacity  onPress={this.open} >
                    <Image                                        
                        source={require('./image/icon3.png')}
                        style={{width:50 ,height:50,marginLeft:20,borderRadius:50}}                                     
                    />                                                   
                </TouchableOpacity>
                <View><Text  style={styles.search} onPress={()=>Actions.search()}>搜一搜</Text></View>
                <Image
                    source={require('./img/search.png')}
                    style={{width:50 ,height:50,marginRight:20}}
                />
                  
            </View>
                
            <View style={{
					flexDirection:'row',
					justifyContent:"space-evenly",
                    flexWrap:'wrap',
                    height:40		                   
				}}>
                    <TouchableOpacity  style={styles.box2}  onPress={()=>{
                        this.setState({
                            type:'all',
                            Swiper:0
                        })
                        this.componentDidMount();
                    }}>
                        <Text style={styles.txt}>首页</Text>
                    </TouchableOpacity>                   
					<TouchableOpacity  style={styles.box2}  onPress={()=>{
                        this.setState({
                            type:'animation',
                            Swiper:1
                        })
                        this.componentDidMount();
                        
                    }}>
                        <Text style={styles.txt}>动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.box2} onPress={()=>{
                        this.setState({
                            type:'comic',
                            Swiper:1
                        })
                        this.componentDidMount()
                    }}>
                        <Text style={styles.txt}>卡通</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.box2} onPress={()=>{
                        this.setState({
                            type:'game',
                            Swiper:1
                        })
                        this.componentDidMount()
                    }}>
                        <Text style={styles.txt}>游戏</Text>
                    </TouchableOpacity>
				</View>
                <View style={this.state.Swiper==0 && styles.container}>
                        <Swiper style={styles.wrapper} 
                            autoplay={true}
                        >
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/lun1.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/lun2.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/lun3.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/lun4.jpg')} />
                        </View>
                        </Swiper>
                    </View>
                <FlatList
                    numColumns={1}
                    style={ styles.list}
                    data={this.state.data}
                    renderItem={({item,key})=>{
                        return(
                            <View>
                                <View  style={{height:150,width:'100%',marginBottom:5,justifyContent:'center',
                                            marginTop:5,padding:0,borderStyle: "solid",borderColor: "#cfcfcf",borderWidth: 1,
                                            backgroundColor:'white',
                                }} onTouchEnd={()=>{
                                    Actions.articlemsg(
                                        {param1: item.id}
                                    );
                                }}>
                                    <Text style={{marginLeft:190,paddingTop:20,fontSize:22,fontWeight:'300'}}>{item.auther}</Text>
                                    <Text style={{marginLeft:190,paddingTop:15,fontSize:16,fontWeight:'200'}}>{item.title}</Text>
                                    <Image
                                            source={{uri:'https://daitianfang.1459.top/'+item.images}}
                                            style={{width:130,height:100,  marginLeft:25 ,  marginTop:-85           
                                            }}
                                    />
                                </View>                                  
                            </View>
                        )
                    }
                    }
                    ListFooterComponent={()=>{
                        return(
                            <View style={{height:400,width:'100%'}}></View>
                        )
                    }}
                >
                </FlatList>
            </View>
            </DrawerLayoutAndroid>
        )
    }
}
const styles = StyleSheet.create({
    head:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center', 
        backgroundColor:'#FFB6C1'
    },
    search:{
        textAlignVertical:'center',//竖向居中
        backgroundColor:'white',
        width:250,
        height:40,
        textAlign:'center',
        fontSize:18,
        borderRadius:20,
    },
    box2:{
        width:60,
        height:40,       
    },
    txt:{
        fontSize:20,
        marginTop:5
    },
    container: {
        height: 250,
        marginBottom:5
      },     
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
     image:{
         width:'100%',
     },
    list:{
        marginBottom:60,
        width:'100%'        
    },
    txtleft:{
       fontSize:22, 
       marginTop:45,
    },
    txtleft1:{
        fontSize:24, 
        marginTop:20,
     }
    
})

