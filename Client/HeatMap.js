import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,
} from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';

//https://snack.expo.io
export default class HeatMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.2,
				longitudeDelta: 0.2,
			},
			markers: [
				{
					latitude: 37.78825,
					longitude: -122.4324,
					weight: 5,
				},
			],
		};
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		return (
			<></>
			//Not implemented Yet
			// <MapView style={styles.map} initialRegion={this.state.region}>
			// 	<MapView.Heatmap points={this.state.markers} />
			// </MapView>
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
	map: {
		width: Dimensions.get('window').width,
		height: '90%',
	},
});

// coordinate={{latitude: marker.latitude,
// 	longitude: marker.longitude}}
