import React,{useState,useEffect,Fragment} from 'react'
import Barra from '../layout/Barra'
import Error from '../layout/Error'

const DetallePartido = ({match}) => {

    const [partido,guardarPartido] = useState({})
    const [form,guardarForm] = useState(false)
    const [goles, guardarGoles] = useState({
        golesL:0,
        golesV:0
    })
    const {golesL,golesV}=goles

    useEffect(() => {
        const cargarPartido = async () => {
            const API = await fetch(`http://localhost:4000/api/traerdetallePartido/${match.params.idpartido}`)
            const respuesta = await API.json()
            console.log(respuesta[0])
            guardarPartido(respuesta[0])
        }
        cargarPartido()
    }, [])

    const {id,fecha,goles_local,estado,goles_visitante,Equipo_Local,escudoLocal,Equipo_Visitante,escudoVisitante,Arbitro,Estadio,Campeonato}=partido

    const onClick = ()=>{
        guardarForm(true)
    }
    const onChange = e => {
        guardarGoles({
            ...goles,
            [e.target.name]:e.target.value
        })

    }
    const onClickCancel = ()=>{
        guardarForm(false)
    }
    
    const onSubmit = async(e) => {
        e.preventDefault()
        guardarForm(false)

        const url = `http://localhost:4000/api/actualizarPartido`

        const data = {};
        data.goles_local = golesL
        data.goles_visitante = golesV
        data.id = parseInt(id)
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'PUT', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('actualizado correctamente'));
    }
    return ( 
        <Fragment>
            <Barra titulo="Detalle Partidos"/>
            <div className="container">
                <h3>Detalle - Partido</h3>
                <hr/>
                {Object.keys(partido).length === 0
                    ?null
                    :<h4><p>Fecha: {fecha.substr(0,10)} </p></h4>
                }
                <h4><p>Arbitro: {Arbitro}</p></h4>
                <h4><p>Estadio: {Estadio}</p></h4>
                <h4><p>Campeonato: {Campeonato}</p></h4>
                <div className="container-dpartido">
                    <h2>Local</h2>
                    <h2></h2>
                    <h2>Visitante</h2>
                    <div className="local">
                        <h2><p>{Equipo_Local}</p> <span><img width="50px" src={`http://localhost:4000/img/${escudoLocal}.png`} alt=""/></span> </h2>
                        <h2> <p>  </p></h2>
                    </div>
                    <h2>{goles_local} - {goles_visitante}</h2>
                    <div className="visitante">
                        <h2><p></p>   </h2>
                        <h2><p>{Equipo_Visitante}</p><span><img width="50px" src={`http://localhost:4000/img/${escudoVisitante}.png`} alt=""/></span>  </h2>
                    </div>
                    <h2></h2>
                    {form
                        ? <form onSubmit={onSubmit} >
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label htmlFor="golesL">Goles Local</label>
                                    <input type="number" name="golesL" id="golesL" value={golesL} onChange={onChange} className="form-control"/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="golesV">Goles Visitante</label>
                                    <input type="number" name="golesV" id="golesV" value={golesV} onChange={onChange} className="form-control"/>
                                </div>
                            </div>
                            <div className="container-botones">
                            <button type="submit" className="btn btn-success">Editar Partido</button> 
                            <button type="button" onClick={onClickCancel} className="btn btn-danger">cancelar</button>
                            </div>
                        </form>
                        : estado==='jugado' 
                            ? <Error mensajeError='Partido Jugado' tipo='alert alert-danger'/>
                            :<button className="btn btn-info" onClick={onClick} >Editar Partido</button> 
                        
                    }
                        
                    <h2></h2>
                </div>
            </div>
        </Fragment>
     );
}
 
export default DetallePartido;