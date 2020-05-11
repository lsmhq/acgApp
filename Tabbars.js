import React, { Component } from 'react'
import { Router, Scene ,Tabs, Actions} from 'react-native-router-flux'
import {Icon} from'@ant-design/react-native'
import Body from './Body'
import Main from './Main'
import Person from './Person'
import Img from './Img';
import List from './MsgList';
import Login from './Login';
import Loginin from './Loginin'
export default class Tabbars extends Component {
	constructor(){
		super()
		this.state = {

		}
	}
    render() {
        return (
            <Router>
			<Scene key="root">
				<Tabs 
					key='tabbar'
					hideNavBar
					activeTintColor="red"
					inactiveTintColor="gray"
					tabBarStyle={{backgroundColor:'white'}}
				>
					<Scene key='home'
						title='首页'
						icon={
							({focused})=><Icon 
							color={focused?'red':'gray'}
							name="home"
							/>
						}
					>
						<Scene key='home' component={Main} hideNavBar/>
						<Scene 
							hideTabBar 
							hideDrawerButton
							key='mylist' 
							component={Body}
						/>
					</Scene>
								{/* 消息栏 */}
						<Scene key='msg'
							title='第二页面'
							icon={
								({focused})=><Icon 
									color={focused?'red':'gray'} 
									name="shop"
								/>
								}
							
						>
							<Scene key="ms" component={Body} hideNavBar />
							<Scene 
								key="msgdetail" 
								hideTabBar    
								component={Body}
							/>
						</Scene>
						<Scene key='card'
							title='个人中心'
							icon={
								({focused})=><Icon 
									color={focused?'red':'gray'} 
									name="shop"
								/>
								}
						>
							<Scene key="ms" component={Img}/>
							<Scene 
								key="msgdetail" 
								hideTabBar    
								component={Img}
							/>
						</Scene>
					</Tabs>
					<Scene 
						key='list'
						component={List}
						title='我的发布'
						titleStyle = {{color:'white',marginLeft:'35%'}}
						navigationBarStyle={{backgroundColor:'#FF4040'}}
						renderRightButton={
							()=><Icon 
								color='white'
								name='fast-forward'
								style={{
									marginRight:20
								}}
							/>
						}
						renderLeftButton={
							()=><Icon 
								color='white'
								name='area-chart'
								onPress={()=>{
								Actions.pop()
								}}
								style={{
									marginLeft:20
								}}
							/>
						}
					/>
					<Scene
						key='login'
						component={Login}
						title='登录'
						init={true}
					/>
					<Scene
						key='loginin'
						component={Loginin}
						title='注册'
					/>
			</Scene>
		</Router>
        )
    }
}
