/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import { loginUser } from '../actions';
import googleIcon from '../assets/static/icons/google-icon.webp';
import twitterIcon from '../assets/static/icons/twitter-icon.webp';
import Layout from '../components/Layout';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  //si solo recive un parametro se puede colocar sin los parentecis
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };
  return (
    <Layout>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicio Sesión</h2>
          <form action='' className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='Login__input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='Login__input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='Login__button' type="submit">Iniciar sesion</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='Google' />
              Iniciar sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              Iniciar sesión con Twitter
            </div>
          </section>
          <p className='login__container-register'>
            No tienes ninguna cuenta
            <Link to='/register'> Regístrate</Link>
          </p>
        </section>
      </section>
    </Layout>

  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};


export default connect(null, mapDispatchToProps)(Login);
