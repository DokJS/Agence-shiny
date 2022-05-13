import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
padding:15px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
width:350px;
transition: 200ms;
&:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
}

`

const CardLabel = styled.span`
color: #5843e4;
font-size:22px;
font-weight:bold;
`;
const CardImage = styled.img`
height:80px;
width:80px;
border-radius:50%;
`

const Card = (props) => {
   const {name,picture,jobTitle} = props.profile
  return (
    <CardWrapper>
          <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardLabel>{jobTitle}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{name}</span>
        </div>
    </CardWrapper>
  )
}

Card.propTypes = {
    name : PropTypes.string.isRequired,
    jobTitle : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired
}

Card.defaultProps = {
    jobTitle: '',
    name : '',
    picture: DefaultPicture

}

export default Card