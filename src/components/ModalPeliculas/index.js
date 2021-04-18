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
    //Consiguiendo el id maximo
    let maxId = 0
    peliculas.map((pelicula) => (pelicula.id>maxId) && (maxId = pelicula.id) )

    const dataEnviar = {
      id: maxId + 1, //nuevo id
      ...data
    }
    const nuevasPeliculas = [...peliculas, dataEnviar]
    setPeliculas(nuevasPeliculas)
    setModalOpen(false)
    
  }
  const handleChange = (e) => {
    let value
    if (e.target.name == 'active') {
      if(e.target.value == 'true') {value = true} else {value=false}
    } else {
      value= e.target.value
    }
    setData({
      ...data,
      [e.target.name]: value
    })
  }

  if(!modalOpen) {return null}
  return(
    ReactDOM.createPortal(
      <Container>
        <div>
          <BotonCerrar onClick={handleClick}><i className="fas fa-times"></i></BotonCerrar>
          <h2>Nueva Película</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nombre de la Pelicula</span>
              <input onChange={handleChange} type="text" name="name" required/>
            </label>
            <label>
              <span>Fecha de Publicacion</span>
              <input onChange={handleChange} type="date" name="fpub" required/>
            </label>
            <label>
              <span>Estado</span>
              <select onChange={handleChange} list="estado" name="active" value={data.active} required>
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </label>
            <button>Guardar</button>
          </form>
        </div>
      </Container>,
      document.getElementById('modal_peliculas')
    )
  )
}

export default ModalPeliculas