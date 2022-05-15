import React , {useContext} from 'react'
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';
import {ThemeContext} from '../../Utils/Context/Index'


const FooterContainer = styled.footer`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding-top: 60px;
`

const NightModeButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
color: ${colors.secondary};
`


const Footer = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  const symbolDisplay = theme === 'light' ? ('🌙') : ('☀️')


  return (
    <FooterContainer>
        <NightModeButton onClick={()=>toggleTheme()} >Passez en mode {symbolDisplay} </NightModeButton>
    </FooterContainer>
  )
}

export default Footer