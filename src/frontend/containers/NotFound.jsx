import React from 'react';
import HeaderS from '../components/HeaderS';
import Footer from '../components/Footer';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (

  <>
    <HeaderS />
    <main className='main'>
      <section>
        <div className='main__text-404'>
          <p className='number animated hinge'>404</p>
        </div>
        <div className='main__text'>
          <p>
            Página no encontrada
          </p>
        </div>
      </section>
    </main>
    <Footer isNotFound />
  </>

);

export default NotFound;
