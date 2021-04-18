import styled from 'styled-components'

export const Container =  styled.div`
  grid-area: sidebar;
  &>div{
    margin-bottom:10px;
    display: flex;
    justify-content: space-between;
    &> button{
      padding: 6px 14px;
      border-radius: 5px;
      border: none;
      box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
      &:hover{
        cursor: pointer;
      }
    }
  }
`


 