import React,{useState,useEffect} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'

const Partidos = () => {

    const [campeonatos, guardarCampeonatos] = useState([])
    const [partidos, guardarPartidos] = useState([])
    const [form, guardarForm] = useState({
        id_campeonato:'0',
        fecha:''
    })

    useEffect(() => {
        const cargarCampeonatos = async () =>{
            const API = await fetch('http://localhost:4000/api/traerCampeonatos')
            const respuesta = await API.json()
            guardarCampeonatos(respuesta);
        }
        cargarCampeonatos()
    }, [])
    

    const onChange = e => {
        guardarForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const {id_campeonato,fecha}=form

    const onSubmit = async (e) => {
        e.preventDefault()

        const API = await fetch(`http://localhost:4000/api/traerPartidosPorCampeonato/${parseInt(id_campeonato)}/${fecha}`)
        const respuesta = await API.json()
        guardarPartidos(respuesta)
    }

    return ( 
        <div className="container-home">

        <Sidebar/>
            <div className="container-main">
                <Barra titulo='Partidos'/>
                <div className="container">
                    <h2>Partidos</h2>
                    <form onSubmit={onSubmit} >
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="id_campeonato">Seleccione el campeonato</label>
                                <select name="id_campeonato" id="id_campeonato" value={id_campeonato} onChange={onChange} className="form-control">
                                    <option value="">Seleccione el campeonato...</option>
                                    {campeonatos.map(campeonato => {
                                        return <option key={campeonato.id} value={campeonato.id}>{campeonato.nombre}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="fecha">Seleccione la fecha</label>
                                <input type="date" name="fecha" id="fecha" value={fecha} onChange={onChange} className="form-control"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info">Buscar</button>
                    </form>
                    <hr/>
                    <h3>Lista de Partidos</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Partidos;