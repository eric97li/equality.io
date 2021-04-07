import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MapScreen from '../MapScreen.js';
import Map from '../Map.js';
import App from '../App.js';

// Mock Configuration
jest.mock('react-native-maps', () => {
	const React = require('react');
	return class MockMapView extends React.Component {
		static Marker = (props) =>
			React.createElement('Marker', props, props.children);
		// static propTypes = { children: React.PropTypes.any };

		render() {
			return React.createElement('MapView', this.props, this.props.children);
		}
	};
});

jest.useFakeTimers();
configure({ adapter: new Adapter() });

describe('<MapScreen/>', () => {
	it('MapScreen originally has 4 children', async () => {
		const tree = await renderer.create(<MapScreen />).toJSON();
		expect(tree.children.length).toBe(4);
		expect(tree).toMatchSnapshot();
	});
	it('Correct Month displayed originally', async () => {
		const tree = await renderer.create(<MapScreen />).toJSON();
		const date = new Date();
		const month = date.toLocaleString('default', { month: 'long' });
		expect(tree.children[0].children[0]).toBe(month);
	});

	const region = {
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.2,
		longitudeDelta: 0.2,
	};
	const points = [
		{
			'title': 'Disability',
			'Day': '9',
			'description': 'Harrassment',
			'IncidentID': '1457',
			'latitude': 37.78825,
			'Location': 'San Francisco',
			'longitude': -122.4324,
			'Month': '6',
			'Year': '2020',
		},
	];
	it('<Map /> has right props', async () => {
		const wrapper = mount(<Map region={region} points={points} />);
		// console.log(wrapper.props().region);
		// console.log('Children' + wrapper.children().length);
		expect(wrapper.props().region).toBe(region);
		expect(wrapper.props().points).toBe(points);
		// expect(tree.children[0].children[0]).toBe(month);
	});

	it('<Map /> has one point for every single prop', async () => {
		const wrapper = mount(<Map region={region} points={points} />);
		// console.log(wrapper.props().region);
		console.log(wrapper.find('MapView').to.have);
		console.log('Children' + wrapper.children().length);
	});

	//On button change, components are correct

	//On slide, the month is accurate

	//On slide, the filtering is accurate
});

// it('Map has one point for every single prop', async () => {
// 	const tree = await renderer.create(<Map points = {data} region = {region}/>).toJSON();
// 	console.log(tree);
// });

//Map
// });

//Heatmap has one point for every single prop
