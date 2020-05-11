import Tabbars from './Tabbars';
import React,{useState, useEffect} from 'react'
import {BackHandler,ToastAndroid,AsyncStorage, Alert} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import Welcome from './Welcome';
let exit = false;
const App = () => {
	useEffect(()=>{
		setTimeout(()=>{
			SplashScreen.hide();
		});
	},2000)
	var [isInstall,setInstall] = useState('yes');
	AsyncStorage.getItem('install',(err,val)=>{
		console.log('val',val);
		setInstall(val);
	});
	BackHandler.addEventListener('back', () => {
		clearTimeout(timer);
	  	let timer = setTimeout(() => { 
			exit = false;
	  	}, 2000);
	  	if (exit) {
			BackHandler.exitApp();
	  	} else {
			ToastAndroid.show('再次点击退出应用',ToastAndroid.SHORT);
			exit = true;
	  	}
	});
	if(isInstall == 'yes' || isInstall == null){
		return(
		<>
			<Welcome parents = {(val)=>{
				AsyncStorage.setItem('install','no',()=>{
					ToastAndroid.show('欢迎使用',ToastAndroid.SHORT);
					AsyncStorage.getItem('install',(err,val)=>{
						console.log('val2',val);
						console.log('val',isInstall);
					});
					setInstall(val);
				});
				}}/>
		</>	
		)
	}
	else if(isInstall =='no'){
		return(<Tabbars/>)
	}
		
};
export default App;
