import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/icons/google-icon.webp'
import twitterIcon from '../assets/static/icons/twitter-icon.webp'
import Layout from '../components/Layout';
const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });
  //si solo recive un parametro se puede colocar sin los parentecis
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }
  return (
    <Layout>
      <section className="login">
        <section className="login__container">
          <h2>Inicio Sesión</h2>
          <form action="" className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
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

  )
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);