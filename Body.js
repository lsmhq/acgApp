import React, { Component } from 'react'
import { View, Text, FlatList,  Image,ImageBackground} from 'react-native'
export default class All extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all').then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        return (
            <View style={{width:'100%'}}>
                <FlatList
                    numColumns={2}
                    style={{backgroundColor:'#C9C9C9'}}
                    data={this.state.data}
                    renderItem={({item})=>{
                        return(
                        <View style={{top:10*item.line,left:15*item.num,width:200,height:250,backgroundColor:'white',alignItems:"center",borderRadius:5}}>
                            <ImageBackground
                                source={{uri:`https://daitianfang.1459.top${item.path}`}}
                                style={{width:'100%',height:'100%',alignItems:"center"}}
                            >
                                <Text style={{top:'80%',left:0}}>{item.title}</Text>
                                <Text style={{top:'81%',color:'red'}}>{item.price}</Text>
                            </ImageBackground>
                        </View>  
                        )
                    }
                    }
                >
                </FlatList>
            </View>
        )
    }
}
