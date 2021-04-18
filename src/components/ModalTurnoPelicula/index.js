import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import { Container, BotonCerrar } from './styles'
import Context from '../../context/Context'

const ModalPeliculas = ({modalOpen, setModalOpen}) => {
  const {peliculas, setPeliculas} = useContext(Context)
  const [data, setData] = useState({})
  const handleClick = () => {
    setModalOpen(false)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Por ahora en construccion :( ')
    setModalOpen(false)
    
  }
  const handleChange = (e) => {
    
  }

  if(!modalOpen) {return null}
  return(
    ReactDOM.createPortal(
      <Container>
        <div>
          <BotonCerrar onClick={handleClick}><i className="fas fa-times"></i></BotonCerrar>
          <h2>Asignar Turno</h2>
          <form onSubmit={handleSubmit}>
            
            <button>Guardar</button>
          </form>
        </div>
      </Container>,
      document.getElementById('modal_peliculas')
    )
  )
}

export default ModalPeliculas