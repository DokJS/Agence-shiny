import React, {Component} from 'react';
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

class Card extends Component{
   
  constructor(props) {
    super(props)
  
    this.state = {
    }

 
  }

 
    
  render(){
    const {picture,job} = this.props
    return (
      <CardWrapper>
              <CardLabel>{job}</CardLabel>
              <CardImage src={picture} alt="freelance" />
              (<span id='title'>{this.props.name}</span>
      </CardWrapper>
    )
  }
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
