import React from 'react';
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

const SearchView = () => (
  <div className="App">
    <Header />
    <CarIni/>
    <Search />
    <Categories />
    <MainSection>
      <Filter />
      <Carousel>
        <CarouselItem />
      </Carousel>
    </MainSection>
    <Footer />
  </div>
);

export default SearchView;