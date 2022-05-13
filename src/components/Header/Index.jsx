import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';
import logo from '../../assets/logo.png'


const StyledLink = styled(Link)`
padding: 15px;
color: #8186a0;
margin: 0px 40px;
text-decoration:none;
font-size : 18px;
&:hover {
  ${ (props)=>
    props.$isFullLink && 
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
}
`;

const StyledHeader = styled.header`
display : flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
padding: 30px 33px;
`;

const StyledLogo = styled.img`
width: 188px;
height:70px;
left:33px;
top:30px;
display: inline-block;
`

const Header = () => {
  return (
   <StyledHeader>
     <StyledLogo src={logo} alt="logo shiny" />
      <nav>
        <StyledLink to="/" $isFullLink>Accueil</StyledLink>
        <StyledLink to={"/survey/1" } $isFullLink>Questionnaire</StyledLink>
        <StyledLink to={"/freelances"} $isFullLink>Profils</StyledLink>
    </nav>
   </StyledHeader>
  )
}

export default Header