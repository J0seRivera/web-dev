import React from 'react';
import classNames from 'classnames';
import logo from '../assets/static/icoima.PNG';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {
  const { isLogin, isNotFound } = props;
  const headerClass = classNames('header', {
    isLogin,
    isNotFound,
  });
  return (
    <footer className={headerClass}>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-left'>
            <img src={logo} alt='logo' width='50' />
          </div>

          <div className='footer-rigth'>
            <p>
              Design with ❤ by
              {' '}
              <a href='/' target='_blank'>UMGDev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
