import React from 'react';
import '../assets/styles/components/CarIni.scss';

const CarIni = () => (

  <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
    <div className='carousel-inner'>

      <div className='carousel-item active'>
        <img
          className='bann'
          src='https://www.fordguatemala.com/images/ford-vehiculos-nuevo.jpg '
          alt='First slide'
        />
      </div>
      <div className='carousel-item'>
        <img
          className='bann'
          src='https://s3.amazonaws.com/nexu-ghost-blog/2018/11/Autos-premium-M-xico.jpg '
          alt='...'
        />
      </div>
      <div className='carousel-item'>
        <img
          className='bann'
          src='https://www.eluniverso.com/sites/default/files/styles/img-patrocinada-1800x500/public/fotos/2019/03/portada-volkswagen.jpg?itok=ITXhiZOR '
          alt='...'
        />
      </div>

    </div>
  </div>

);

export default CarIni;
