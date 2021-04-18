import React, {useState} from 'react'
import ModalEditarPelicula from '../ModalEditaPelicula'
import ModalBorrarPelicula from '../ModalBorrarPelicula'
import ModalTurnoPelicula from '../ModalTurnoPelicula'

const Pelicula = ({pelicula}) => {
  const {id, name, fpub, active} = pelicula
  const [modalOpen, setModalOpen] = useState(false)
  const [modalBorrarOpen, setModalBorrarOpen] = useState(false)
  const [ModalTurnoOpen, setModalTurnoOpen] = useState(false)
  const handleEdit = () =>{
    setModalOpen(true)
  }
  const handleTrash = () =>{
    setModalBorrarOpen(true)
  }
  const handleTurno = () => {
    setModalTurnoOpen(true)
  }
  console.log('pelicula', id, pelicula)
  return(
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{fpub}</td>
        <td>{active ? 'Activo' : 'Inactivo'}</td>
        <td>
        <button onClick={handleEdit}><i className="fas fa-pen"></i></button>
        <button onClick={handleTurno}><i className="fas fa-bars"></i></button>
        <button><i className={active ? 'fas fa-lock' : 'fas fa-lock-open' }></i></button>
        <button onClick={handleTrash}><i className="far fa-trash-alt"></i></button>
        <ModalEditarPelicula 
          modalOpen={modalOpen} 
          setModalOpen={setModalOpen} 
          pelicula={pelicula}
        />
        <ModalBorrarPelicula 
          modalOpen={modalBorrarOpen} 
          setModalOpen={setModalBorrarOpen}
          pelicula={pelicula}
        />
        <ModalTurnoPelicula 
          modalOpen={ModalTurnoOpen} 
          setModalOpen={setModalTurnoOpen}
          pelicula={pelicula}
        />
        </td>
      </tr> 
    </>
  )
}

export default Pelicula