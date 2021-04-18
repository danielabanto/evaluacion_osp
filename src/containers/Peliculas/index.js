import React, { useState } from 'react'
import {Container} from './styles'
import PeliculasTable from '../../components/PeliculasTable'
import ModalPeliculas from '../../components/ModalPeliculas'

const Peliculas = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClick = () => {
    setModalOpen(true)
  }
  return(
    <Container>
      <div>
        <h2>Películas</h2>
        <button onClick={handleClick}>Nueva película</button>
        <ModalPeliculas modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </div>
      <PeliculasTable />
    </Container>
  )
}

export default Peliculas
