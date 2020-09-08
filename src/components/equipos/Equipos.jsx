import React,{useState} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'

import Equipo from './Equipo'

const Equipos = () => {

    const [equipos, guardarEquipos] = useState([
        { id:1 , nombre:"equipo 1", presidente:"Daniel Gorianz"},
        { id:2 , nombre:"equipo 2", presidente:"Pedro Mendoza"}
    ])

    return ( 
        <div className="container-home">
            <Sidebar/>
            <div className="container-main">
                <Barra titulo='Equipos'/>
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="">Seleccione una Categoria</label>
                                <select name="" id="" className="form-control">
                                    <option value="">Seleccione..</option>
                                    <option value="1">Pre-Benjamín</option>
                                    <option value="2">Benjamín</option>
                                    <option value="3">Alevín</option>
                                    <option value="4">Infantil</option>
                                    <option value="5">Cadete</option>
                                    <option value="6">Juvenil</option>
                                    <option value="7">Sénior</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <h2>Lista de Equipos</h2>
                    <div className="container-equipos">
                        {equipos.length === 0
                            ? <p>No hay Equipos en esta Categoria</p>
                            : equipos.map( equipo => {
                                return <Equipo key={equipo.id} equipo={equipo}/>
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Equipos;