import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'

const Partidos = () => {
    return ( 
        <div className="container-home">

        <Sidebar/>
            <div className="container-main">
                <Barra titulo='Partidos'/>
                <div className="container">
                    <h2>Partidos</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Partidos;