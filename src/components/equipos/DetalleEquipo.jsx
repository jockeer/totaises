import React,{useState,useEffect,Fragment} from 'react'
import {Link} from 'react-router-dom'

import Barra from '../layout/Barra'
import Error from '../layout/Error'
import JugadorEquipo from '../jugadores/JugadorEquipo'
import axios from 'axios'

const DetalleEquipo = ({match}) => {

    const [ equipo, guardarEquipo] = useState({});
    const [ jugadores, guardarJugadores] = useState([]);

    useEffect(() => {
        
        const llenarEquipo = async () => {
            const APIe = `http://localhost:4000/api/traerDetalleEquipo/${match.params.idequipo}`;
            const APIj = `http://localhost:4000/api/traerJugadoresEquipo/${match.params.idequipo}`;

            const [ infoEquipo, jugadoresEquipo] = await Promise.all([
                axios(APIe),
                axios(APIj)
            ])
           
            // const repuesta = await API.json();
            guardarEquipo(infoEquipo.data[0]);
            guardarJugadores(jugadoresEquipo.data);
        }

        llenarEquipo();
    }, [])

    const {id, nombre, direccion, presidente, escudo, colo_local, colo_visitante, fecha_fundacion, id_categoria} = equipo

    return (
        <Fragment>
            <Barra titulo="Detalle del Equipo"/>
            <div className="container">
                <h2><Link className="option-menu" to='/home'><i className="material-icons">arrow_back</i></Link> Detalle del club - {nombre}</h2>
                <h2>Lista de jugadores</h2>
                <div className="container-jugadores">
                <div className="jugador">
                    <p><b>Nombre</b></p>
                    <p>Apellido</p>
                    <p>Edad</p>
                    <p>Carnet de Identidad</p>
                </div>
                    {jugadores.length===0
                        ?<Error mensajeError="Este equipo no tiene jugadores" tipo="alert alert-info"/>
                        :jugadores.map(jugador => {
                        return <JugadorEquipo key={jugador.id} jugador={jugador}/>
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
}
 
export default DetalleEquipo;