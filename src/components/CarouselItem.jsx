import React from 'react';
import PropTypes from 'prop-types';
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
  </>
);
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
}
export default CarouselItem;