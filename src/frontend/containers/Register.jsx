/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/components/Login.scss';
import Layout from '../components/Layout';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };
  return (
    <Layout>
      <section className='login'>
        <section className='login__container'>
          <h2>Regístrate</h2>
          <form action='' className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='Login__input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
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
            <button type='submit' className='Login__button'>Registrarme</button>
          </form>
          <div className='login__container--inicio'>
            <Link to='/login'>Iniciar sesión</Link>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Register);
