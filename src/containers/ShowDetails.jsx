import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaGasPump } from "react-icons/fa";
import { FaTrademark } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { IoMdColorFill } from "react-icons/io";
import { RiSettings2Fill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { AiFillControl } from "react-icons/ai";
import '../assets/styles/components/ShowDetails.scss';
const ShowDetails = () => {

    return (
        <>
            <Header />
            <div className="detalles__container">
                <Carousel>
                    <div className="row">
                        <h2>KIA Picanto 2005</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box">
                                <div className="box-body">
                                    <div id="carouselExampleControls"
                                        className="carousel slide"
                                        data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="https://i.ebayimg.com/00/s/NTQwWDk2MA==/z/tTUAAOSwf-VWWYic/$_86.JPG" alt="" className="picaut" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://junkmailimages.blob.core.windows.net/large/54b3b002cbcc4b9892fe173f73c988e5.jpg" alt="..." className="picaut" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://uszkodzone.fra1.digitaloceanspaces.com/2020/02/kia-picanto-2004-1-1-lx-1582832519-3326349.jpg" alt="..." className="picaut" />
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

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-body">
                                    <table className="table table-borderless">
                                        <thead>
                                            <th colSpan="2">Descripción del Vehículo</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><FaTrademark /> Marca</th>
                                                <td>KIA</td>

                                            </tr>
                                            <tr>
                                                <th scope="row"><FaCarAlt /> Modelo</th>
                                                <td>Picanto</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><FaRegCalendarAlt /> Año</th>
                                                <td >2005</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"> <FaCarAlt /> Tipo</th>
                                                <td >VAN</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><IoMdColorFill /> Color</th>
                                                <td >Naranja</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" > <FaGasPump /> Tipo de Combustible</th>
                                                <td >Gasolina</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" > <AiFillControl /> Tipo de Transmisión</th>
                                                <td >Manual</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><RiSettings2Fill /> Motor</th>
                                                <td >200 cc</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><IoIosSpeedometer /> Kms</th>
                                                <td>200 KM/H</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><FaQuestionCircle /> Estado</th>
                                                <td >Usado</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><FaRegMoneyBillAlt /> Precio</th>
                                                <td >Q. 5000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"> <FaRegCalendarAlt /> Fecha de Ingreso</th>
                                                <td >2018-1-1</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><MdDescription /> Info</th>
                                                <td>Este automovil funciona a la normalidad, sin embargo le hace falta la bateria</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </>
    );
}

export default ShowDetails;