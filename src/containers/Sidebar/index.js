import React from 'react'
import {Container} from './styles'
import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  const list = [
    {name: 'Dashboard', path: '/dashboard'},
    {name: 'Películas', path: '/peliculas'},
    {name: 'Turnos', path: '/turnos'},
    {name: 'Administradores', path: '/administradores'},
    {name: 'Perfil', path: '/perfil'},
    {name: 'Cerrar sesión', path: '/cerrar-sesion'}
  ]
  return (
    <Container>
      <ul>
        {
          list.map((item, count)=>(
            <li key={count} >
              <NavLink to={item.path} activeClassName="selected">
                {item.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Sidebar