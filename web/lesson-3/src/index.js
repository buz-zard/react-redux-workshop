import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {init, store} from './config';
import App from './components/App';
import './index.css';


init();

const ReduxApp = () =>
  <Provider store={store}>
    <App />
  </Provider>;


ReactDOM.render(<ReduxApp />, document.getElementById('root'));
