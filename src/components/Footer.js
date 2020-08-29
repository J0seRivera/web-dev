import React from 'react';
import logo from '../images/icoima.PNG';
import brand from '../images/name.PNG';

class Footer extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Footer;