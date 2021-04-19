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
export default class HelpInfo extends Component {
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
				<Text style={{fontSize:18,fontWeight:'600'}}>HelpInfo</Text>
			</View>
			
			
			<View style={styles.mt1}>
			<Text style={{color:'red',marginRight:20}}>Disability discrimination</Text>	
            <Text> 
Disability discrimination refers to the disability caused by the adverse treatment of disabled people. The United States Disabled Persons Act of 1990 (ADA) is a US law prohibiting the abuse of disabled persons with physical or mental defects, which prevents them from engaging in certain activities.
</Text>
			</View>
			<View style={styles.mt1}>
            <Text style={{color:'red',marginRight:20}}>Age discrimination</Text>	
            <Text> 
            It refers to a view that the elderly are physically or socially weak and therefore discriminate against the elderly. It comes from the stereotype of the elderly. Age discrimination can be accidental or systematic. The first mock exam was first introduced in 1969. It was used by the American Geriatric Robert N. Butler to describe discrimination against the elderly. It was concluded in the same pattern with gender discrimination and racial discrimination.
</Text>
			</View>

			<View style={styles.mt1}>
				<Text style={{color:'red',marginRight:20}}>Racism  </Text>
                <Text>
                Racism refers to a person's attitude of contempt, disgust and exclusion towards people other than his own race, which is manifested in speech and behavior.
                </Text>
			</View>
			<View style={styles.mt1}>
                <Text style={{color:'red',marginRight:20}}>
                Gender discrimination
                </Text>
                <Text>
                Gender discrimination refers to the prejudice on gender, and refers to the unequal treatment of one gender member to another. Especially the unequal treatment of men to women. The inequality between the sexes results in gender discrimination in the society. But it can also be used to refer to any discrimination caused by gender.
                </Text>
                
			</View> 
			<View style={styles.mt1}>
                <Text style={{color:'red',marginRight:20}}>
                Regional discrimination
                </Text>
                <Text>
                Regional discrimination originates from the gradual formation of mobile society, and urban people are living together with groups from other regions as never before. Regional discrimination is inevitable. If this consciousness is not controlled, the rights of those who are discriminated against will be infringed: from the disdain for dialect on the bus, to the signs that shops do not sell goods from a certain place, and the claims of employers that they do not want people from a certain place, so that the banners pulled out by the police station today are all "logical" developments. This will not only hurt the people in Henan who have asked "who did Henan people provoke", but also the people from Jiangxi, Hunan and Northeast China who have suffered similar injuries in other cities and regions. Nowadays, regional discrimination among citizens has become a universal cultural psychology that must be paid attention to.
                </Text>
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