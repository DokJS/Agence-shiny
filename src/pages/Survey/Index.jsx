import React, { useContext } from 'react'
import { Link, useParams} from 'react-router-dom'
import { Loader } from '../../Utils/Style/Atom'
import { StyledLink } from '../../Utils/Style/Atom'
import styled from 'styled-components'
import colors from '../../Utils/Style/colors';
import { SurveyContext } from '../../Utils/Context/Index'
import { useFetch } from '../../Utils/Hooks/Index'


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSpanError = styled.div`
 text-align: center
`

const QuestionTitle = styled.h2`
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected  ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Survey = () => {
  const {answers,addAnswer} = useContext(SurveyContext)
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)

  // Used for save user's response in answers
  const saveResponse = (response) => {
    addAnswer({[questionNumberInt]:response})
  }




  const {data,isLoading,error} = useFetch('http://www.localhost:8000/survey');
  const {surveyData} = data




  const prevButton = questionNumberInt > 1 && (
    <StyledLink to={`/survey/${questionNumberInt - 1}`}>Précedent</StyledLink>
  )

  const nextButton =
    questionNumberInt < 10 ? (
      <StyledLink to={`/survey/${questionNumberInt + 1}`} >Suivant</StyledLink>
    ) : (
      <Link to="/results">Résultats</Link>
    )

  const buttonDisplay = surveyData  && nextButton

  const maincontent = isLoading ? (
    <Loader />
  ) : (
    <QuestionContent>{ surveyData && (surveyData[questionNumberInt])}</QuestionContent>
  )

  return !error ? (
    <SurveyContainer>
      <QuestionTitle>Question : {questionNumberInt}</QuestionTitle>
      {maincontent}
      <ReplyWrapper>
        <ReplyBox isSelected={answers[questionNumber] === true ? true : false}  
        onClick={()=>saveResponse(true)}>
          Oui
        </ReplyBox>
        <ReplyBox isSelected={answers[questionNumber] === false ? true : false} 
        onClick={()=>saveResponse(false)} >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        {prevButton}
        {buttonDisplay}
      </LinkWrapper>
    </SurveyContainer>
  ): (<StyledSpanError>Il y'a un problème</StyledSpanError>)
}

export default Survey;
