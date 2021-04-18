import React from 'react'
import {Container} from './styles'

export const Header = () => {
  return(
    <Container>
      <div>
        <a href="/">
          <figure>
            <img width="100px"src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/c1/ae/3d/c1ae3d6d-8629-acd0-6ec6-8fd4e4a1b9b8/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" />
          </figure>
        </a>
        <h2>Evaluación Osp</h2>
      </div>
      <div>
        <a href="/">
          <i className="fas fa-user"></i>
          <span>Admin</span>
        </a>
      </div>
    </Container>
  )
}

export default Header