import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Report from './Report';
import MapScreen from './MapScreen';
import Geocoder from 'react-native-geocoding';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

Geocoder.init('AIzaSyCeGW7SfROh0vU4a2P16hfYOtv-62nn18M'); // use a valid API key

export default class BottomTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { region: {} };
		this.updateLocation = this.updateLocation.bind(this);
	}

	//https://docs.expo.io/versions/latest/sdk/location/
	async componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			return;
		}
		
		let { status } = await Location.requestPermissionsAsync();
		// console.log(status);
		//If not granted, automatically render Washington DC
		if (status !== 'granted') {
			await this.updateLocation('Washington DC');
			return;
		}

		//If granted, set location to current location
		let location = await Location.getCurrentPositionAsync({});
		// console.log(location);
		let region = {};
		region.latitudeDelta = 0.2;
		region.longitudeDelta = 0.2;
		region.latitude = location.coords.latitude;
		region.longitude = location.coords.longitude;
		this.setState({region})
	}

	//Get coordinates of Washington DC
	async updateLocation(searchString) {
		console.log('Update location called');
		await Geocoder.from(searchString)
			.then((json) => {
				var location = json.results[0].geometry.location;
				let region = {};
				region.latitude = Number(location.lat.toFixed(4));
				region.longitude = Number(location.lng.toFixed(4));
				region.latitudeDelta = 0.2;
				region.longitudeDelta = 0.2;
				console.log('GETTING INITIAL REGION');
				console.log(region);
				this.setState({ region });
			})
			.catch((error) => console.warn(error));
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
						<Report
							{...props}
							currentTabScreen={this.props.currentTabScreen}
							setCurrentTabScreen={(screenName) =>
								this.props.setCurrentTabScreen(screenName)
							}
							setCurrentRegion={(region) => this.setState({ region })}
						/>
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
							}
							setCurrentRegion={(region) => this.setState({ region })}
							region={this.state.region}
							updateLocation={this.updateLocation}
						/>
					)}
				</Tab.Screen>
			</Tab.Navigator>
			// rn
		);
	}
}
