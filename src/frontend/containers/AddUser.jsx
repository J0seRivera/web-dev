/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/InsertCar.scss';

const AddUser = () => (
  <>
    <Header />

    <h1 className='Contact__title' align='center'>Agregar nuevo Usuario</h1>
    <div className='row'>
      <div className='col-md-3' />

      <div className='col-md-6'>
        <div className='container'>
          <div className='main__content'>
            <div className='aboutUs__Content'>
              <form role='form'>
                <div className='form-row'>
                  <div className='form-group col-md-5'>
                    <label htmlFor='inputname'>Nombres</label>
                    <input type='text' className='form-control' id='name' />
                  </div>
                  <div className='form-group col-md-5'>
                    <label htmlFor='inputname2'>Apellidos</label>
                    <input type='text' className='form-control' id='name2' />
                  </div>
                  <div className='form-group col-md-2'>
                    <label htmlFor='inputage'>Edad</label>
                    <input type='text' className='form-control' id='age' />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputEmail4'>Correo Electrónico</label>
                    <input type='email' className='form-control' id='inputEmail4' />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputPassword4'>Contraseña</label>
                    <input type='password' className='form-control' id='inputPassword4' />
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='inputAddress'>Dirección</label>
                  <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' />
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputCity'>Municipio</label>
                    <input type='text' className='form-control' id='inputCity' />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputState'>Departamento</label>
                    <select id='inputState' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className='form-group col-md-4'>
                    <label htmlFor='inputZip'>Imagen de Referencia</label>
                    <input type='file' id='exampleInputFile' />
                  </div>
                </div>

                <div className='form-group'>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' id='gridCheck' />
                    <label className='form-check-label' htmlFor='gridCheck'>
                      Check me out
                    </label>
                  </div>
                </div>
                <div className='botonf'>
                  <button type='submit' className='btn btn-success pull-right'>Enviar</button>
                  <button type='submit' className='btn btn-danger '>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

);

export default AddUser;
