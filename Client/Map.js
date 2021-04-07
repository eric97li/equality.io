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
	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		const { region, points } = this.props;
		// console.log(points);
		//Error check
		if (region.latitude === undefined) return <></>;

		return (
			<MapView
				className='map'
				style={styles.map}
				region={region}
				provider={MapView.PROVIDER_GOOGLE}>
				{points.map((marker, index) => {
					// console.log(marker);
					// console.log(marker);
					return (
						<MapView.Marker
							key={index}
							coordinate={{
								latitude: marker.latitude,
								longitude: marker.longitude,
							}}
							title={marker.title}
							description={marker.description}
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
