import { createGlobalStyle } from 'styled-components';
import montserrat from './fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import science_gothic from './fonts/Science_Gothic/ScienceGothic-VariableFont_CTRS,slnt,wdth,wght.ttf';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat});
  }

  @font-face {
    font-family: 'Science Gothic';
    src: url(${science_gothic});
  }  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Montserrat'; 
  }
  body{
    overflow: hidden;
  }
  
`
export default GlobalStyle