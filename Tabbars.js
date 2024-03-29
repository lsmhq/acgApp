import React, { Component } from 'react';
import { Router, Scene ,Tabs, Actions} from 'react-native-router-flux';
import {Icon} from'@ant-design/react-native';
import Body from './Body';
import Main from './Main';
import Img from './Img';
import Login from './Login';
import Loginin from './Loginin';
import Goods from './Goods';
import Articlemsg from './Articlemsg';
import Search from './Search';
import Video from './Video';
import Player from './videoPlayer';
import Shopcar from './Shopcar';
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
							color={focused?'pink':'gray'}
							name="bank"
							/>
						}
						
					>
						<Scene key='home' component={Main} hideNavBar/>
						<Scene 
							hideTabBar 
							key='mylist' 
							component={Body}
						/>
					</Scene>
					<Scene key='video'
						title='视频'
						icon={
							({focused})=><Icon 
							color={focused?'pink':'gray'}
							name="android"
							/>
						}
						
					>
						<Scene key='video' component={Video}/>
						<Scene 
							hideNavBar
							hideTabBar 
							key='video' 
							component={Video}
						/>
					</Scene>
						{/* 消息栏 */}
						<Scene key='msg'
						hideNavBar
							title='商城'
							icon={
								({focused})=><Icon 
									color={focused?'pink':'gray'} 
									name="audio"
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
							hideNavBar
							title='个人中心'
							icon={
								({focused})=><Icon 
									color={focused?'pink':'gray'} 
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
						hideNavBar
						key='login'
						component={Login}		
						init={true}
					/>
					<Scene
						hideNavBar	
						key='loginin'
						component={Loginin}
						
					/>
					<Scene
					hideNavBar
						key='goods'
						component={Goods}
						
					/>
					<Scene
						hideNavBar
						key='articlemsg'
						component={Articlemsg}
					/>
					<Scene
						hideNavBar
						key='search'
						component={Search}
						>
					</Scene>
					<Scene
						title='视频'
						key='videoPlayer'
						component={Player}
						>
					</Scene>
					<Scene
						hideNavBar
						key='shopcar'
						component={Shopcar}
					/>
			</Scene>
		</Router>
        )
    }
}
