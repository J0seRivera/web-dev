import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import plus from '../assets/static/icons/plus-icon.png';
const CarouselItem = () => (
  <>
    <div className="carousel-item_1">
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

    <div className="carousel-item_1">
      <img className="carousel-item__img"
        src="https://img.motoryracing.com/noticias/portada/25000/25404-n.jpg"
        alt="auto" />
      <div className="carousel-item__details">
        <div>
          <img src={plus} alt="plus icon" />
        </div>
        <p className="carousel-item__details--title">Audi</p>
        <p className="carousel-item__details--subtitle">Saloon</p>
        <p className="carousel-item__details--subtitle">2018</p>
      </div>
    </div>

    <div className="carousel-item_1">
      <img className="carousel-item__img"
        src="https://s3.amazonaws.com/gt7sp-prod/livery/69/31/36/5846253973614363169_23.jpg"
        alt="auto" />
      <div className="carousel-item__details">
        <div>
          <img src={plus} alt="plus icon" />
        </div>
        <p className="carousel-item__details--title">Audi</p>
        <p className="carousel-item__details--subtitle">Saloon</p>
        <p className="carousel-item__details--subtitle">2018</p>
      </div>
    </div>

    <div className="carousel-item_1">
      <img className="carousel-item__img"
        src="https://cdn.motor1.com/images/mgl/42xwo/s3/toyota-hilux-mako---nova-zelandia.jpg"
        alt="auto" />
      <div className="carousel-item__details">
        <div>
          <img src={plus} alt="plus icon" />
        </div>
        <p className="carousel-item__details--title">Audi</p>
        <p className="carousel-item__details--subtitle">Saloon</p>
        <p className="carousel-item__details--subtitle">2018</p>
      </div>
    </div>

    

    
  </>
);

export default CarouselItem;