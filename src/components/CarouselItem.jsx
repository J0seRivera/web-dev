import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import plus from '../assets/static/icons/plus-icon.png';
const CarouselItem = ({ cover, title, year }) => (
  <>
    <div className="carousel-item_1">
      <img className="carousel-item__img"
        src={cover}
        alt={title} />
      <div className="carousel-item__details">
        <div>
          <img src={plus} alt="plus icon" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{title}</p>
        <p className="carousel-item__details--subtitle">{year}</p>
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