import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const add = (a,b) => a + b;

test('adds value together', () => {
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
});