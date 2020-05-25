import React, { Component } from 'react'
import { View,Text, Image,StyleSheet ,TouchableOpacity,ImageBackground,FlatList} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
export default class Person extends Component {
    constructor() {
        super()
        this.state={
            data:[],
            avatarSource: {sign:false,source:{}}
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
    
    render() {
        return (
            <ImageBackground style={{ flex: 1,opacity:0.9 }}
          source={require('./img/background3.png')}>
            <View>
                <View style={styles.head}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('./img/导航-返回.png')} style={{width:50,height:50,marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:26,marginLeft:125,color:'white'}}>
                        个人中心
                    </Text>                           
                </View> 
                <FlatList 
                    style={{marginTop:20
                        
                    }}
                    data={this.state.data}
                    numColumns={1}
                    renderItem={({item})=>(
                        <Image  source={require('./image/icon0.png')} style={{width:100,height:100}}/>
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
