import React, { Component } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';

export default class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		if (this.props.currentTabScreen != 'Create Report') {
			this.props.navigation.navigate('Incident Map');
		}
	}

	componentDidUpdate() {}

	render() {
		return (
			<View
				style={{
					width: '50%',
					height: '95%',
					justifyContent: 'center',
					alignSelf: 'center',
					alignContent: 'center',
					alignItems: 'center',
				}}></View>
		);
	}
}
