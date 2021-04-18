import React from 'react'

const Turno = ({turno}) => {
  console.log('turno', turno)
  const {id, name, active} = turno
  return(
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{
          active ? 'Activo' : 'Inactivo'  
        }</td>
        <td>
        <button><i className="fas fa-pen"></i></button>
        <button><i className={active ? 'fas fa-lock' : 'fas fa-lock-open' }></i></button>
        <button><i className="far fa-trash-alt"></i></button>
        </td>
      </tr> 
    </>
  )
}

export default Turno