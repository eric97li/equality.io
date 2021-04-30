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
export default class SupportInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
            <ScrollView>
            <View style={styles.center,[{padding:10,backgroundColor:'white',}]} >
            <View style={styles.mt1}>
				<Text style={styles.f1}>
                USCIS: 800-375-5283 www.uscis.gov
                 </Text>
			</View>
			<View style={styles.mt1}>
				<Text style={styles.f1}>
                Disabled community: 562- 803-4606 www.thearc.org
                 </Text>
			</View>
			<View style={styles.mt1}>
				<Text style={styles.f1}>
                PAF: 1-877-696-6775 opa.hhs.gov
                 </Text>
			</View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Consumer credit consulting service: 800-750-2227 www.credit.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Consumer complaint hotline: 800-952-5225 consumercomplaints.fcc.gov
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Legal Aid Foundation: 213-487-3320 www.legalaidfoundation.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                APAC CPAF hotline: 800-339-3940 www.nurturingchange.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                FEMA: 202-566-1600 www.fema.gov
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                American Red Cross: 213-739-5200 www.redcross.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Domestic Violence Hotline: 800-799-7233 www.thehotline.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Elderly care assistance hotline: 800-843-5678 www.carelink.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Child abuse and neglect: 800-540-4000 www.cdc.gov
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Centre for missing and exploited children: 800-422-4453 www.icmec.org
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text style={styles.f1}>
                Child and family services: 213-427-2700 www.linkhc.org.au
                </Text>
            </View>
            <View style={styles.mt1}>
                <Text>
             
                </Text>
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