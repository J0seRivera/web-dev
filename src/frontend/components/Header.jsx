
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import brand from '../assets/static/name.PNG';
import profile_pic from '../assets/static/icons/user-icon.png';
import '../assets/styles/components/Header.scss';
const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header >
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

          </ol>
        </nav>

        <div className="header__menu">
          <div className="header__menu--profile">
            {hasUser ?
              <img src={gravatar(user.email)} alt="user.email" />
              :
              <img src={profile_pic} alt="foto de perfil" />
            }
            <p>Perfil</p>
          </div>
          <ul className="header_menu--container">
            {hasUser ?
              <>
                <li><a href="#">{user.name || user.email}</a></li>
                <li>
                  <Link to='/'>
                    Ver Perfil
                </Link>
                </li>
                <li>
                  <Link to="edituser">
                    Editar Perfil
                  </Link>
                </li>
                <li>
                  <Link to='/adduser'>
                    Agregar Nuevo Usuario
                </Link>
                </li>
                <li>
                  <Link to='/insert'>
                    Agregar Nuevo Vehículo
                </Link>
                </li>
                <li>
                  <a href='#logout' onClick={handleLogout}>Cerrar Sesión</a>
                </li>
              </>
              :
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

