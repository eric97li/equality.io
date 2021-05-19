import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	StyleSheet,
	View,
	Text,
	Dimensions,ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

//https://snack.expo.io
export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	} 

	render() {
		return (
			<ScrollView>
                      <View style={{padding:10,backgroundColor:'white',}} >
			<View style={styles.center}>
				{/* <Text style={{fontSize:18,fontWeight:'600'}}>Aboutinfo</Text>  */}
			</View>
			
			<View style={styles.mt1}>
				<Text style={styles.f1}> Equality.io is a reporting app to spread and bring awareness to discrimination and violations of
rights (e.g., racial equality, rape, abuse, gender, Black Lives Matter). Through live data
accumulated reported by people here in the U.S. and the world, violations can be visualized,
mapped, and reported to instigate change. Users can create reports which are then posted as
violation incidences on a map. Areas of hotspots/heatmaps, time/dates, and location filters are
visualized on a world map. </Text>
			</View>
			
			
		  
				</View>
            
            </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	f1:{
      fontSize:20,
	  lineHeight:30,
	},
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
		fontSize:20
		
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
		justifyContent: 'center'

	}

})