import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/static/name.PNG';
//import '../assets/styles/components/Header.scss'
const HeaderS = () => (
  <header className='header__login'>
    <div className='container'>
      <figure className='logo'>
        <Link to='/'>
          <img src={brand} height='100' alt='logo' />
        </Link>
      </figure>
    </div>
  </header>
);

export default HeaderS;
