import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    BackHandler
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
            data:{}
        }
    }
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        paused: true,
    };

    componentDidMount(){
        fetch(`https://daitianfang.1459.top/api/v1/video?id=%27${this.props.id}%27`).then(res=>res.json()).then(data=>{
            console.log(data.data[0]);
            this.setState({data:data.data[0]});
        })
    }
    render() {

        return (
            <View>
                <Video source={{uri: "background"}} 
                    rate={1.0}                   
                    volume={1.0}                
                    muted={false}                
                    paused={false}              
                    resizeMode="cover"           
                    repeat={true}                
                    playInBackground={false}     
                    playWhenInactive={false}     
                    onLoadStart={this.loadStart} 
                    onLoad={this.setDuration}    
                    onProgress={this.setTime}    
                    onEnd={this.onEnd}           
                    onError={this.videoError}    
                    style={styles.fullScreen} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        height:300,
        width:'100%'
    }
});