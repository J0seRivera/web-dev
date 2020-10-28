import React from 'react';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Favorites.scss'
const Favorites = () => (
  <section className="container__favorites">
    <Categories title="Mi lista de Favoritos" />
    <Carousel>
      <CarouselItem />
    </Carousel>
  </section>
);

export default Favorites;