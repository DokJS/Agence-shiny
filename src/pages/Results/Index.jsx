import React, { useContext } from 'react'
import { SurveyContext, ThemeContext } from '../../Utils/Context/Index'
import { useFetch } from '../../Utils/Hooks/Index'
import styled from 'styled-components'
import colors from '../../Utils/Style/colors'
import { useTheme } from '../../Utils/Hooks/Index'
import { Loader } from '../../Utils/Style/Atom'
import EmptyList from '../../components/EmptyList/Index'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 650px;
  margin: 60px auto;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
  margin: 0 auto;
`

const StyledTitleContainer = styled.div`
  margin: 7px auto;
  font-size: 23px;
`

const DescriptionWrapper = styled.div`
  padding: 18px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

/**
 * Used to format user's response before the call
 * @param userResponse, represents object which contains responses
 * @returns user's response in string format separed by '&'
 */

export const formatUserAnswer = (answers) => {
  if(answers !=={}){
    const responseNumber = Object.keys(answers)
  const responseArr = []

  responseNumber.forEach((current) => {
    let responseInBool = ''
    if(current < 7){
      if (answers[current] === true) {
        responseInBool = 1
      responseArr.push(`a${current}=${responseInBool}`)
      }
    }
  })

  return responseArr.join('&')
  }
  return ''
}

export const formatJobList = (title,listLength,index)=>{
  if(index === listLength -1){
    return title
  }
  return `${title}, `
}

const Results = () => {
  const { answers } = useContext(SurveyContext)
  const queryParams = formatUserAnswer(answers)
  console.log(queryParams)

  const theme = useTheme(ThemeContext)
  console.log(theme)

  const { data, error, isLoading } = useFetch(`http://www.localhost:8000/results?${queryParams.toString()}`
  )
  const { resultsData } = data

 // Used for display datas retrieved during call
  const resultGroup =
    resultsData &&
    (resultsData.map(({ title, description }, index) => {
      return (
        <div key={index}>
          <DescriptionWrapper>
            <JobTitle theme={theme}>{title}</JobTitle>
            <JobDescription theme={theme}>{description}</JobDescription>
          </DescriptionWrapper>
        </div>
      )
    }))

    // Used for display result's title
  const titleGroup =
    resultsData &&
    resultsData.map(({title}, index) => {
      return (
        <JobTitle key={index} theme={theme}>
          {formatJobList(title,resultsData.length,index)}
        </JobTitle>
      )
    })


  return queryParams.length === 0 || queryParams === '' ? 
  <EmptyList/>
  :( !error ? (
    <ResultsContainer>
      <ResultsTitle theme={theme}>
      <StyledTitleContainer> Les compétences dont vous avez besoin :{titleGroup}</StyledTitleContainer>
      </ResultsTitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        resultGroup
      )}
    </ResultsContainer>
  ) : (
    <div>Il y'a un problème</div>
  ))
}

export default Results
