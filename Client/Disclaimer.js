import React, { Component } from 'react';
import {
	TouchableOpacity,
	TextInput,
	View,
	Text,
	StyleSheet,
	Modal,
	SafeAreaView,
	Button,
	ScrollView,
} from 'react-native';
export default class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ padding: 10, backgroundColor: 'white' }}>
						<View style={styles.center}>
							<Text style={{ fontSize: 18, fontWeight: '600' }}>
								Ripple disclaimer
							</Text>
						</View>
						{/* <View style={styles.mt1}>
							<Text>October 13, 2020 </Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								{' '}
								1) Ripple is an online shopping platform for you. The company
								has great respect for your personal information and data, and
								will do its best to protect the safety and reliability of your
								personal information and data. This policy applies only to user
								information and data collected and stored by the app. Ripple
								(hereinafter referred to as the application) the application
								attaches great importance to the user privacy policy and
								strictly abides by the relevant laws and regulations. Please
								read this privacy policy carefully before continuing to use it.
								If you continue to use our services, you have fully read and
								understood all the contents of our agreement. This app respects
								and protects the privacy of users who use the service. In order
								to provide you with more accurate and better service, this
								application will use and disclose your personal information in
								accordance with the provisions of this privacy policy. Except as
								otherwise provided in this privacy policy, the app will not
								disclose or provide such information to third parties without
								your prior permission. This privacy policy will be updated from
								time to time. When you agree to the use agreement of this
								application service, it is deemed that you have agreed to all
								contents of this privacy policy.{' '}
							</Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								2) Scope of application (a) when you register the app account,
								you can provide the personal registration information according
								to the requirements of the app Information; (b) when you use the
								application network service or visit the website of the
								application platform, the application will automatically receive
								Collect and record your browser and computer Information on,
								including but not limited to your IP address, browser type,
								language used, and access date And time, software and hardware
								characteristics and information You need web page records and
								other data
							</Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								3) Information use (a) the app will not provide, sell, rent,
								share or trade you with any unrelated third party Personal login
								information for. If we store it, it happens For maintenance or
								upgrade, we will send a push message to inform you in advance.
								Please allow this application to notify you in advance.
							</Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								4) For the purpose of serving users, this application may
								provide you with information that you are interested in by using
								your personal information Including but not limited to You send
								out product and service information, or share information with
								our application partners so that they can send you relevant
								information Information on its products and services (later)
								Your prior consent is required). 3. Information disclosure under
								the following circumstances, the application will be based on
								your personal wishes or legal provisions in whole or in part
								Disclosure of your personal information: (a) we will not
								disclose it to a third party without your prior consent; (b) for
								Provide the products and services you require, but share your
								personal information with a third party; (c) in accordance with
								the law Disclosure to a third party or administrative or
								judicial body according to the relevant provisions of the law or
								the requirements of the administrative or judicial body; (d) If
								you violate the relevant laws and regulations of China or this
								application service agreement or relevant rules, Need to
								disclose to a third party (E) if you are a qualified IP
								complainant and have filed a complaint, you should be the
								respondent Request, to be disclosed to the respondent, so that
								both parties can deal with possible problems Disputes over the
								rights of citizens;
							</Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								5) Use of cookies (a) if you do not refuse to accept cookies,
								this app will be installed on your computer Set or access
								cookies on the so that you can log in or use them The service or
								function of this application platform depends on cookies. Using
								cookies in this app can provide you with more information To
								provide personalized services, including promotion Services. (b)
								You have the right to accept or reject cookies. You can reject
								it by modifying the browser settings Accept cookies. But if you
								choose If you refuse to accept cookies, you may not be able to
								log in or use the app's network services that depend on cookies
								Or function. (c) This policy will apply to information obtained
								through cookies created by this app. 6. This Privacy Policy (a)
								if we decide to change the privacy policy, we will Publish the
								changes as you see fit, So that you can understand how we
								collect and use your personal information, who can access it,
								and Under what circumstances will we disclose This information
							</Text>
						</View>
						<View style={styles.mt1}>
							<Text>
								Contact the customer service of the app immediately so that the
								app can take corresponding measures. Thank you for taking the
								time to understand our exemption! We will do our best to protect
								your personal information and legal rights Thanks again for your
								trust!
							</Text>
						</View> */}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	mt1: {
		marginTop: 10,
	},
	mt: {
		marginTop: 20,
	},
	in_bg: {
		width: 310,
		height: 50,
		backgroundColor: 'white',
		color: 'red',
		padding: 5,
	},
	input: {
		width: 300,
		// height:50
	},
	add_btn: {
		width: 300,
		backgroundColor: '#1E90FF',
		padding: 10,
		marginTop: 30,
		color: '#FFFFFF',
		fontSize: 20,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	md: {
		width: 200,
		height: 500,
	},
	btn: {
		backgroundColor: 'white',
		width: 300,
		height: 30,
		borderRadius: 5,
		fontSize: 18,
		fontWeight: '500',
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
