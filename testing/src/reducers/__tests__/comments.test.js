import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from "actions/types";

it('handles actions of type SAVE_COMMENT', () => {
  const payload = 'New Comment';
  const action = {
    payload,
    type: SAVE_COMMENT,
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([payload]);
});

it('handles action with unknown type', () => {
  const state = ['initial state'];
  const action = {
    type: 'fake_type',
    payload: 'additional state',
  };

  const newState = commentsReducer(state, action);

  expect(newState).toEqual(state);
});