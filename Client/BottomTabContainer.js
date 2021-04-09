import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Report from './Report';
import MapScreen from './MapScreen';

export default class BottomTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		// console.log(this.props);

		const Tab = createBottomTabNavigator();
		// Tab.nav
		return (
			<Tab.Navigator>
				<Tab.Screen
					name='Create Report'
					options={{
						tabBarIcon: () => {
							let iconName = `md-person`;
							return <Ionicons name={iconName} size={25} />;
						},
					}}>
					{(props) => (
						<Report {...props} currentTabScreen={this.props.currentTabScreen} 
						setCurrentTabScreen={(screenName) =>
							this.props.setCurrentTabScreen(screenName)
						}/>
					)}
				</Tab.Screen>
				<Tab.Screen
					name='Incident Map'
					options={{
						tabBarIcon: () => {
							let iconName = `md-map`;
							return <Ionicons name={iconName} size={25} />;
						},
					}}>
					{(props) => (
						<MapScreen
							{...props}
							currentTabScreen={this.props.currentTabScreen}
							setCurrentTabScreen={(screenName) =>
								this.props.setCurrentTabScreen(screenName)
							}						/>
					)}
				</Tab.Screen>
			</Tab.Navigator>
			// rn
		);
	}
}
