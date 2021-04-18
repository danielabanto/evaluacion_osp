import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-color: rgb(30,30,80);
    --background: rgb(248,248,248);
  }
  html {
    box-sizing: border-box;
    /* font-family: 'Quicksand', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: Arial;
    overflow-x: hidden;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(----font-color);
  }
  #root{
    height: 100vh;
    min-height: 500px;
    color: var(----font-color);
    display: grid;
    width: 100%;
    grid-template-columns: 340px 1fr;
    grid-template-rows: 90px 1fr 50px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
  }
  h1{
    font-size: 2.5rem;
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.8rem;
  }
  h3{
    font-size: 1.5rem;
  }
  p{
    font-size: 1.5rem;
  }
  li{
    font-size: 1.5rem;
  }
  button:hover{
    cursor: pointer;
  }
  #modal_peliculas{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

`