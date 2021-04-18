import styled from 'styled-components'

export const Container =  styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--background);
  & div{
    flex-direction: row;
    display: flex;
    align-items: center;
  }
  & figure{
    /* padding-right:20px; */
  }
  & i{
    padding: 10px;
  }
`

 