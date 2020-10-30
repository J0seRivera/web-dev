/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import CarIni from '../components/CarIni';
import Search from '../components/Search';
import Categories from '../components/Categories';
import MainSection from '../components/MainSection';
import Filter from '../components/Filter';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import Favorites from '../components/Favorites';

//const API = 'http://localhost:3000/initalState';
const SearchView = ({ favoritos, vehiculos }) => {
  //const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <CarIni />
      <Search />
      {favoritos.length > 0 &&
        <Favorites />}

      <Categories title='Autos recientemente ingresados' />

      <MainSection>
        <Filter />
        <Carousel>
          {vehiculos.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </MainSection>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritos: state.favoritos,
    vehiculos: state.vehiculos,
  };
};

export default connect(mapStateToProps, null)(SearchView);
