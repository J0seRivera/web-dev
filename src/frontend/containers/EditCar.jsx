
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCar from '../components/FormCar';
import '../assets/styles/components/InsertCar.scss'

const EditCar = () => (
  <>
    <Header />
    <div className="fondoedit">
      <h1 className="Contact__title" align="center">Editar la información del vehiculo</h1>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <FormCar />
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default EditCar;