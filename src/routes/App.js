import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchView from '../containers/SearchView';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchView} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;