import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
const Contact = () => (
  <>
    <Header />
    <div className="container">

      <div className='container__grid'>
        <Filter />
        <div className="main__content">
          <p>contactame</p>
        </div>
      </div>


    </div>
    <Footer />
  </ >
);

export default Contact;