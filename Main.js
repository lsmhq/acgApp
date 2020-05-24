import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,
    ToastAndroid,
    TouchableOpacity,Image,FlatList, Dimensions,DrawerLayoutAndroid, ActionSheetIOS} from 'react-native'
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
        //使用ToastAndroid组件弹出一个原生的Toast
        ToastAndroid.show("打开左菜单", ToastAndroid.SHORT);
      } 
    
      handleDrawerClose=()=>{
        ToastAndroid.show("关闭左菜单", ToastAndroid.SHORT);
      }
    
      open=()=>{
        this.drawer.openDrawer();
      }
    
      close=()=>{
        this.drawer.closeDrawer();
      }
   
    render() {
        var navigationView = (  
            <View style={{flex: 1, backgroundColor:'white'}}>  
                <Image                                        
                                        source={require('./image/icon0.png')}
                                        style={{width:80 ,height:80,marginLeft:110,marginTop:20}}                                     
                                    />  
                <Text>
                    昵称：
                </Text>
                <Text>
                    签名：
                </Text>
                <TouchableOpacity onPress={this.close}>
                    <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                </TouchableOpacity> 
            </View>  
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
                                        source={require('./image/icon0.png')}
                                        style={{width:50 ,height:50,marginLeft:20}}                                     
                                    />                                                   
                    </TouchableOpacity>
                <View><TextInput placeholder='搜一搜' style={styles.search}/></View>
                <TouchableOpacity   onPress={()=>Actions.list()}>

                <Image
                    source={require('./img/search.png')}
                    style={{width:50 ,height:50,marginRight:20}}
                />
                </TouchableOpacity>   
            </View>
                
            <View style={{
					flexDirection:'row',
					justifyContent:"space-evenly",
                    flexWrap:'wrap',
                    marginTop:15,	
                    borderColor:'red',			                   
				}}>
                    <TouchableOpacity  style={styles.box2}  onPress={()=>{
                        this.setState({
                            type:'all',
                            Swiper:0,
                            
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
                    <TouchableOpacity  style={styles.box2} onPress={()=>{
                        this.setState({
                            type:'all'
                        })
                        this.componentDidMount()
                    }}>
                        <Text style={styles.txt}>视频</Text>
                    </TouchableOpacity>
				</View>
                <View style={this.state.Swiper==0 && styles.container}>
                        <Swiper style={styles.wrapper} 
                        autoplay={true}
                        showsPagination={false} 
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

                    style={this.state.Swiper==0 && styles.list}
                    data={this.state.data}
                    
                    renderItem={({item,key})=>{
                        
                        return(
                            <View>
                                <View  style={{height:150,width:'100%',marginBottom:10,justifyContent:'center',
                                            marginTop:10,padding:0,borderStyle: "solid",borderColor: "#cfcfcf",borderWidth: 1,
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
        backgroundColor:'white',
        width:250,
        
        textAlign:'center',
        fontSize:18,
        borderRadius:20,
    },
    box2:{
        width:60,
        height:50,       
    },
    txt:{
        fontSize:20
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
        marginBottom:400,
        width:'100%'
        
    }
    
})

