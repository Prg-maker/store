import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,input,button{
    font-family: 'Kanit', sans-serif;
    outline: none;
    border: none;

  }


  a{
    color: #282828;
    text-decoration: none;

  }

  html,body,#root{
    height: 100vh;
  }
`