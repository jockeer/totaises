import React,{useState} from 'react'

import Error from '../layout/Error'

const Login = (props) => {

    const [datos, guardarDatos] = useState({
        user: '',
        pass: ''
    })

    const [error, guardarError] = useState(false)

    const onSubmit = e => {
        e.preventDefault();

        if (datos.user.trim() === '' || datos.pass.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        props.history.push('/home');

    }
    const onChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    return ( 
        <div className="cotainer-login">
            <div className="card sombra">
                <div className="card-header">Login</div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <label htmlFor="user"><i class="material-icons">account_circle</i> <span>Usuario:</span></label>
                            <input type="text" id="user" name="user" value={datos.user} class="form-control" onChange={onChange}/>
                        </div>
                        <div class="form-group col-12">
                            <label htmlFor="pass"><i class="material-icons">account_circle</i><span>Contraseña:</span></label>
                            <input type="password" id="pass" name="pass" value={datos.pass} class="form-control" onChange={onChange}/>
                        </div>
                        {error
                            ?<Error mensajeError="Usuario o Contraseña incorrectos"/>
                            :null
                        }
                    </div>
                    <button type="submit" className="btn btn-success">Ingresar</button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;