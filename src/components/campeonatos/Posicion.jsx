import React from 'react'

const Posicion = ({equipo}) => {
    return ( 
        <div className="equipo">
            <h4>{equipo.Equipo}</h4>
            <h4>{equipo.partidos_jugados}</h4>
            <h4>{equipo.partidos_perdidos}</h4>
            <h4>{equipo.partidos_empatados}</h4>
            <h4>{equipo.puntos}</h4>
        </div>
     );
}
 
export default Posicion;