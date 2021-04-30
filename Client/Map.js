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
	constructor(props){
		super(props);
		// this.handleRegionPublish = this.handleRegionPublish.bind(this);
		this.onRegionUpdate = this.onRegionUpdate.bind(this);
	}
	onRegionUpdate(region){
		// console.log("ORC called");
		if(region === undefined || region.latitude === undefined) return;
		// console.log("ORC called");

		let tempRegion = {};
		tempRegion.latitude = parseFloat(region.latitude.toFixed(3));

		tempRegion.latitudeDelta = parseFloat(region.latitudeDelta.toFixed(3));
		tempRegion.longitude = parseFloat(region.longitude.toFixed(3));
		tempRegion.longitudeDelta = parseFloat(region.longitudeDelta.toFixed(3));
		// console.log(tempRegion);

				this.props.changeRegion(tempRegion);

	}

	render() {
		const { region, points } = this.props;
		// console.log(points);
		//Error check
		if (region.latitude === undefined) return <></>;
		// console.log(region);
		return (
			<MapView
				className='map'
				onRegionChangeComplete={region => this.onRegionUpdate(region)}
				// onRegionChangeComplete={region => console.log(region)}

				// onRegionChangeComplete = {() => this.handleRegionPublish()}
				style={styles.map}
				region={region}
				provider={MapView.PROVIDER_GOOGLE}>
				{points.map((marker, index) => {
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
		height: '70%',
	},
});

// coordinate={{latitude: marker.latitude,
// 	longitude: marker.longitude}}
