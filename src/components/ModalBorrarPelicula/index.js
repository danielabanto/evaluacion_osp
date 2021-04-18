import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import { Container, BotonCerrar } from './styles'
import Context from '../../context/Context'

const ModalBorrarPelicula = ({modalOpen, setModalOpen, pelicula}) => {
  const {peliculas, setPeliculas} = useContext(Context)
  const handleClick = () => {
    setModalOpen(false)

  }
  const handleBorrar = () => {
    const nuevasPeliculas = peliculas.filter((item) => !(item.id==pelicula.id))
    setPeliculas(nuevasPeliculas)
    setModalOpen(false)
  }

  if(!modalOpen) {return null}
  return(
    ReactDOM.createPortal(
      <Container>
        <div>
          <BotonCerrar onClick={handleClick}><i className="fas fa-times"></i></BotonCerrar>
          <h3>Seguro de borrar este elemento?</h3>
          <div>
            <button onClick={handleBorrar}>SÍ</button>
            <button onClick={handleClick}>NO</button>
          </div>
        </div>
      </Container>,
      document.getElementById('modal_peliculas')
    )
  )
}

export default ModalBorrarPelicula