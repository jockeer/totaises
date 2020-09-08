import React from 'react'
import {Link} from 'react-router-dom'

const Equipo = ({equipo}) => {
    return ( 
        <div className="card">
            <div className="card-header"><h4>{equipo.nombre}</h4></div>
            <div className="card-body">{equipo.nombre}</div>
            <div className="card-footer">
                <Link to={`detalle-equipo/${equipo.id}`} className="btn btn-info"><h4>Ver detalle</h4></Link>
            </div>
        </div>
     );
}
 
export default Equipo;