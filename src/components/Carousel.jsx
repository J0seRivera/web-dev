import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <div className="main__content">
    <section className="carousel">
      <div className="carousel__container">
        {children}
      </div>
    </section>
  </div>
);

export default Carousel;