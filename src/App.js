import React from 'react'
import {HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header/'
import Sidebar from './containers/Sidebar/'
import Dashboard from './containers/Dashboard/'
import Peliculas from './containers/Peliculas/'
import Turnos from './containers/Turnos/'
import Administradores from './containers/Administradores/'
import Perfil from './containers/Perfil/'
import CerrarSesion from './containers/CerrarSesion/'
import Main from './containers/Main'
import Footer from './containers/Footer'
import { GlobalStyles } from './styles/GlobalStyles'

import {ContextProvider} from './context/Context'
import {TurnosContextProvider} from './context/TurnosContext'

const App = () =>{
  return(
    <ContextProvider>
    <TurnosContextProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Sidebar />
        <Main>
          <Switch>
            <Route exact strict path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact strict path='/peliculas'>
              <Peliculas />
            </Route>
            <Route exact strict path='/turnos'>
              <Turnos />
            </Route>
            <Route exact strict path='/administradores'>
              <Administradores />
            </Route>
            <Route exact strict path='/perfil'>
              <Perfil />
            </Route>
            <Route exact strict path='/cerrar-sesion'>
              <CerrarSesion />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
      </TurnosContextProvider>
      </ContextProvider>
  )
}

export default App