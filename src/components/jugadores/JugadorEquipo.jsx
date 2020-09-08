import React from 'react'

const JugadorEquipo = ({jugador}) => {
    return ( 
        <div className="jugador sombra">
            <p>{jugador.nombre}</p>
            <p>{jugador.apellido}</p>
            <p>{jugador.edad}</p>
            <p>{jugador.ci}</p>
        </div>
     );
}
 
export default JugadorEquipo;