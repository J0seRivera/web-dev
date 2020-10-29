import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Favorites.scss';

const Favorites = ({ myList }) => {
  return (
    <section className="container__favorites">
      <Categories title="Mi lista de Favoritos" />
      <Carousel>
        {myList.map(item =>
          <CarouselItem
            key={item.id}
            {...item}
            isList
          />
        )}
      </Carousel>
    </section>
  )
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Favorites);