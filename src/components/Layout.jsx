import React from 'react';

import HeaderS from '../components/HeaderS';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className="App">
    <HeaderS />
    {children}

    <Footer />
  </div>
);

export default Layout;