import React from 'react';
import '../assets/styles/components/Catalog.scss';

const ListCar = () => (
    <>

        <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="https://s3.amazonaws.com/gt7sp-prod/livery/69/31/36/5846253973614363169_23.jpg" alt="Cinque Terre" width="600" height="400" />
                </a>
                <div className="card-body">
                <h5 class="card-title">Volksvagen VBochido 2020</h5>
                <div>Q.3000</div>
                    <a href="#" class="btn btn-primary">Más Informmación</a>
                </div>
            </div>
        </div>

        <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="https://s3.amazonaws.com/gt7sp-prod/livery/69/31/36/5846253973614363169_23.jpg" alt="Cinque Terre" width="600" height="400" />
                </a>
                <div className="card-body">
                <h5 class="card-title">Volksvagen VBochido 2020</h5>
                <div>Q.3000</div>
                    <a href="#" class="btn btn-primary">Más Informmación</a>
                </div>
            </div>
        </div>

        

    </>

);

export default ListCar;