import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
   const {name,picture,job} = props
   const [favorite, setFavorite] = useState(false)

  

   const favoriteDisplay = !favorite ?
    (<React.Fragment>
     <span id='title'>{name}</span>
   </React.Fragment>)
   :(<React.Fragment>
     <span id='title'>⭐️{name}⭐️</span>
   </React.Fragment>);
  return (
    <CardWrapper onClick={()=>setFavorite(true)}>
            <CardLabel>{job}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            {favoriteDisplay}
    </CardWrapper>
  )
}

Card.propType = {
  name : PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  picture: PropTypes.string
}

Card.defaultProps= {
picture: DefaultPicture
}

export default Card
