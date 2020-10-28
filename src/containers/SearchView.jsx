import React, { useState, useEffect } from 'react';
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
import useInitialState from '../hooks/useInitialState';

//const API = 'http://localhost:3000/initalState';
const SearchView = ({ myList, trends }) => {
  //const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <CarIni />
      <Search />
      {myList.length > 0 &&
        <Favorites />
      }

      <Categories title="Autos recientemente ingresados" />

      <MainSection>
        <Filter />
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id}{...item} />
          )}
        </Carousel>
      </MainSection>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
  };
};

export default connect(mapStateToProps, null)(SearchView);