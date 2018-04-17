import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { MainView } from './views';

import reducers from './redux/reducers';
import './assets/stylesheets/stylesheets.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = applyMiddleware(routerMiddleware(history));

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating and for redux devtools
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainView} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
