import React from 'react';
import {create} from 'react-test-renderer';
import Report from '../Report';

const tree = create(<Report />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
});