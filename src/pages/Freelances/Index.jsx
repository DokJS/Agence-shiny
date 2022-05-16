import React from 'react';
import Card from '../../components/Card/Index';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';
import {Loader} from '../../Utils/Style/Atom'
import { useFetch } from '../../Utils/Hooks/Index';

const PageTitle = styled.h1`
font-size: 30px;
font-weight:700px;
text-align:center;
margin-bottom:32px;
`;

const PageSubTitle = styled.h4`
color:${colors.secondary};
font-size:20px;
text-align:center;
font-weight:300;
padding-bottom: 30px;
`


const CardContainer = styled.div`
display: grid;
gap: 20px;
grid-template-rows: auto auto;
grid-template-columns: repeat(2,1fr);
align-items: start;
justify-items: center;
max-width: 835px;
margin: 0 auto;
`

const Freelances = () => {
  
   const {data,isLoading} = useFetch('http://www.localhost:8000/freelances')
   const {freelancersList: freelanceProfiles} = data

 

     const freelancersList = freelanceProfiles && freelanceProfiles.map( ({id,job,name,picture}) => {
      return <Card key={id} name={name} job={job} picture={picture}/>
    });

    const displayLoaderOrProfile = isLoading? (<Loader/>)
    : (
      <CardContainer>
      {freelancersList}
      </CardContainer>
    );
   
  return (
    <div>
        <PageTitle>Trouvez votre prestataire</PageTitle>
        <PageSubTitle>Chez shiny, nous réunissons les meilleures profils pour vous.</PageSubTitle>
        {displayLoaderOrProfile}
    </div>
  )
}

export default Freelances