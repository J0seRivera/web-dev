import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/icons/google-icon.webp'
import twitterIcon from '../assets/static/icons/twitter-icon.webp'
import Layout from '../components/Layout';
const Login = () => (
  <Layout>
    <section className="login">
      <section className="login__container">
        <h2>Inicio Sesión</h2>
        <form action="" className="login__container--form">
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button">Iniciar sesion</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" />Recuérdame
          </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" />
                   Iniciar sesión con Google
        </div>
          <div>
            <img src={twitterIcon} alt="Twitter" />
                     Iniciar sesión con Twitter
        </div>
        </section>
        <p className="login__container-register">No tienes ninguna cuenta
        <Link to='/register'> Regístrate</Link></p>
      </section>
    </section>
  </Layout>

);

export default Login;