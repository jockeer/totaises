import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
const Jugadores = () => {
    return ( 
        <div className="container-home">
            <Sidebar/>
            <div className="container-main">
                <Barra titulo='Jugadores'/>
                
            </div>
        </div>
     );
}
 
export default Jugadores;