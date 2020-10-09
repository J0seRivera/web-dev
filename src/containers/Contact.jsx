import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Header />
    <h1 className="main__title" align="center">Ingresa tus datos, para realizar la Consulta</h1> 
       
       <div className="container" >
         
         <div className="main__content">
       <form>
         <div className="md-3">
         <label>Nombres</label>
         <input placeholder="Ingrese Nombre" className="form-control" />
         </div>
         <div className="md-3">
         <label>Apellidos</label>
          <input placeholder="Ingrese Apellido" className="form-control"/>
         </div>
         <div className="md-3">
         <label>Correo Electrónico</label>
          <input placeholder="example@org" className="form-control"/>
         </div>
         <div className="md-3">
         <label>Número de telefono</label>
          <input placeholder="1234-5678" className="form-control"/>
         </div>
         <div className="md-3">
         <label>Sugerencias</label>
         <textarea placeholder="Escriba sus dudas o sugerencias" className="form-control"/>
         </div>
       </form>
       <section className="main__filter-button">
        <button type="button" className="btn btn-success">Enviar</button>
      </section>
       </div>
      
       </div>
    <Footer />
  </ >
);

export default Contact;