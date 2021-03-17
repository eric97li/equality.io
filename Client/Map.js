import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
//https://snack.expo.io
export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		return <MapView style={styles.map} initialRegion={this.state.region} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
