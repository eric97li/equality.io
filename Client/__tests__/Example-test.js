import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App.js';

jest.useFakeTimers();
it('works', () => {
	expect(1).toBe(1);
});

describe('<App />', () => {
	it('has 1 child', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree.children.length).toBe(1);
	});
});
