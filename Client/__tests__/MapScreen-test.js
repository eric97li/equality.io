import React from 'react';
import { renderer, mount } from 'react-test-renderer';
import MapScreen from '../MapScreen.js';
import Map from '../Map.js';

jest.useFakeTimers();

//Need to use await because componentDidMount uses fetch
describe('<MapScreen/>', () => {
	it('MapScreen originally has 4 children', async () => {
		const tree = await renderer.create(<MapScreen />).toJSON();
		console.log(tree.children);
		expect(tree.children.length).toBe(4);
		expect(tree).toMatchSnapshot();
	});
	it('Correct Month displayed originally', async () => {
		const tree = await renderer.create(<MapScreen />).toJSON();
		const date = new Date();
		const month = date.toLocaleString('default', { month: 'long' });
		expect(tree.children[0].children[0]).toBe(month);
	});

	//On button change, components are correct

	//On slide, the month is accurate

	//On slide, the filtering is accurate
});

describe('<Map/>', () => {
	it('Map has one point for every single prop', async () => {});

	//Map
});

//Heatmap has one point for every single prop
