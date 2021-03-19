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

const Stack = createStackNavigator();

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	createRippleTabNavigator(props) {
		const Tab = createBottomTabNavigator();
		return (
			<Tab.Navigator>
				<Tab.Screen
					name='Incident Map'
					options={{
						tabBarIcon: () => {
							let iconName = `md-map`;
							return <Ionicons name={iconName} size={25} />;
						},
					}}>
					{(props) => <MapScreen {...props} />}
				</Tab.Screen>
				<Tab.Screen
					name='Create Report'
					options={{
						tabBarIcon: () => {
							let iconName = `md-person`;
							return <Ionicons name={iconName} size={25} />;
						},
					}}>
					{(props) => <Report {...props} />}
				</Tab.Screen>
			</Tab.Navigator>
		);
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen name='Home' options={{ title: 'Ripple' }}>
						{(props) => <Home {...props} />}
					</Stack.Screen> */}

					<Stack.Screen name='Ripple'>
						{(props) => this.createRippleTabNavigator(props)}
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
