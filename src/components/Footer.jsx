import React from 'react';
import logo from '../assets/static/icoima.PNG';
import brand from '../assets/static/name.PNG';
import '../assets/styles/components/Footer.scss';
const Footer = () => (
  <footer >
    <div className="container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" width="50" />
          <img src={brand} height="100" alt="logo" />
        </div>

        <div className="footer-rigth">
          <p>
            Design with ❤ by <a href="/" target="_blank">UMGDev</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;