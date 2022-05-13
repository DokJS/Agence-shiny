import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

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
    <div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardLabel>{jobTitle}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{name}</span>
        </div>
    </div>
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