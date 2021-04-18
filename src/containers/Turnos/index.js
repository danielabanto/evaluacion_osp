import React from 'react'
import {Container} from './styles'
import TurnosTable from '../../components/TurnosTable'

export const Turnos = () => {
  return(
    <Container>
      <div>
        <h2>Turnos</h2>
        <button>Nuevo turno</button>
      </div>
      <TurnosTable />
    </Container>
  )
}

export default Turnos