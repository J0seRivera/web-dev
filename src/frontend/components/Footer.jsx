import React from 'react';
import classNames from 'classnames';
import logo from '../assets/static/icoima.PNG';
import '../assets/styles/components/Footer.scss';
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
const Footer = props => {
  const { isLogin, isNotFound } = props;
  const headerClass = classNames('header', {
    isLogin,
    isNotFound,
  });
  return (
    <footer className={headerClass}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="logo" width="50" />    © 2020 Premium Deluxe Motorshop Design with ❤ by <a href="/" target="_blank">UMGDev</a>
          </div>

          <div className="footer-rigth">
            <p>
              Política de Privacidad | Acerca de Nosotros
            </p>

            <h3><GrFacebook />     <GrInstagram />      <GrTwitter />      <SiWhatsapp />     <GrYoutube /></h3>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;