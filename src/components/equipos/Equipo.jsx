import React from 'react'

const Equipo = ({equipo}) => {
    return ( 
        <div className="card sombra">
            <div className="card-header"><h3>{equipo.nombre}</h3></div>
            <div className="card-body">
                <p>dueño:<span>{equipo.presidente}</span></p> 
            </div>
        </div>
     );
}
 
export default Equipo;