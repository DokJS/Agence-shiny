import React from 'react';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';
import image from '../../assets/notFound.svg';

const StyledMain = styled.main`
margin: 50px 65px;
background-color: ${colors.backgroundLight};
display:flex;
height:829px;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledSpan = styled.span`
font-weight: 700;
font-size: 31px;
line-height: 36px;

`

const StyledImage = styled.img`
width: 875px;
height:476px;
margin: 35px auto;
`

const Error = () => {
  return (
    <StyledMain>
      <StyledSpan>Oups...</StyledSpan>
      <StyledImage src={image} alt="not found" />
      <h2>Il semblerait qu'il y'ait un problème</h2>
    </StyledMain>
  )
}

export default Error