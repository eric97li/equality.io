import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, ScrollView, StyleSheet, TextInput, View, Text } from 'react-native';
import { NavigationActions } from '@react-navigation/compat';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.goToMap = this.goToMap.bind(this);
		this.goToCreateReport = this.goToCreateReport.bind(this);
		this.disclaimerInfo = this.disclaimerInfo.bind(this);
		this.aboutInfo = this.aboutInfo.bind(this);
	}
	componentDidMount() {}
	goToCreateReport = () => {
		this.props.navigation.navigate('Equality.io');
		this.props.setCurrentTabScreen('Create Report');
	};
	goToMap = () => {
		// console.log('Go to map');
		this.props.navigation.navigate('Equality.io');
		this.props.setCurrentTabScreen('Incident Map');
	};
	aboutInfo() {
		this.props.navigation.navigate('AboutPage');
	}
	disclaimerInfo() {
		this.props.navigation.navigate('Disclaimer');
	}
	render() {
		// console.log(this.props.x);

		return (
			<ImageBackground
			source={require("./assets/mlk-statue.jpg")}
			 style={{width: '100%',opacity:0.95, height: '100%'}}
		   >
			<ScrollView>
			<View
				style={{
					width: '50%',
					height: '100%',
					justifyContent: 'center',
					alignSelf: 'center',
					alignContent: 'center',
					alignItems: 'center',
				}}>
	 
				<View style={{ marginTop: '40%', width: '100%' }}>
					<Text
						style={{
							color: '#8b008b',
							alignItems: 'center',
							textAlign: 'center',
							marginBottom: '50%',
							fontSize: 41,
						}}>
						{' '}
						Equality.io{' '}
					</Text>
				</View>
				<View style={{ marginTop: '2.5%', width: '80%' }}>
					<TouchableOpacity
						style={{
							borderWidth: 1,
							height: 42,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'white',
							alignSelf: 'center',
							textAlign: 'center',
							marginBottom: '10%',
						}}
						onPress={() => this.goToCreateReport()}>
						<Text
							style={{
								color: 'black',
								alignItems: 'center',
								textAlign: 'center',
							}}>
							{' '}
							Report Discrimination{' '}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: '2.5%', width: '80%' }}>
					<TouchableOpacity
						style={{
							borderWidth: 1,
							height: 42,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'white',
							alignSelf: 'center',
							textAlign: 'center',
							marginBottom: '80%',
						}}
						onPress={() => this.goToMap()}>
						<Text
							style={{
								color: 'black',
								alignItems: 'center',
								textAlign: 'center',
							}}>
							{' '}
							View Discrimination Incident Map{' '}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: '2.5%', width: '80%' }}>
					<TouchableOpacity
						style={{
							borderWidth: 1,
							height: 42,
							width: '80%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'white',
							alignItems: 'center',
							alignSelf: 'center',
							textAlign: 'center',
						}}
						onPress={() => this.aboutInfo()}>
						<Text style={{ color: 'black' }}> 
						{' '} 
						About Equality.io {' '}</Text>
					</TouchableOpacity>
				</View>
			</View>
			</ScrollView>
			</ImageBackground>
		);
	}
}

