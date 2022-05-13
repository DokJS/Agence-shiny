import React from 'react'
import Card from '../../components/Card/Index';
import DefaultPicture from '../../assets/profile.png';

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
      {freelancersList}
    </div>
  )
}

export default Freelances