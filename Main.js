import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image,} from 'react-native'
import { Router, Scene ,Tabs, Actions, Modal} from 'react-native-router-flux'
export default class Main extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <View>
                 <View style={styles.head}>
                 <TouchableOpacity  style={styles.good3} onPress={()=>Actions.list()}>
                            <Image                                        
                                        source={require('./image/icon0.png')}
                                        style={{width:50 ,height:50,marginLeft:20}}                                     
                                    />                                                   
                    </TouchableOpacity>
                <View><TextInput placeholder='搜一搜' style={styles.search}/></View>
                <TouchableOpacity  style={styles.good3} onPress={()=>Actions.list()}>

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
                    <TouchableOpacity  style={styles.box2}  onPress={()=>Actions.list()}>
                        <Text style={styles.txt}>首页</Text>
                    </TouchableOpacity>                   
					<TouchableOpacity  style={styles.box2} onPress={()=>Actions.list()}>
                        <Text style={styles.txt}>动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.box2} onPress={()=>Actions.list()}>
                        <Text style={styles.txt}>卡通</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.box2} onPress={()=>Actions.list()}>
                        <Text style={styles.txt}>游戏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.box2} onPress={()=>Actions.list()}>
                        <Text style={styles.txt}>视频</Text>
                    </TouchableOpacity>
				</View>

            
            </View>
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
    
})

