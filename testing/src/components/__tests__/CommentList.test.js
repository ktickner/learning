import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const comments = ['Comment 1', 'Comment 2'];

beforeEach(() => {
  const initialState = {
    comments,
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(comments.length);
});

it('shows the text for each comment', () => {
  wrapped.find('li').forEach((li, index) => {
    expect(li.render().text()).toContain(comments[index]);
  });
});