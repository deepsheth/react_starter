import React from 'react';
import { mount } from 'enzyme'
import App from './components/App'
import { isExpressionWrapper } from '@babel/types';

/*

// Shallow Render test

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('Show correct number of CommentBoxes', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
});

*/

/* 
// Full rendering
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />)
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
  it('has a textarea that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has an empty textarea on submission', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });

    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(find('textarea').prop('value')).toEqual("")
  });
});

*/