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

import initialState from './initialState';

const history = createBrowserHistory();
const store = createStore(reducer, initialState);

/*import Mainpage from './pages/Mainpage';*/
const mainPage = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  mainPage,
);
