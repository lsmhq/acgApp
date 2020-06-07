import React, { Component } from 'react'
import { View, Text,FlatList, } from 'react-native'

export default class Articletext extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                content:[]
            }
                
        }
    }
    componentDidMount(){
        fetch(this.props.url).then(req=>req.json()).then(val=>{
            this.setState({
                data:val
            })
        })
        
    }
    render() {
        return (
            <FlatList
                    numColumns={1}
                    style={{width:'100%'}}
                    data={this.state.data.content}
                    
                    renderItem={({item,key})=>{
                        
                        return(
                            <View>
                                <Text style={{fontSize:18,marginTop:10,margin:20,
                                            lineHeight:40
                                }}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}    
                                </Text>                                                                                                                 
                            </View>
                        )
                    }
                    }    
                    ListFooterComponent = {()=>{
                        return(
                            <View style={{width:'100%',height:200}}>
                                <Text></Text>
                            </View>
                        )
                    }}       
                >
                </FlatList>
        )
    }
}
