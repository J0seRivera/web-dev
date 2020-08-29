import React from 'react';
import brand from '../images/name.PNG';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <figure className="logo">
          <img src={brand} height="100" alt="logo" />
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
              <a className="link" href="#contacto">Como comprar</a>
            </li>
            <li>
              <a className="link" href="#contacto">Inventario</a>
            </li>
            <li>
              <a className="link" href="#contacto">Sobre nosotros</a>
            </li>
            <li>
              <a className="link" href="#contacto">contacto</a>
            </li>
          </ol>
        </nav>
      </div>
    )
  }
}

export default Header;