import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormUser from '../components/FormUser';
import '../assets/styles/components/InsertCar.scss'


const AddUser = () => (
  <>
    <Header />
    <div className="fondo">
      <h1 className="Contact__title" align="center">Agregar nuevo Usuario</h1>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <FormUser />
        </div>
      </div>
    </div>
    <Footer />
  </>

);


export default AddUser;