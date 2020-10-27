import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/InsertCar.scss'

const AddUser = () => (
    <>
        <Header />

        <h1 className="Contact__title" align="center">Agregar nuevo Usuario</h1>

        <div className="container" >

            <div className="aboutUs__Content">
                <form role="form">

                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="inputname" className="tiform">Nombres</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputname2" className="tiform">Apellidos</label>
                            <input type="text" className="form-control" id="name2" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputage" className="tiform">Edad</label>
                            <input type="text" className="form-control" id="age" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4" className="tiform">Correo Electrónico</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4" className="tiform">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress" className="tiform">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity" className="tiform">Municipio</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputState" className="tiform">Departamento</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputZip" className="tiform">Imagen de Referencia</label>
                            <input type="file" id="exampleInputFile" className="tiform" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck" className="tiform">
                                Check me out
                        </label>
                        </div>
                    </div>
                    <div className="botonf">
                        <button type="submit" className="btn btn-success pull-right">Enviar</button>
                        <button type="submit" className="btn btn-danger ">Cancelar</button>
                    </div>
                </form>

            

            </div>
        </div>

       


        <Footer />
    </>

);

export default AddUser;