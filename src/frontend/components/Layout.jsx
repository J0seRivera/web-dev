import React from 'react';
import HeaderS from './HeaderS';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <HeaderS />
    {children}
    <Footer isLogin />
  </div>
);

export default Layout;
