import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormRegistroCampeonato from './FormRegistroCampeonato'
import Inscripciones from './Inscripciones'
import TablaPosiciones from './TablaPosiciones'

const Campeonato = () => {
    return ( 
        <div className="container-home">
            <Sidebar/>
            <div className="container-main">
                <Barra titulo='Campeonatos'/>
                <div className="container">
                    <h2 className="tituloSeccion">Gestion Campeonato</h2>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><h4>Realizar Campeonato</h4></a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><h4>Inscripcion Campeonato</h4></a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><h4>Tabla de posiciones</h4></a>
                            </li>
                        </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <FormRegistroCampeonato />
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Inscripciones />
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <TablaPosiciones/>
                            </div>
                            </div>
                </div>
            </div>
        </div>
     );
}
 
export default Campeonato;