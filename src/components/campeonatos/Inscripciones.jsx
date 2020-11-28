import React,{Fragment,useState} from 'react'

import axios from 'axios'

import Error from '../layout/Error'

const Incrispciones = () => {
    const [categoria, guardarCategoria] = useState('');

    const [equipos, guardarEquipos] = useState([])
    const [campeonatos, guardarCampeonatos] = useState([])

    const [busqueda,guardarBusqueda] = useState(false)
    const [inscripcion,guardarIncripcion] = useState({
        id_equipo:'',
        id_campeonato:''
    })
    
    const onChangeCat = e =>{
        guardarCategoria(e.target.value)
    }
    const onChangeIns = e =>{
        guardarIncripcion({
            ...inscripcion,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitCat = async (e) =>{
        e.preventDefault()
        const APIe =`http://localhost:4000/api/traerEquipos/${parseInt(categoria)}`
        const APIc =`http://localhost:4000/api/traerCampeonatos/${parseInt(categoria)}`
           
        const [ infoEquipo, infoCamp] = await Promise.all([
            axios(APIe),
            axios(APIc)
        ])
        guardarEquipos(infoEquipo.data)
        guardarCampeonatos(infoCamp.data)

        guardarBusqueda(true)

        
    }

    const {id_equipo, id_campeonato} = inscripcion

    const onSubmitIns = async (e) =>{
        e.preventDefault()
        
        const url = `http://localhost:4000/api/inscribirEquipo`

        const data = {};
        data.id_equipo = parseInt(id_equipo) 
        data.id_campeonato = parseInt(id_campeonato) 
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('registrado correctamente'));
        
    }

    return ( 
        <Fragment>

            <h1>Inscripciones</h1>
            <form onSubmit={onSubmitCat}>
                <div className="form-row">
                    <div className="form-group col-6">
                    <label htmlFor="id_categoria">Seleccione la categoria</label>
                        <select id="id_categoria" name="id_categoria" onChange={onChangeCat} className="form-control">
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
                <button type="submit" className='btn btn-info' >Buscar</button>
            </form>
            <hr/>

            {busqueda
                ?<form onSubmit={onSubmitIns}>
                    <div className="form-row">
                        <div className="form-group col-5">
                            {equipos.length===0
                                ? <Error mensajeError='No hay ningun Equipo en esta categoria' tipo='alert alert-danger'/>
                                :<div>
                                    <label htmlFor="id_equipo">Seleccione el Equipo</label>
                                        <select id="id_equipo" name="id_equipo" value={id_equipo} onChange={onChangeIns} className="form-control">
                                            <option value="">Seleccione un Equipo...</option>
                                            {equipos.map( equipo => {
                                                return <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                                            })}                              
                                        </select>
                                    </div>
                            } 
                        </div>
                        <div className="form-group col-5">
                            {campeonatos.length===0
                                ? <Error mensajeError='No hay ningun campeonato en esta categoria' tipo='alert alert-danger'/>
                                :<div>
                                    <label htmlFor="id_campeonato">Seleccione el campeonato</label>
                                        <select id="id_campeonato" name="id_campeonato" value={id_campeonato} onChange={onChangeIns} className="form-control">
                                            <option value="">Seleccione un campeonato...</option>
                                            {campeonatos.map( campeonato => {
                                                return <option key={campeonato.id} value={campeonato.id}>{campeonato.nombre}</option>
                                            })} 
                                        </select>
                                    </div>
                            }                     
                        </div>
                    </div>
                    <button type="submit" className='btn btn-success' >Inscribir Equipo</button>         
                </form>
                :null
            }
        </Fragment>
     );
}
 
export default Incrispciones;