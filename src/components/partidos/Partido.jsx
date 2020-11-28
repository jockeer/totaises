import React from 'react'
import { Link } from 'react-router-dom'

const Partido = ({partido}) => {
    debugger
    return ( 
        <div className="card">
            <div className="card-header">
                <h3>Partido-Totaises</h3>
            </div>
            <div className="card-body infoPartido">
                <p>Local</p>
                <p>vs</p>
                <p>Visitante</p>
                <p>{partido.Equipo_Local}</p>
                <p>vs</p>
                <p>{partido.Equipo_Visitante}</p>
                <p>{partido.goles_local}</p>
                <p>-</p>
                <p>{partido.goles_visitante}</p>
                <p>Estadio</p>
                <p>-</p>
                <p>{partido.Estadio}</p>
                <p>Arbitro</p>
                <p>-</p>
                <p>{partido.Arbitro}</p>
                {partido.estado==='jugado'
                    ?<p className='patido-jugado' >{partido.estado}</p>
                    :<p className='patido-nojugado' >{partido.estado}</p>
                }
            </div>
            <div className="card-footer">
                <Link to={`/detalle-partido/${partido.id}`} className="btn btn-info">ver Partido</Link>
            </div>
        </div>
     );
}
 
export default Partido;