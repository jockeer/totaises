import React,{Fragment,useState,useEffect} from 'react'
import Posicion from './Posicion'
import Error from '../layout/Error'

const TablaPosiciones = () => {
    const [error, guardarError]=useState(false);

    const [campeonatos, guardarCampeonatos]=useState([]);
    
    const [campeonatoelegido, guardarCampeonatoElegido] = useState('')

    const [tabla, guardarTabla] = useState([]);

    useEffect(() => {
        const traerCampeonatos = async () => {
            const API = await fetch(`http://localhost:4000/api/traerCampeonatos`)
            const respuesta = await API.json()
            guardarCampeonatos(respuesta)
        }
        traerCampeonatos()
    }, [])

    const onChange = e => {
        guardarCampeonatoElegido(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (campeonatoelegido==='') {
            guardarError(true)
            return
        }
        guardarError(false)

        const API = await fetch(`http://localhost:4000/api/tablaPosiciones/${parseInt(campeonatoelegido)}`);
        const respuesta = await API.json();
        guardarTabla(respuesta)
    }
    return ( 
        <Fragment>
            <h3>Tabla de posiciones</h3>
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-6">                        
                        <select name="campeonatoelegido" id="campeonatoelegido" value={campeonatoelegido} onChange={onChange} className="form-control">
                            <option value="">Seleccione una Campeonato...</option>
                            {campeonatos.map(campeonato => {
                                return <option key={campeonato.id} value={campeonato.id}>{campeonato.nombre}</option>
                            })}
                        </select>
                    </div>
                </div>
                {error
                    ? <Error mensajeError="Elija un campeonato" tipo="alert alert-danger" />
                    :null
                }
                <button type="submit" className="btn btn-info">Ver Tabla de posiciones</button>
            </form>
            <hr/>
            <div className="containerTabla">
                <div className="equipo head">
                    <h4>Equipo</h4>
                    <h4>P/J</h4>
                    <h4>P/G</h4>
                    <h4>P/P</h4>
                    <h4>P/E</h4>
                    <h4>Puntos</h4>
                </div>
                {tabla.map( equipo => {
                    return <Posicion key={equipo.id} equipo={equipo}/>
                })}
            </div>
        </Fragment>
     );
}
 
export default TablaPosiciones;