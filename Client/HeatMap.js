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
	}

	render() {
		const { points, region } = this.props;
		// console.log(points);
		return (
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={region}>
				<MapView.Heatmap points={this.props.points} />
			</MapView>
		);
	}
}

let styles = StyleSheet.create({
	map: {
		width: Dimensions.get('window').width,
		height: '75%',
	},
});

export default HeatMap;
