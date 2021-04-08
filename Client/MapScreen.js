import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import HeatMap from './HeatMap';
import Slider from '@react-native-community/slider';
import Geocoder from 'react-native-geocoding';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';
Geocoder.init('AIzaSyCeGW7SfROh0vU4a2P16hfYOtv-62nn18M'); // use a valid API key

export default class MapScreen extends React.Component {
	constructor(props) {
		super(props);
		let d = new Date();
		console.log(d.getMonth() + 12);
		this.state = {
			heapmap: false,
			month: d.getMonth() + 12,
			value: d.getMonth() + 12,
			region: {},
			searchString: '',
			allPoints: [],
			filteredPoints: [],
			// aggregatedPoints: [],
		};
		this.getButtonText = this.getButtonText.bind(this);
		this.getMonthByNumber = this.getMonthByNumber.bind(this);
		// this.aggregatePoints = this.aggregatePoints.bind(this);
		this.filterByMonth = this.filterByMonth.bind(this);
	}
	getButtonText() {
		const { heatmap } = this.state;

		if (heatmap) return 'View Default Map';
		else return 'View Heat Map';
	}
	//Get month by number
	getMonthByNumber() {
		// monthnumber %= 12;
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		return monthNames[this.state.value % 12]; //if 2
	}
	componentDidMount() {
		this.updateLocation('San Francisco');
	}
	componentDidUpdate() {
		if (this.props.currentTabScreen != 'Incident Map') {
			this.props.navigate('Create Report');
		}
	}
	fetchData(region) {
		// console.log('fetching data for: ');
		// console.log(region);
		fetch('https://ripple506.herokuapp.com/getReportByLocation', {
			method: 'POST',
			headers: {
				'Accept': '*/*',
				'Connection': 'Keep-Alive',
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({
				'Latitude': region.latitude,
				'Longitude': region.longitude,
				'LongitudeDelta': region.longitudeDelta,
				'LatitudeDelta': region.latitudeDelta,
			}),
		})
			.then((response) => response.json())

			.then(async (json) => {
				// console.log('DATA: ');
				// console.log(json.Data);
				var allPoints = json.Data.map(function (object) {
					var newObject = Object.assign({}, object);
					newObject.weight = 10;
					let tempLat = newObject.Latitude;
					let tempLong = newObject.Longitude;
					delete newObject.Latitude;
					delete newObject.Longitude;
					newObject.latitude = tempLat;
					newObject.longitude = tempLong;
					newObject.title = newObject.Category;
					newObject.description = newObject.Details;
					delete newObject.Category;
					delete newObject.Details;
					return newObject;
				});

				this.setState({ allPoints, filteredPoints: allPoints });
				// console.log(json);
				if (json.Status) {
				}
			});
	}
	filterByMonth(value) {
		const { allPoints, month } = this.state;
		this.setState({ value });
		const filteredPoints = allPoints.filter(function (point) {
			return parseInt(point.Month) <= value;
		});
		// console.log(filteredPoints);
		// allPoints.filter(parseInt(point.Month) <= month);
		this.setState({ filteredPoints });
	}
	// aggregatePoints() {
	// 	const { allPoints } = this.state;
	// 	let aggregatedPoints = [];
	// 	for (let i = 0; i < allPoints.length; i++) {
	// 		let found = false;
	// 		for (let j = 0; j < aggregatedPoints.length; j++) {
	// 			if (
	// 				aggregatedPoints[j].latitude === allPoints[i].latitude &&
	// 				aggregatedPoints[j].longitude === allPoints[i].longitude
	// 			) {
	// 				found = true;
	// 				aggregatedPoints[j].description += allPoints[i].description;
	// 				break;
	// 			}
	// 		}
	// 		if (!found) aggregatedPoints.push(allPoints[i]);
	// 	}
	// 	this.setState({ aggregatedPoints });
	// }
	updateLocation(searchString) {
		console.log('Searching for' + searchString);
		Geocoder.from(searchString)
			.then((json) => {
				var location = json.results[0].geometry.location;
				let newRegion = {};
				newRegion.latitude = Number(location.lat.toFixed(4));
				newRegion.longitude = Number(location.lng.toFixed(4));
				newRegion.latitudeDelta = 0.2;
				newRegion.longitudeDelta = 0.2;
				this.setState({ region: newRegion });
				this.fetchData(newRegion);
			})
			.catch((error) => console.warn(error));
	}
	render() {
		// Search by address

		// console.log(this.state.region);
		const { heatmap, month, allPoints, filteredPoints, region } = this.state;
		const map =
			heatmap === true ? (
				<HeatMap region={region} points={filteredPoints} />
			) : (
				<Map region={region} points={filteredPoints} />
			);
		return (
			<View>
				<Text style={{ textAlign: 'center', fontSize: 30 }}>
					{this.getMonthByNumber()}
				</Text>
				<Slider
					className='slider'
					style={{ width: '90%', marginLeft: '5%', height: 40 }}
					minimumValue={month - 11}
					step={1}
					value={month}
					maximumValue={month}
					onValueChange={(value) => this.filterByMonth(value)}
					minimumTrackTintColor='#FFFFFF'
					maximumTrackTintColor='#000000'
				/>
				{map}
				<View style={styles.searchSection}>
					<Ionicons
						style={styles.searchIcon}
						name='search'
						size={20}
						color='#000'
						onPress={() => this.updateLocation(this.state.searchString)}
					/>
					<TextInput
						style={styles.input}
						placeholder='Enter a Location'
						onChangeText={(searchString) => {
							this.setState({ searchString });
						}}
						onSubmitEditing={() => this.updateLocation(this.state.searchString)}
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					// onPress={() => this.setState({ heatmap: !heatmap })}>
					onPress={() =>
						this.setState(
							{
								heatmap: !this.state.heatmap,
							} /*, alert('Heatmap not implemented')*/
						)
					}>
					<Text style={{ fontSize: 18, color: 'white' }}>
						{this.getButtonText()}
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
	input: {
		padding: 10,
		margin: 5,
		height: 40,
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
	},
	searchSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	searchIcon: {
		padding: 10,
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		backgroundColor: '#fff',
		color: '#424242',
	},
});
