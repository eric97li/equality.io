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
import Disclaimer from './Disclaimer';
import About from './About';
import Support from './Support';
import HelpInfo from './HelpInfo';
import SupportInfo from './SupportInfo';
import AboutPage from './AboutPage';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
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
					<Stack.Screen name='Home' options={{ title: 'Equality.io' }}>
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
					<Stack.Screen name='Equality.io'>
						{(props) => (
							<BottomTabContainer
								{...props}
								currentTabScreen={this.state.currentTabScreen}
								setCurrentTabScreen={(screenName) =>
									this.setCurrentTabScreen(screenName)
								}
							/>
						)}
					</Stack.Screen>
					<Stack.Screen name='Disclaimer' component={Disclaimer} />
					<Stack.Screen name='About' component={About} />
					<Stack.Screen name='Support' component={Support} />
					<Stack.Screen name='HelpInfo' component={HelpInfo} />
					<Stack.Screen name='SupportInfo' component={SupportInfo} />
					<Stack.Screen name='AboutPage' component={AboutPage} />
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
