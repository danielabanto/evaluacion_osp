import styled from 'styled-components'

export const Container = styled.div`
  &>table{
    width: 100%;
    /* border: 1px solid red; */
    border-collapse: collapse;
    text-align: left;
    &>thead{
      background-color: rgb(200,200,200);
      & tr th{
        padding: 10px 20px 10px 5px;
      }
    }
    &>tbody>tr>td{
      padding: 10px 0 10px 5px;
      &>button{
        font-size: 15px;
        padding: 5px;
        margin-right: 3px;
        border: none;
        &:hover{
          cursor: pointer;
        }
      }
    }
    &>tbody>tr:nth-child(2n){
      background-color: rgb(240,240,240);
    }
  } 

`