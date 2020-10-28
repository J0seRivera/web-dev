import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import Layout from '../components/Layout';
const Registrer = () => (
  <Layout>
    <section className="login">
      <section className="login__container">
        <h2>Regístrate</h2>
        <form action="" className="login__container--form">
          <input className="Login__input" type="text" placeholder="Nombre" />
          <input className="Login__input" type="text" placeholder="Correo" />
          <input className="Login__input" type="password" placeholder="Contraseña" />
          <button className="Login__button">Registrarme</button>
        </form>
        <div className="login__container--inicio">
          <Link to='/login'>Iniciar sesión</Link>

        </div>
      </section>
    </section>
  </Layout>
);

export default Registrer;