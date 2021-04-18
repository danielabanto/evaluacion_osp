import React, {useContext} from 'react'
import Pelicula from '../../components/Pelicula'
import {Container} from './styles'
import Context from '../../context/Context'

const PeliculasTable = () => {
  const { peliculas, setPeliculas } = useContext(Context)
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>F. Publicación</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            peliculas.map((pelicula) => (
              <Pelicula key={pelicula.id} pelicula={pelicula} />
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}

export default PeliculasTable