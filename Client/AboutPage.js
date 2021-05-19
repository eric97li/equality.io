import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,ScrollView,Button
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

//https://snack.expo.io
export default class AboutPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<View style={styles.center}>
				<TouchableOpacity 	style={{
					        marginTop:'40%',
							borderWidth: 1,
							height: 42,
							width: '80%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'white',
							alignSelf: 'center',
							textAlign: 'center',
						}} onPress={()=>{
					this.props.navigation.navigate('About');
				}}>
                  <Text style={{}}>About Equality.io</Text>
				</TouchableOpacity>
				<TouchableOpacity 	
				style={{   
					 marginTop:'10%',
							borderWidth: 1,
							height: 42,
							width: '80%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 40,
							backgroundColor: 'white',
							alignSelf: 'center',
							textAlign: 'center',
						}} onPress={()=>{
					this.props.navigation.navigate('Disclaimer');
				}}>
                  <Text style={{}}>Equality.io Disclaimer</Text>
				</TouchableOpacity>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	mt1:{
		marginTop:10
	},
	mt:{
		marginTop:20
	},
	in_bg:{
		width:310,
		height:50,
		backgroundColor:'white',color:'red',padding:5
	},
	input:{
		width:300,
		// height:50
	},
	add_btn:{
		width:300,
		backgroundColor:'#1E90FF',
		padding:10,
		marginTop:30,
		color:'#FFFFFF',
		fontSize:20,
		
		
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	md: {
		width: 200,
		height: 500
	},
	btn: {
		backgroundColor: 'white',
		width: 300,
		height: 30,
		borderRadius: 5,
		fontSize: 18,
		fontWeight: '500'
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		
	}

})