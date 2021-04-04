import React from 'react';
import MapView from 'react-native-maps';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class HeatMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			points: this.getHeatMapPoints(100, true),
			weightEnabled: false,
		};
		this.toggleWeightEnabled = this.toggleWeightEnabled.bind(this);
	}

	getHeatMapPoints = (size, withWeight = false) => {
		const points = [];

		for (let i = 0; i < size; i++) {
			const pointData = {
				latitude: LATITUDE + Math.random() / 50,
				longitude: LONGITUDE + Math.random() / 50,
			};
			if (withWeight) {
				pointData.weight = 100;

				// pointData.weight = Math.round(Math.random() * 10 + 1);
				// console.log(pointData.weight);
			}
			points.push(pointData);
		}

		return points;
	};

	async toggleWeightEnabled() {
		console.log(this.state.weightEnabled);
		await this.setState({ weightEnabled: !this.state.weightEnabled });
		this.setState({
			points: this.getHeatMapPoints(50, this.state.weightEnabled),
		});
	}

	render = () => (
		<MapView
			provider={MapView.PROVIDER_GOOGLE}
			style={styles.map}
			initialRegion={{
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			}}>
			<MapView.Heatmap points={this.state.points} />
		</MapView>
	);
}

let styles = StyleSheet.create({
	map: {
		width: Dimensions.get('window').width,
		// height: Dimensions.get('window').height,
		height: '75%',
	},
});

export default HeatMap;
