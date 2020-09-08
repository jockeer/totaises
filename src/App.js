import React from 'react';

import Login from './components/auth/Login'
import Home from './components/layout/Home'
import Jugadores from './components/jugadores/Jugadores';
import Equipos from './components/equipos/Equipos';
import DetalleEquipo from './components/equipos/DetalleEquipo'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/jugadores" component={Jugadores}/>
        <Route exact path="/equipos" component={Equipos}/>
        <Route exact path="/detalle-equipo/:idequipo" component={DetalleEquipo}/>
        {/* <Route exact path="/nueva-cuenta" component={}/>
        <Route exact path="/home" component={}/>
        <Route exact path="/detalle-puesto/:idpuesto/:idsector" component={}/>
        <Route exact path="/reportes" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;
