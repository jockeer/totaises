import React,{useState} from 'react';
import Error from '../layout/Error'
const FormRegistroCampeonato = () => {

    const [form, guardarForm]=useState({
        nombre:'',
        fecha_inicio:'',
        id_categoria:0
    })

    const [error,guardarError]=useState(false)

    

    const {nombre,fecha_inicio,id_categoria}=form

    const onChange = e => {
        guardarForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if (nombre === ''|| fecha_inicio === '' || id_categoria === 0) {
            guardarError(true);
            return;
        }
        guardarError(false);

        const url = `http://localhost:4000/api/registrarCampeonato`

        const data = {};
        data.nombre = nombre
        data.fecha_inicio = fecha_inicio
        data.id_categoria = parseInt(id_categoria)
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('insertado correctamente'));

        guardarForm({
            nombre:'',
            fecha_inicio:'',
            id_categoria:0
        })
    }

    return ( 
        
        <form onSubmit={onSubmit} >
            <h3>Registrar Nuevo Campeonato</h3>
            <div className="form-row">
                <div className="form-group col col-4">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" value={nombre} id="nombre" className="form-control" onChange={onChange} />
                </div>
                <div className="form-group col col-4">
                    <label htmlFor="fecha_inicio">Fecha de inicio</label>
                    <input type="date" name="fecha_inicio" value={fecha_inicio} id="fecha_inicio" className="form-control" onChange={onChange} />

                </div>
                <div className="form-group col col-8">
                    <label htmlFor="id_categoria">Seleccione la categoria</label>
                    <select id="id_categoria" onChange={onChange} name="id_categoria" value={id_categoria} className="form-control">
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
            {error
                ?<Error mensajeError="rellene los campos correctamente" tipo="alert alert-danger"/>
                :null
            }
        <button type="submit" className="btn btn-info"><h4>Registrar Campeonato</h4></button>
        </form>
     );
}
 
export default FormRegistroCampeonato;