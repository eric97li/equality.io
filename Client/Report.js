import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	TextInput,
	View,
	Text,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Geocoder from 'react-native-geocoding';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			incident: '',
			incidentDetails: '',
			searchString: '',
			latitude: 0,
			longitude: 0,
		};
	}

	componentDidMount() {
		if (this.props.currentTabScreen != 'Create Report') {
			this.props.setCurrentTabScreen('Incident Map');

			this.props.navigation.navigate('Incident Map');
		}
	}

	updateLocation(searchString) {
		console.log('Searching for' + searchString);
		return Geocoder.from(searchString)
			.then((json) => {
				var location = json.results[0].geometry.location;
				let newRegion = {};
				newRegion.latitude = Number(location.lat.toFixed(4));
				newRegion.longitude = Number(location.lng.toFixed(4));
				newRegion.latitudeDelta = 0.2;
				newRegion.longitudeDelta = 0.2;
				console.log('providing lat/long');
				console.log(newRegion);
				this.props.setCurrentRegion(newRegion);
				// this.setState({ latitude: newRegion.latitude });
				// this.setState({ longitude: newRegion.longitude });
				this.setState({ region: newRegion });
			})
			.catch((error) => console.warn(error));
	}

	async submitReport() {
		//Get location before submitting
		await this.updateLocation(this.state.searchString);
		alert('Report Submitted!');

		return fetch('https://ripple506.herokuapp.com/reportCreate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'Location': this.state.searchString,
				'Latitude': this.state.region.latitude,
				'Longitude': this.state.region.longitude,
				'Year': '2020',
				'Month': '6',
				'Day': '9',
				'Details': this.state.incidentDetails,
				'Category': this.state.incident,
			}),
		}).then((response) => {
			console.log(response.status);
			this.props.setCurrentTabScreen('Incident Map');

			this.props.navigation.navigate('Incident Map');
		});
	}

	render() {
		return (
			<View
				style={{
					width: '100%',
					height: '90%',
					justifyContent: 'center',
					alignSelf: 'center',
					alignContent: 'center',
					alignItems: 'center',
				}}>
				<View style={{ marginBottom: '15%' }}></View>

				<View style={{ marginBottom: '15%' }}>
					<Text
						style={{
							fontSize: 35,
							justifyContent: 'center',
							alignSelf: 'center',
							alignContent: 'center',
							alignItems: 'center',
						}}>
						Report Incident
					</Text>
				</View>

				<DropDownPicker
					items={[
						{ label: 'Ableism', value: 'Ableism' },
						{ label: 'Ageism', value: 'Ageism' },
						{ label: 'Human Rights', value: 'Human Rights' },
						{ label: 'Racism', value: 'Racism' },
						{ label: 'Religious', value: 'Religious' },
						{ label: 'Sexism', value: 'Sexism' },
						{ label: 'Violence', value: 'Violence' },
						{ label: 'Workplace', value: 'Workplace' },
					]}
					placeholder={'Select Incident'}
					defaultValue={this.state.incident}
					containerStyle={{ width: 250, height: 60 }}
					style={{ backgroundColor: '#fafafa' }}
					itemStyle={{
						justifyContent: 'flex-start',
					}}
					dropDownStyle={{ backgroundColor: '#fafafa' }}
					onChangeItem={(item) =>
						this.setState({
							incident: item.value,
						})
					}
				/>

				<View style={{ marginBottom: '15%' }}></View>

				<DropDownPicker
					items={[
						{ label: 'Segregation', value: 'Segregation' },
						{ label: 'Harassment', value: 'Harassment' },
						{
							label: 'Infringement/breach of law',
							value: 'Infringement/breach of law',
						},
						{ label: 'Sexual assault', value: 'Sexual assault' },
						{ label: 'Discrimination', value: 'Discrimination' },
						{ label: 'Maternity', value: 'Maternity' },
						{ label: 'Occupation', value: 'Occupation' },
						{ label: 'Health', value: 'Health' },
					]}
					placeholder={'Select Incident Details'}
					defaultValue={this.state.incidentDetails}
					containerStyle={{ width: 250, height: 60 }}
					style={{ backgroundColor: '#fafafa' }}
					itemStyle={{
						justifyContent: 'flex-start',
					}}
					dropDownStyle={{ backgroundColor: '#fafafa' }}
					onChangeItem={(item) =>
						this.setState({
							incidentDetails: item.value,
						})
					}
				/>

				<View style={{ marginBottom: '15%' }}></View>

				<View style={styles.searchSection}>
					<Ionicons
						style={styles.searchIcon}
						name='search'
						size={20}
						color='#000'
						// onPress={() => this.updateLocation(this.state.searchString)}
					/>
					<TextInput
						style={styles.input}
						placeholder='Location'
						onChangeText={(searchString) => {
							this.setState({ searchString });
						}}
						// onSubmitEditing={() => this.updateLocation(this.state.searchString)}
					/>
				</View>

				<View style={{ marginTop: '15%', width: '80%' }}>
					<TouchableOpacity
						style={{
							borderWidth: 1,
							height: 42,
							width: '60%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'black',
							alignSelf: 'center',
							textAlign: 'center',
						}}
						onPress={() => this.submitReport()}>
						<Text style={{ color: 'white' }}> Confirm Report </Text>
					</TouchableOpacity>
				</View>
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
		padding: 2,
		margin: 5,
		height: 2,
		width: '20%',
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
		paddingTop: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 0,
		backgroundColor: '#fff',
		color: '#424242',
	},
});
