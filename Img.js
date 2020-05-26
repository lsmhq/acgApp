import React, {Component} from 'react';
import {Text, View, Button, Image, Alert,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import Login from './Login';
import Person from './Person';
/**
 * 从相机，或者相册中选择图片，展示出来
 */
export default class ChoosePicture extends Component {
    constructor(){
        super()
        this.state = {
            avatarSource: {sign:false,source:{}},
            isLogin:'true'
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('user',(err,val)=>{
            this.setState({isLogin:val})
        });
    }
    render() {
        if(this.state.isLogin == 'true'){
            return (
                <View style={{height:'100%'}}>
                    <Person/>
                </View>
            );
        }else{
            return(
                <Login parents = {(val)=>{
                    this.setState({isLogin:val});
                }}/>
            )
        }
        
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
}