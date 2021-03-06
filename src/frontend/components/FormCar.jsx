import React from 'react';

const FormCar = () => (

  <>
    <div className="container" >
      <div className="main__content">
        <div className="aboutUs__Content">
          <form role="form">
            <div className="row">

              <div className="col-md-6">
                <div className="form-group">
                  <label >Fecha de Ingreso</label>
                  <input type="date" class="form-control" placeholder="Modelo..." />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Marca</label>
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
                  <label >Modelo</label>
                  <input type="text" class="form-control" placeholder="Modelo..." />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Año del Vehículo</label>
                  <input type="text" class="form-control" placeholder="1900" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Tipo</label>
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
                  <label >Color</label>
                  <input type="text" class="form-control" placeholder="Color" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Combustible</label>
                  <input type="text" class="form-control" placeholder="Combustible..." />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Transmisión</label>
                  <select className="custom-select d-block w-100" id="country" required="">
                    <option value="">Seleccione una opción</option>
                    <option value="">Automático</option>
                    <option value="">Manual</option>
                    <option value="">SemiAutomático</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Motor</label>
                  <input type="text" class="form-control" placeholder="motor" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Kilometraje</label>
                  <input type="text" class="form-control" placeholder="Kilometraje" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Estado del Vehículo</label>
                  <select className="custom-select d-block w-100" id="country" required="">
                    <option value="">Estado..</option>
                    <option value="">Nuevo</option>
                    <option value="">Seminuevo</option>
                    <option value="">Usado</option>
                    <option value="">Viejo</option>

                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label >Precio</label>
                  <input type="text" class="form-control" placeholder="Precio" />
                </div>
              </div>


              <div className="col-md-6">
                <div className="form-group">
                  <label >Comentarios</label>
                  <textarea placeholder="Escriba sus dudas o sugerencias" className="form-control" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label >Imagen de Referencia</label>
                  <input type="file" id="exampleInputFile" />
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
    </div>
  </>

)

export default FormCar;