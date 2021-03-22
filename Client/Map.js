import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

//https://snack.expo.io
export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// region: {
			// 	latitude: 37.78825,
			// 	longitude: -122.4324,
			// 	latitudeDelta: 0.2,
			// 	longitudeDelta: 0.2,
			// },
			markers: [
				{
					latitude: 37.78825,
					longitude: -122.4324,
					title: 'Foo Place',
					description: '1234 Foo Drive',
				},
			],
		};
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		//Error check
		if (this.props.region.latitude === undefined) return <></>;

		return (
			<MapView style={styles.map} region={this.props.region}>
				{this.state.markers.map((marker, index) => {
					// console.log(marker);
					return (
						<MapView.Marker
							key={index}
							coordinate={{
								latitude: marker.latitude,
								longitude: marker.longitude,
							}}
							title={'title'}
							description={'description'}
						/>
					);
				})}
			</MapView>
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
		// height: Dimensions.get('window').height,
		height: '75%',
	},
});

// coordinate={{latitude: marker.latitude,
// 	longitude: marker.longitude}}
