import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    BackHandler,
    Image
} from 'react-native';
import Video from 'react-native-video';
function formatTime(second) {
    let h = 0, i = 0, s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    console.log([zero(h), zero(i), zero(s)].join(":"));
    // return [zero(h), zero(i), zero(s)].join(":");
    return zero(s);
}
export default class videoPlayer extends Component {
    constructor(){
        super()
        this.state = {
            id:'',
            data:{},
            state : {
                rate: 1,
                volume: 1,
                muted: false,
                resizeMode: 'contain',
                duration: 0.0,
                currentTime: 0.0,
                paused: false,
            }
        }
    };

    componentDidMount(){
        fetch(`https://daitianfang.1459.top/api/v1/video?id=%27${this.props.id.trim()}%27`).then(res=>res.json()).then(data=>{
            console.log(data.data[0]);
            this.setState({data:data.data[0]});
        })
    }
    render() {
        return (
            <View style={{height:'100%'}}>
                <View
                    style={this.state.state.paused?styles.paused:styles.played}
                    onTouchEnd = {()=>{
                        this.setState({
                            state:{
                                muted: false,
                                duration: 0.0,
                                currentTime: 0.0,
                                paused: this.state.state.paused?false:true,
                            }
                        },()=>console.log(this.state.state.paused))
                        
                    }}
                ></View>
                    <TouchableOpacity
                        onPress = {()=>{
                            this.setState({
                                state:{
                                    muted: false,
                                    duration: 0.0,
                                    currentTime: 0.0,
                                    paused: this.state.state.paused?false:true,
                                }
                            },()=>console.log(this.state.state.paused))
                            
                        }}
                        style={{height:'40%'}}
                    >
                        {console.log(this.state.data.barragefile)}
                        <Video 
                            source={{uri: this.state.data.barragefile}} 
                            rate={1.0}                   
                            volume={1.0}                
                            muted={false}                
                            paused={this.state.state.paused}                                        
                            style={styles.fullScreen} 
                        /> 
                    </TouchableOpacity>
                    <View 
                        style={{
                            height:'6%',
                            backgroundColor:'black',
                            borderWidth:1,
                            borderColor:'gray',
                            borderStyle:'solid',
                            flexDirection:'row'
                        }}
                    >
                        {/* 暂停/开始 */}
                        <View
                            style={styles.play}
                        ></View>
                        {/* 进度条 */}
                        <View
                            style={styles.progress}
                        ></View>
                        {/* 声音 */}
                        <View
                            style={styles.default}
                        ></View>
                        {/* 全屏 */}
                        <View
                            style={styles.default}
                        ></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'25%',marginLeft:'5%',marginTop:'5%'}}>
                            <Image 
                                source={{uri:this.state.data.cover}}
                                style={{width:'100%',height:130,borderRadius:5}}
                            />
                        </View>
                        <View style={{width:'50%',marginTop:'10%',marginLeft:'14%'}}>
                            <Text style={{fontSize:20}}>{this.state.data.titel}</Text>
                        </View>

                    </View>

                </View>
        );
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        height:'100%',
        width:'100%'
    },
    paused:{
        position:"absolute",
        width:30,
        height:10,
        borderStyle:'solid',
        borderWidth:30,
        borderTopColor:'black',//下箭头颜色
        borderLeftColor:'#f76260',//右箭头颜色
        borderBottomColor:'black',//上箭头颜色
        borderRightColor:'black',//左箭头颜色
        borderRadius:5,
        zIndex:10,
        top:130,
        left:'45%'
    },
    played:{
        display:'none'
    },
    play:{
        width:'10%',
        height:'100%',
        backgroundColor:'white'
    },
    progress:{
        width:'60%',
        height:'10%',
        backgroundColor:'white',
        marginTop:14,
        marginLeft:'5%'
    },
    default:{
        width:10,
        height:10,
        backgroundColor:'white'
    }
});