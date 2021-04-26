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
export default class Disclaimer extends Component {
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
				<Text style={{fontSize:18,fontWeight:'600'}}>Disclaimers</Text> 
			</View>
			
			<View style={styles.mt1}>
				<Text> 1) Ripple cannot guarantee the accuracy of any event published by users.  </Text>
			</View>
			<View style={styles.mt1}>
				<Text>2) The events that users publish in ripple only indicate their personal positions and opinions, and do not 
represent the positions or opinions of ripple. As an event publisher, he / she shall be responsible for the published 
content on his / her own. All disputes arising from the published content shall be borne by the publisher of the content.
 Ripple does not bear any legal and joint liability.</Text>
			</View>
			<View style={styles.mt1}>
               <Text>3) For the network service interruption or other defects caused by force majeure or reasons beyond ripple's 
control, ripple will not bear any responsibility, but will try its best to reduce the loss and impact caused to users.</Text>
			</View>
		  
				</View>
            
            </ScrollView>
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

