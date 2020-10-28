import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/InsertCar.scss'
const InsertCar = () => (
    <>
        <Header />
        <h1 className="Contact__title" align="center">Ingreso de nuevos Automóviles</h1>

        <div className="container" >

            <div className="aboutUs__Content">
                <form role="form">
                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Modelo del Vehículo</label>
                                <input type="text" class="form-control" placeholder="Modelo..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Marca</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Marca...</option>
                                    <option value="">Audi</option>
                                    <option value="">Tesla</option>
                                    <option value="">Toyota</option>
                                    <option value="">Nizan</option>
                                    <option value="">Volkswagen</option>

                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Color</label>
                                <input type="text" class="form-control" placeholder="Color" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Tipo</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Type...</option>
                                    <option value="">Sedan</option>
                                    <option value="">Pick Up</option>
                                    <option value="">Camioneta</option>
                                    <option value="">Picanto</option>
                                    <option value="">Volkswagen</option>

                                </select>
                            </div>
                        </div>

                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Motor</label>
                                <input type="text" class="form-control" placeholder="motor" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Combustible</label>
                                <input type="text" class="form-control" placeholder="Combustible..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Status</label>
                                <input type="text" class="form-control" placeholder="state" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Estado del Vehículo</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Estado..</option>
                                    <option value="">Nuevo</option>
                                    <option value="">Seminuevo</option>
                                    <option value="">Usado</option>
                                    <option value="">Viejo</option>

                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="tiform">Año</label>
                                <input type="text" class="form-control" placeholder="Año" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="tiform">Kilometraje</label>
                                <input type="text" class="form-control" placeholder="Kilometraje" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="tiform">Precio</label>
                                <input type="text" class="form-control" placeholder="Precio" />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="tiform">Comentarios</label>
                                <textarea placeholder="Escriba sus dudas o sugerencias" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="tiform">Imagen de Referencia</label>
                                <label for="exampleInputFile">File input</label>
                                <input type="file" id="exampleInputFile" className="tiform" />
                            </div>
                        </div>
                    </div>

                    <section className="section__insert-button">
                        <div className="botonf">
                            <button type="submit" className="btn btn-success pull-right">Enviar</button>
                            <button type="submit" className="btn btn-danger ">Cancelar</button>
                        </div>
                    </section>

                </form>
            </div>
        </div>
        <Footer />
    </>
);

export default InsertCar;