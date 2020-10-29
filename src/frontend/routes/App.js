import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchView from '../containers/SearchView';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Catalog from '../containers/Catalog';
import Contact from '../containers/Contact';
import AboutUs from '../containers/AboutUs';
import InsertCar from '../containers/InsertCar';
import AddUser from '../containers/AddUser';
import ShowDetails from '../containers/ShowDetails';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchView} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/nosotros" component={AboutUs} />
      <Route exact path="/insert" component={InsertCar} />
      <Route exact path="/adduser" component={AddUser} />
      <Route exact path="/details/:id" component={ShowDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;