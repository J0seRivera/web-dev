import React from 'react';
import HeaderS from '../components/HeaderS';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className="App">
    <HeaderS />
    {children}
    <Footer isLogin />
  </div>
);

export default Layout;