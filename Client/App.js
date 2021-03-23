import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Report from './Report';
import MapScreen from './MapScreen';
import BottomTabContainer from './BottomTabContainer';
const Stack = createStackNavigator();

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentTabScreen: 'meal' };
		this.setCurrentTabScreen = this.setCurrentTabScreen.bind(this);
	}

	setCurrentTabScreen(currentTabScreen) {
		this.setState({ currentTabScreen });
	}
	component;

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' options={{ title: 'Ripple' }}>
						{(props) => (
							<Home
								{...props}
								setCurrentTabScreen={(screenName) =>
									this.setCurrentTabScreen(screenName)
								}
							/>
						)}
					</Stack.Screen>
					{/* 
					<Stack.Screen
						name='Ripple'
						component={BottomTabContainer}
						initialScreen={5}></Stack.Screen> */}
					<Stack.Screen name='Ripple'>
						{(props) => (
							<BottomTabContainer
								{...props}
								currentTabScreen={this.state.currentTabScreen}
							/>
						)}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
