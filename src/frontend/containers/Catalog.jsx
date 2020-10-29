import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Filter from '../components/Filter';
import Carousel from '../components/Carousel';
import ListCar from '../components/ListCar';
import Footer from '../components/Footer';

const Catalog = () => (
  <>
    <Header />
    <MainSection>
      <Filter />
      <Carousel>
        <ListCar />
      </Carousel>
    </MainSection>
    <Footer />
  </>

);

export default Catalog;
