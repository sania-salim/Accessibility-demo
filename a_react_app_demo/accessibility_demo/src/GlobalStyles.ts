import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root{
    padding:0;
    margin:0;
    width: 100%;
  }

  html{
    padding:0;
    margin:0;
    width: 100%;
  }

  body {
    max-width: 1400px;
    display:flex;
    padding: 0 ;
    margin: 0 auto;
    background-color:#f5f5f5;
    color:#070707;
    font-family:'Montserrat';
    line-height:2.1;
  }

  #root{
    padding:0;
    margin:0;
    width: 100%;
  }

  a{
    text-decoration:none;
  }
`;



export default GlobalStyle;