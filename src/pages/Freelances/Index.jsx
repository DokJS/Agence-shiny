import React from 'react'
import Card from '../../components/Card/Index';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

const CardContainer = styled.div`
display: grid;
gap: 24px;
grid-template-rows: repeat(2,350px);
grid-template-columns: repeat(2,1fr);
`

const Freelances = () => {
  const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

    const freelancersList = freelanceProfiles.map( (profile,index) => {
      return <Card key={index} profile={profile}/>
    })
  return (
    <div>
      <div>Freelances</div>
      <CardContainer>
      {freelancersList}
      </CardContainer>
    </div>
  )
}

export default Freelances