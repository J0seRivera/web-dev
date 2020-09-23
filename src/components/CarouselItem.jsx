import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
import plus from '../assets/static/icons/plus-icon.png';
const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img"
      src="https://s1.eestatic.com/2017/11/17/motor/coches/tesla-motors/Tesla_Roadster-Coche_electrico-Tesla_Motors_262735969_54380152_1024x576.jpg"
      alt="auto" />
    <div className="carousel-item__details">
      <div>
        <img src={plus} alt="plus icon" />
      </div>
      <p className="carousel-item__details--title">Tesla</p>
      <p className="carousel-item__details--subtitle">Roadster</p>
      <p className="carousel-item__details--subtitle">2020</p>
    </div>
  </div>
);

export default CarouselItem;