import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/AboutUs.scss';
const AboutUs = () => (
    <>
        <Header />
        <div className="container">
            <div className="main__content">
                <div className="aboutUs__Content">
                    <h2 className="aboutUs__Content-tittle">¿Quienes somos?</h2>

                    <p>Somos empresa guatemalteca con más de diez años de experiencia en la renta de vehículos, dedicada y comprometida a satisfacer las necesidades en transporte de nuestros clientes brindándoles mejores autos a los mejores pecios del mercado. Comprometidos para ofrecer los más altos estándares de calidad y con los precios más económicos contando con una de las más grandes flotillas a nivel nacional.
                    Trabajamos distintos modelos y tarifas para ciudad y resguardar la economía de todos nuestros clientes.</p>
                    <p>Mejoramos cualquier precio. ¡ COMPRUEBELO !</p>
                    <p>Las tarifas más económicas en toda  GUATEMALA</p>
                    <h3 className="aboutUs__Content-tittle">Visión</h3>
                    <p>SERVICIO DE EXCELENCIA  Nuestro compromiso constante, es satisfacer las necesidades Y expectativas de nuestros clientes.</p>
                    <p> ECONOMIA Como estrategia de mercado contamos con las mejores tarifas y los mejores precios.</p>
                    <p>CALIDAD Nuestra visión es mantener un alto nivel de calidad con nuestros clientes y con nuestro servicio.</p>
                </div>
            </div>
        </div>

        <Footer />
    </>

);

export default AboutUs;