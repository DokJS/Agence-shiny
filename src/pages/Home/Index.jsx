import React,{useLayoutEffect} from 'react';
import Logo from '../../assets/grosLogo.svg';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';

const StyledMain = styled.main`
margin: 50px 65px;
background-color: ${colors.backgroundLight};
display:flex;
flex-direction:row;
justify-content: space-between;
height:829px;
`

const StyledImage = styled.img`
width:541px;
height:506;
margin: 139px 77px 179px 
`;

const StyledLeft = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: 420px 0px 399px 98px;
`;

const StyledTitle = styled.h1`
font-weight:700;
font-size:50px;
line-height: 80px;
max-width:490px;
`;

const StyledButton = styled.button`
background-color: ${colors.primary};
width:261px;
height:50px;
border-radius:29px;
color:white;
font-size:20px;
font-weight:700;
line-height:22px;
display:flex;
justify-content:center;
padding: 9px 65px;
align-items:center;
margin-top: 120px;
border:none;
`

const Home = () => {

  useLayoutEffect(()=> {
    document.title= 'Agence Shiny'
  })

  return (
    <StyledMain>
      <StyledLeft>
      <StyledTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>
      <StyledButton>Faire le test</StyledButton>
      </StyledLeft>
      <StyledImage src={Logo} alt="logo profil" />
    </StyledMain>
  )
}

export default Home;