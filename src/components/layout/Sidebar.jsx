import React from 'react'

import {Link} from 'react-router-dom'

const Sidebar = () => {
    return ( 
        <aside>
            <h2>TOTAISES <span> Administracion </span></h2>
            
            <h2>MENU</h2>
            <ul>
                <li><Link className="option-menu" to='/home'><i class="material-icons">home</i> Home</Link></li>
                <li><Link className="option-menu" to='/equipos'><i class="material-icons">assignment_ind</i> Equipos</Link></li>
                <li><Link className="option-menu" to='/jugadores'><i class="material-icons">directions_run</i> Jugadores</Link></li>
                <li><Link className="option-menu" to='/'><i class="material-icons">arrow_back</i> Salir</Link></li>
                
               
            </ul>
        </aside>
     );
}
 
export default Sidebar;