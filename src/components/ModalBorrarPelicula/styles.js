import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content:center;
  align-items: center;
  position: absolute;
  z-index: 10;
  &>div{
    position: relative;
    padding: 20px;
    width: 600px;
    min-width:500px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    & h3{
      text-align: center;
      margin-top: 30px;
      margin-bottom: 60px;
    }
    & div{
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 40px;
      & button{
        border: 1px solid black;
        padding: 10px 40px;
      }
    }
  }
` 

export const BotonCerrar = styled.button`
  font-size: 2rem;
  border: none;
  background-color: transparent;
  position: absolute;
  z-index: 11;
  top: -22px;
  right: -15px;
  padding: 10px;
` 