import React, { useState, useEffect } from 'react';
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

const SearchView = () => {
  const [vehicles, setVehicles] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVehicles(data));
  }, []);
  console.log(vehicles);
  return (
    <div className="App">
      <Header />
      <CarIni />
      <Search />
      {vehicles.mylist.length > 0 &&
        <Favorites />
      }

      <Categories title="Autos recientemente ingresados" />

      <MainSection>
        <Filter />
        <Carousel>
          {vehicles.trends.map(item =>
            <CarouselItem key={item.id}{...item} />
          )}
        </Carousel>
      </MainSection>
      <Footer />
    </div>
  );
}

export default SearchView;