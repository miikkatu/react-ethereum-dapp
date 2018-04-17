import { handleAction } from 'redux-actions';

import * as actions from './actions';

const state = handleAction(
  actions.myAction,
  (state, action) => ({
    myResult: action.payload || state
  }),
  {}
);

export default {
  state
};
