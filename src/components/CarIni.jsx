import React from 'react';

const CarIni = () => (

    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://www.fordguatemala.com/images/ford-vehiculos-nuevo.jpg" className="d-block w-100" alt=""/>
            </div>
            <div className="carousel-item">
                <img src="https://www.diariomotor.com/imagenes/picscache/1920x1600c/audi-a3-sportback-2020-0320-001_1920x1600c.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.eluniverso.com/sites/default/files/styles/img-patrocinada-1800x500/public/fotos/2019/03/portada-volkswagen.jpg?itok=ITXhiZOR" className="d-block w-100" alt="..."/>
            </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>

        
    </div>

);

export default CarIni;