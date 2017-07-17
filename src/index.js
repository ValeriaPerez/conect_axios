import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Curso from './app/containers/Curso';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Curso}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
