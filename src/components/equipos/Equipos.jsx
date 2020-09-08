import React,{useState} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import Equipo from './Equipo'
import Error from '../layout/Error'

import Equipo from './Equipo'

const Equipos = () => {

    const [error, guardarError] = useState(false);
    const [categoria, guardarFormCategoria] = useState('')
    const [estadoform, guardarEstadoForm]=useState(false)
    const [equipos , guardarEquipos] = useState([]);
    

    const onSubmit = async e => {
        e.preventDefault();
        if (categoria === '') {
            guardarError(true);
            guardarEstadoForm(false);
            return
        }
        guardarError(false);
        guardarEstadoForm(true);

        const API = await fetch(`http://localhost:4000/api/traerEquipos/${parseInt(categoria)}`);
        const repuesta = await API.json();
        guardarEquipos(repuesta);
        
    }
    const onChange = e => {
        guardarFormCategoria(e.target.value)
    }


    return ( 
        <div className="container-home">
            <Sidebar/>
            <div className="container-main">
                <Barra titulo='Equipos'/>
                <div className="container">
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-8">
                                <h3>Categoria</h3>
                                <select id="" onChange={onChange} value={categoria} className="form-control">
                                    <option value="">Seleccione una Categoria...</option>
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
                        <button type="submit" className="btn btn-success mb-2">Buscar</button>
                    </form>
                    {error
                        ?<Error mensajeError="seleccione una categoria" tipo="alert alert-danger"/>
                        :null
                    }
                    <h3>Lista de Equipos</h3>
                    
                    {estadoform
                        ? equipos.length === 0
                            ? <Error tipo="alert alert-danger" mensajeError="No hay equipos registrados en esta categoria"/>
                            : <div className="container-equipos">
                            {   equipos.map(equipo => {
                                    return <Equipo key={equipo.id} equipo={equipo}/>
                                })
                            }
                        </div>
                       
                        :null
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Equipos;