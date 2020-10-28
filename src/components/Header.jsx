import React from 'react';

import { Link } from 'react-router-dom';

import brand from '../assets/static/name.PNG';
import profile_pic from '../assets/static/icons/user-icon.png';

import '../assets/styles/components/Header.scss';
const Header = () => (
  <header>
    <div className="container">
      <figure className="logo">
        <Link to='/' >
          <img src={brand} height="100" alt="logo" />
        </Link>
      </figure>
      <nav className="menu">
        <ol>
          <li>
            <a className="link" href="#portafolio"> Inicio</a>
          </li>
          <li>
            <a className="link" href="#eventos">Busqueda</a>
          </li>
          <li>
            <Link to='/catalog'>
              Catálogo
            </Link>
          </li>
          <li>
          <Link to='/nosotros'>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to='/contacto'>
              Contacto
            </Link>
          </li>
          <li>
            <Link to='/insert'>
              Registrar vehículo
            </Link>
          </li>
          <li>
            <Link to='/adduser'>
              Registrar Usuario
            </Link>
          </li>
        </ol>
      </nav>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={profile_pic} alt="foto de perfil" />
          <p>Perfil</p>
        </div>

        <ul className="header_menu--container">
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <Link to='/register'>
              Iniciar sesión
            </Link>
          </li>
        </ul>

      </div>
    </div>
  </header>
);

export default Header;