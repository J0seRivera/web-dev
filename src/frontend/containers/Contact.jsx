import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Contact.scss';
import brand from '../assets/static/name.PNG';
const Contact = () => (
  <>
    <Header />
    <div className="contact__container">
      <h1 className="Contact__title" align="center">Contáctanos</h1>
      <div className="row">

        <div className="col-md-4">

          <div className="container">

            <div className="aboutUs__Content">
              <h3 className="tiform">Información del Contacto</h3>
              <br></br>
              <table className="table table-borderless" className="tiform">
                <thead>
                  <th>PREMIUM DELUXE MOTORSHOP</th>
                </thead>
                <tbody>
                  <tr>Concesionaría de Autos Usados</tr>
                  <br></br>
                  <tr>Calle Santander, Zona 2</tr>
                  <tr>Panajachel,Sololá. Guatemala</tr>
                  <br></br>
                  <tr>PO BOX 63319</tr>
                  <br></br>
                  <tr>Teléfono: 7762-1234</tr>
                  <br></br>
                  <tr>Móvil: 1234-5678</tr>
                  <br></br>
                  <tr>Correo Electrónico:</tr>
                  <tr><a href="www.gmail.com">deluxemotorshop@premium.com</a></tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container" >
            <div className="main__content">
              <div className="aboutUs__Content">
                <h4>Completa el Formulario</h4>
                <form>
                  <div className="md-4">
                    <label>Nombres</label>
                    <input placeholder="Ingrese Nombre" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label>Apellidos</label>
                    <input placeholder="Ingrese Apellido" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label>Correo Electrónico</label>
                    <input placeholder="example@org" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label>Número de telefono</label>
                    <input placeholder="1234-5678" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label>Sugerencias</label>
                    <textarea placeholder="Escriba sus dudas o sugerencias" className="form-control" />
                  </div>

                  <section className="main__filter-button">
                    <button type="sucess" className="btn btn-success">Enviar</button>
                  </section>
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container">

            <h4 className="tiform">Ubícanos</h4>

          </div>
        </div>

      </div>
    </div>
    <Footer />
  </ >
);

export default Contact;