import React,{useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { Loader } from '../../Utils/Style/Atom';
import  {StyledLink}  from '../../Utils/Style/Atom';
import styled from 'styled-components';
import colors from '../../Utils/Style/colors';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`

  const QuestionTitle = styled.h2`
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const Survey = () => {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)

    // Used to contain question retrieved from the API
    const [surveyData, setSurveyData] = useState({})
    // Used to detect data's disponibility
    const [isDataLoading, setIsDataLoading] = useState(true)
    // used to detect when display buttons
    const [display, setDisplay] = useState(false);
    
    const prevButton = questionNumberInt > 1 && (<StyledLink to={`survey/${questionNumberInt - 1}`}>Précedent</StyledLink>);
    const nextButton = questionNumberInt < 10 ? (<StyledLink to={`survey/${questionNumberInt + 1}`}>Suivant</StyledLink>)
    : (<Link to='/results'>Résultats</Link>);
    const buttonDisplay = !isDataLoading &&(nextButton)
    const displayLoaderOrQuestion = isDataLoading ? (<Loader/>)
    :<QuestionContent>QuestionContent</QuestionContent>;

  return (
    <SurveyContainer>
      <QuestionTitle>Question : {questionNumberInt}</QuestionTitle>
        {displayLoaderOrQuestion}
        <LinkWrapper>
      {prevButton}
      {buttonDisplay}
    </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey