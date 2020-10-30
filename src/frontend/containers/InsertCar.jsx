import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCar from '../components/FormCar';
import '../assets/styles/components/InsertCar.scss'
const InsertCar = () => (
  <>
    <Header />
    <div className="fondo">
      <h1 className="Contact__title" align="center">Ingreso de nuevos Automóviles</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <FormCar />
        </div>
      </div>
    </div>
    <Footer />
  </>
);


export default InsertCar;