import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import HeatMap from './HeatMap';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default class MapScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heapmap: false,
		};
		this.getButtonText = this.getButtonText.bind(this);
	}
	getButtonText() {
		const { heatmap } = this.state;

		if (heatmap) return 'View Default Map';
		else return 'View Heat Map';
	}
	render() {
		console.log(this.state);
		const { heatmap } = this.state;
		const map = heatmap === true ? <HeatMap /> : <Map />;
		return (
			<View>
				{map}
				<TouchableOpacity
					style={styles.button}
					// onPress={() => this.setState({ heatmap: !heatmap })}>
					onPress={() =>
						this.setState({ heatmap: false }, alert('Heatmap not implemented'))
					}>
					<Text style={{ fontSize: 18, color: 'white' }}>
						{' '}
						{this.getButtonText()}{' '}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center', // Centered horizontally
		justifyContent: 'center', //Centered vertically
		height: '5%',
		width: 200,
		margin: 5,
		backgroundColor: 'black',
		padding: 5,
		borderRadius: 40,
		borderWidth: 1,
	},
});
