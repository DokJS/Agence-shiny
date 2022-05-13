import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png'

const Card = (props) => {
   const {name,picture,jobTitle} = props.profile
  return (
    <div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{jobTitle}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
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