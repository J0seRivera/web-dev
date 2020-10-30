import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './routes/App';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState);

delete window.__PRELOADED_STATE__;
/*import Mainpage from './pages/Mainpage';*/
const mainPage = document.getElementById('root');

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  mainPage,
);
