import React from 'react';
import plus from '../images/icons/plus-icon.png';

class Mainsection extends React.Component {
  render() {
    return (

      <section>
        <div className="container">
          <div className="containre__grid">
            <div className="main__filter">
              <form action="">

                <section className="main__filter-head">
                  <h2 className="main__filter-title">filtrar Busqueda</h2>

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


            <div className="main__content">
              <section className="carousel">
                <div className="carousel__container">

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://s1.eestatic.com/2017/11/17/motor/coches/tesla-motors/Tesla_Roadster-Coche_electrico-Tesla_Motors_262735969_54380152_1024x576.jpg"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Tesla
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Roadster
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2020
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>

                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/4024484/pexels-photo-4024484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="carousel-item__img"
                      src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="auto" />
                    <div className="carousel-item__details">
                      <div>
                        <img src={plus} alt="plus icon" />
                      </div>
                      <p className="carousel-item__details--title">
                        Marca
                    </p>
                      <p className="carousel-item__details--subtitle">
                        Modelo
                    </p>
                      <p className="carousel-item__details--subtitle">
                        2008
                    </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Mainsection;