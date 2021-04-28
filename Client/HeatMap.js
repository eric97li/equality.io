import React from 'react';
import MapView from 'react-native-maps';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

class HeatMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.onRegionUpdate = this.onRegionUpdate.bind(this);

	}
	onRegionUpdate(region){
		console.log("ORC called");
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
		const { points, region } = this.props;
		console.log("Heatmap ");
		console.log(region);
		// console.log(points);
		return (
			<MapView
				onRegionChangeComplete={region => this.onRegionUpdate(region)}

				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}>
				<MapView.Heatmap points={this.props.points} />
			</MapView>
		);
	}
}

let styles = StyleSheet.create({
	map: {
		width: Dimensions.get('window').width,
		height: '70%',
	},
});

export default HeatMap;
