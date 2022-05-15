import React, {useContext} from 'react';
import { ThemeContext } from '../Context/Index';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
div {
  font-family: 'Poppins', sans-serif;
}

body {
  margin : 0;
  background-color: ${
    ({currentTheme}) => currentTheme === 'dark' ? '#2F2E41' : 'white'
  }
}
`

const GlobalStyle = () => {
  const {theme} = useContext(ThemeContext)
 
  return <StyledGlobalStyle currentTheme ={theme}/>
}

export default GlobalStyle
