import React from 'react'
import Card from '../../components/Card/Index';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

const StyledH1 = styled.h1`
margin: 0 auto;
font-size: 30px;
font-weight:700px;
text-align:center;
margin-bottom:32px;
`;

const StyledH4 = styled.h4`
color:#8186A0;
font-size:20px;
text-align:center;
font-weight:700;
`


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
        <StyledH1>Trouvez votre prestataire</StyledH1>
        <StyledH4>Chez shiny, nous réunissons les meilleures profils pour vous.</StyledH4>
      <CardContainer>
      {freelancersList}
      </CardContainer>
    </div>
  )
}

export default Freelances