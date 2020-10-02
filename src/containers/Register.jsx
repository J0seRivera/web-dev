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
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button">Registrarme</button>
        </form>
        <div className="login__container--inicio">
          <Link to='/login'>Iniciar sesión</Link>

        </div>
      </section>
    </section>
  </Layout>
);

export default Registrer;