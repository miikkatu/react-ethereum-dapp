import { handleAction } from 'redux-actions';

import * as actions from './actions';

const myReducer = handleAction(
  actions.myAction,
  (state, action) => action.payload || state,
  {}
);

export default myReducer;
