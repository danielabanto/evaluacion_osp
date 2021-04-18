import React, {useContext} from 'react'
import Turno from '../Turno'
import {Container} from './styles'
import TurnosContext from '../../context/TurnosContext'

const TurnosTable = () => {
  const { turnos, setTurnos } = useContext(TurnosContext)
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Turno</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            turnos.map((turno) => (
              <Turno key={turno.id} turno={turno} />
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}

export default TurnosTable