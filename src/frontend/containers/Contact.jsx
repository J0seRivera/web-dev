import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Contact.scss';
import facebook from '../assets/static/icons/facebook.png';
import insta from '../assets/static/icons/insta.png';
import twit from '../assets/static/icons/twiter.png';
import whats from '../assets/static/icons/whats.png';
import you from '../assets/static/icons/yutub.png';
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Contact = () => (
  <>
    <Header />
    <div className="contact__container">
      <h1 className="Contact__title" align="center">Contáctanos</h1>
      <div className="row">
        <div className="col-md-7">
          <div className="container" >
            <div className="main__content">
              <div className="aboutUs__Content">
                <h3>  Completa el Formulario para realizar tu consulta</h3>
                <form role="form">
                  <div className="md-3">
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
                    <label>Escribe tu comentario</label>
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
            <div className="aboutUs__Content">
              <h3 className="info">Información del Contacto</h3>
              <br></br>
              <table className="table table-borderless" className="tiform">
                <thead>
                  <th>PREMIUM DELUXE MOTORSHOP</th>
                </thead>
                <tbody>
                  <tr>Concesionaría de Autos Usados</tr>
                  <br></br>
                  <tr><HiLocationMarker /> Calle Santander, Zona 2</tr>
                  <tr>Panajachel,Sololá. Guatemala</tr>
                  <br></br>
                  <tr><FaPhoneAlt /> Teléfono: 7762-1234</tr>
                  <br></br>
                  <tr><BsPhone /> Móvil: 1234-5678</tr>
                  <br></br>
                  <tr><MdEmail /> Correo Electrónico:</tr>
                  <tr><a href="www.gmail.com">deluxemotorshop@premium.com</a></tr>
                  <br></br>
                  <tr><th className="info">Siguenos en nuestras Redes Sociales</th></tr>
                  <br></br>
                  <a href="www.facebook.com"> <img src={facebook} height="40" alt="logo" />  </a>
                  <a href="www.instagram.com">  <img src={insta} height="40" alt="logo" />  </a>
                  <a href="www.twitter.com">  <img src={twit} height="40" alt="logo" /> </a>
                  <a href="www.web.whatsapp.com">   <img src={whats} height="40" alt="logo" />  </a>
                  <a href="www.youtube.com">  <img src={you} height="40" alt="logo" /></a>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </ >
);

export default Contact;