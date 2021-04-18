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
  & div{
    position: relative;
    padding: 20px;
    width: 600px;
    min-width:500px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    &>h2{
      text-align: center;
      margin-bottom: 30px;
    }
    &>form{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &>label{
      width: 100%;
      margin-bottom: 10px;
        &>span{
          display: inline-block;
          width: 40%;
          padding-right: 5%;
        }
        &>input{
          width: 55%;
        }
        &>select{
        width: 55%;
      }
      }
      &>button{
        margin: 20px 10px;
        display: flex;
        justify-content:center;
        align-items:center;
        padding: 10px;
        width: 150px;
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