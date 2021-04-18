import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  /* background-color: darkorange; */
  
  & li{
    padding: 10px;
    border: 1px solid gray;
    font-weight: 600;
  }
  & li a{
    padding: 10px 20px 10px 10px;
  }
  & .selected{
    color: red;
  }
` 
 