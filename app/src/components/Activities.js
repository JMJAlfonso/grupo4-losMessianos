import React from "react";
import foto from '../assets/images/Trekking.jpg';
import kayac from '../assets/images/kayac.jpg';
import rappel from '../assets/images/Rappel.jpg';
import paracaidismo from '../assets/images/paracaidismo.jpg';
import parapente from '../assets/images/Parapente.jpg';
import cabalgata from '../assets/images/cabalgata.jpg';
import ciclismo from '../assets/images/ciclismo.jpg';
import espeleismo from '../assets/images/Espeleismo.jpg';

function Activities() {
  return (
    <div className="col-lg-6 mb-5">
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
        Actividades
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-14 mb-1">
            <div className="card bg-dark text-white shadow">
                <div className="card-body" style={{background:"#02094650"}}>Trekking</div>
                <div className="card bg-dark text-white shadow">
                <img className="img" src={foto} alt="Trekking" width="100%" style={{ height: "250px" }} />
                <div className="card-body"  style={{background:"#02094650"}} >El trekking consiste en el desarrollo de caminatas por un entorno natural y abierto con fines recreativos. Vamos a acceder desde RP13, recorriendo desde el centro cívico de Villa Pehuenia 12 kilómetros hacia el norte con destino a Paso del Arco.</div>

              </div>
              </div>
            </div>
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body" style={{background:"#02094650"}}>Kayac</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={kayac} alt="Kayac" width="100%" style={{ height: "200px" }} />
                <div className="card-body" style={{background:"#02094650"}}>El método o técnica para ir en kayak es mediante unas palas o remos, los cuales propulsan el kayak al introducirlos en el agua.El tripulante o tripulantes se encargan de de realizar el movimiento continuo y simultáneo para mover el kayak, consiguiendo así moverse hacia delante o hacia atrás.</div>
              </div>
            </div>
            
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body"style={{background:"#02094650"}}>Rappel</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={rappel} alt="rappel" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>El rápel o también llamado rappel es un método de descenso por cuerda. Es utilizado en superficies verticales una pared o un tiro vertical. El rápel suele ser utilizado en espacios abiertos o actividades tales como el barranquismo, montañismo, espeleología, escalada en roca y otras disciplinas que requieren de un descenso vertical.</div>
              </div>
            </div>
            
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body" style={{background:"#02094650"}}>Paracaidismo</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={paracaidismo} alt="Paracaidismo" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>El paracaidismo es la técnica de lanzamiento de seres humanos u objetos desde cierta altura usando un paracaídas para amortiguar el impacto del aterrizaje. Se puede realizar desde cualquier aeronave como un avión, helicóptero, globo aerostático o desde un objeto fijo elevado a la altura necesaria..</div>
              </div>
            </div>
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body" style={{background:"#02094650"}}>Parapente</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={parapente} alt="Parapente" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>El parapente es una aeronave ligera y flexible, hecha únicamente de “cuerdas y tela”. La disciplina deportiva se basa en el vuelo sin motor, despegando de una pendiente y volando aprovechando las corrientes térmicas y dinámicas..</div>
              </div>
            </div>
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body"style={{background:"#02094650"}}>Cabalgata</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={cabalgata} alt="Cabalgata" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>La cabalgata es una actividad de esparcimiento y deportiva que utiliza al equino en un medio natural.</div>
              </div>
            </div>
           
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body"style={{background:"#02094650"}}>Ciclismo</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={ciclismo} alt="Ciclismo" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>El ciclismo de montaña,es considerado un deporte de riesgo, esta actividad es realizada en circuitos naturales a través de bosques por caminos angostos con cuestas empinadas..</div>
              </div>
            </div>
            <div className="col-lg-3.5 mb-3">
              <div className="card bg-dark text-white shadow">
                <div className="card-body"style={{background:"#02094650"}}>Espeleismo</div>
                <div className="card bg-dark text-white shadow"></div>
                <img className="img" src={espeleismo} alt="Espeleismo" width="100%"/>
                <div className="card-body" style={{background:"#02094650"}}>Consiste básicamente en explorar cavidades geológicas naturales, valiéndose de técnicas y equipos específicos de descenso y desplazamiento..</div>
              </div>
            </div>

            
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Activities
