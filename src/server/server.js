/* eslint-disable global-require */
import React from 'react';
import { renderToString } from 'react-dom/server';
import helmet from 'helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import passport from 'passport';
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';

import ico from '../../public/favicon.ico';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

// body parser
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
//basic strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  return (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="${mainStyles}" type="text/css">
      <link rel="icon" href="${ico}" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Web site created using create-react-app" />
      <title>PD Motor Shop</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="${mainBuild}" type="text/javascript"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    </body>
  </html>
  `);
};

const renderApp = async (req, res) => {
  let initialState;
  const { token, email, name, id } = req.cookies;

  try {
    let vehicleList = await axios({
      url: `${process.env.API_URL}/api/vehicles`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });

    vehicleList = vehicleList.data.data;

    let userVehicles = await axios({
      url: `${process.env.API_URL}/api/user-vehicles/?userId=${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });

    userVehicles = userVehicles.data.data;
    const myList = [];
    userVehicles.forEach((userVehicle) => {
      vehicleList.forEach((vehiculo) => {
        if (vehiculo._id === userVehicle.vehicleId) {
          myList.push(vehiculo);
        }
      });
    });
    initialState = {
      user: {
        id, email, name,
      },
      myList,
      favoritos: [],
      vehiculos: vehicleList.filter(vehiculo => vehiculo.comentario === "full equipo" && vehiculo._id)
    }
  } catch (err) {
    initialState = {
      user: {},
      myList: [],
      favoritos: {},
      vehiculos: []
    }
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = (initialState.user.id);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};


// Obtenemos el atributo rememberMe desde el cuerpo del request
// const { rememberMe } = req.body;

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (err) => {
        if (err) {
          next(err);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
        });

        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: {
        'name': user.name,
        'email': user.email,
        'password': user.password,
      },
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/user-vehicles', async (req, res, next) => {
  try {
    const { body: userVehicle } = req;
    const { token } = req.cookies;

    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userVehicle,
    });

    if (status !== 201) {
      return next(boom.badImplementation());
    }

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete('/user-vehicle/:userVehicleId', async (req, res, next) => {
  try {
    const { userVehicleId } = req.params;
    const { token, id } = req.cookies;

    let userVehicles = await axios({
      url: `${process.env.API_URL}/api/user-vehicle/?userId=${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
    });
    userVehicles = userVehicles.data.data;

    const listDelete = userVehicles.filter((vehiculo) => vehiculo.movieId === userVehicleId);
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/user-vehicles/${listDelete[0]._id}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
