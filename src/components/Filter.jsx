import React from 'react';
import '../assets/styles/components/Filter.scss';
const Filter = () => (
  <div className="main__filter">
    <form action="">

      <section className="main__filter-head">
        <h2 className="main__filter-title">Filtrar busqueda</h2>

      </section>

      <section className="main__filter-brand">
        <div className="filter__container">
          <h3 className="filter-subtitles">Por marca</h3>

          <select className="custom-select d-block w-100" id="country" required="">
            <option value="">Marca del vehículo...</option>
            <option value="">Audi</option>
            <option value="">Tesla</option>
            <option value="">Toyota</option>
            <option value="">Nizan</option>
            <option value="">Volkswagen</option>

          </select>

        </div>
      </section>

      <section className="main__filter-model">
        <div className="filter__container">
          <h3 className="filter-subtitles">Por modelo</h3>

          <select className="custom-select d-block w-100" id="country" required="">
            <option value="">Modelo del vehículo...</option>
            <option value="">Amarok</option>
            <option value="">Beetle</option>
            <option value="">Model S</option>
            <option value="">Micra</option>
            <option value="">Cabrio</option>
            <option value="">Cupé</option>
          </select>
        </div>
      </section>

      <section className="main__filter-year">
        <div className="filter__container">
          <h3 className="filter-subtitles">Por año</h3>
          <label htmlFor="formControlRange">Rango de años</label><br />
          <label htmlFor="formControlRange">Desde</label>
          <select className="custom-select d-block w-100" id="country" required="">
            <option value="">Año inicial...</option>
            <option value="">2002</option>
            <option value="">2003</option>
            <option value="">2004</option>
            <option value="">2005</option>
            <option value="">2006</option>
          </select>
          <label htmlFor="formControlRange">Hasta</label>
          <select className="custom-select d-block w-100" id="country" required="">
            <option value="">Año final...</option>
            <option value="">2002</option>
            <option value="">2003</option>
            <option value="">2004</option>
            <option value="">2005</option>
            <option value="">2006</option>

          </select>
        </div>
      </section>

      <section className="main__filter-cost">
        <div className="filter__container">
          <h3 className="filter-subtitles">Por precio</h3>
          <label htmlFor="formControlRange">Rango de precios</label><br />
          <label htmlFor="formControlRange">Desde</label>
          <input type="range" className="form-control-range" id="formControlRange" />
          <label htmlFor="formControlRange">Hasta</label>
          <input type="range" className="form-control-range" id="formControlRange" />

        </div>
      </section>

      <section className="main__filter-button">
        <button type="button" className="btn btn-success">Buscar</button>
      </section>
    </form>
  </div>
);

export default Filter;