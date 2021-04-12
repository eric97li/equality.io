import React from 'react';
import renderer from 'react-test-renderer';


import fetch from '../fetch.js'

test('fetchPostsList中的回调函数应该能够被调用', async () => {
  expect.assertions(2);
  let mockFn = jest.fn();
  await fetch.fetchPostsList(mockFn);
  await fetch.fetchPostsList2(mockFn);

  // 断言mockFn被调用
  expect(mockFn).toBeCalled();
})
