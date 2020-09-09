import React from 'react';

import Login from './components/auth/Login'
import Home from './components/layout/Home'
import Jugadores from './components/jugadores/Jugadores';
import Equipos from './components/equipos/Equipos';
import DetalleEquipo from './components/equipos/DetalleEquipo'
import Campeonato from './components/campeonatos/Campeonato';
import Partidos from './components/partidos/Partidos';
import DetallePartido from './components/partidos/DetallePartido';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/jugadores" component={Jugadores}/>
        <Route exact path="/equipos" component={Equipos}/>
        <Route exact path="/campeonatos" component={Campeonato}/>
        <Route exact path="/partidos" component={Partidos}/>
        <Route exact path="/detalle-equipo/:idequipo" component={DetalleEquipo}/>
        <Route exact path="/detalle-partido/:idpartido" component={DetallePartido}/>

      </Switch>
    </Router>
  );
}

export default App;
