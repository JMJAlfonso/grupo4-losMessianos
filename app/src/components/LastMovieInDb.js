import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Turismo Aventura</h5>
                </div>
                <div className="card-body">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">¿Quiénes somos?</h5>
                </div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Somos una empresa joven y en continuo crecimiento. La seguridad con la que se trabaja es altamente calificada. Contamos con un equipo profesional que responde en cualquier circunstancia. Diagramamos programas que contemplan las exigentes expectativas de todo tipo de viajero, durante todo el año, brindando una variedad de servicios de aventura, desde propuestas sencillas, hasta travesías y ascensos para aquellos que se animan a más. Nos ponemos a tu entera disposición para acompañarte en tu desafío de Turismo Aventura. </p>
                    <a className="btn btn-danger" style={{background:"#EB9204"}} target="_blank" rel="nofollow" href="/">Ver actividades</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
