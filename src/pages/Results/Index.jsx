import React, { useContext } from 'react'
import { SurveyContext, ThemeContext } from '../../Utils/Context/Index'
import { useFetch } from '../../Utils/Hooks/Index'
import styled from 'styled-components'
import colors from '../../Utils/Style/colors'
import { useTheme } from '../../Utils/Hooks/Index'
import { Loader } from '../../Utils/Style/Atom'

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
 * Used for modify the user's responses format for be able to include them in a request
 * @param userResponse, represents the object which contains responses
 * @returns user's response in string format separed by '&'
 */

const formatUserAnswer = (answers) => {
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

const Results = () => {
  const { answers } = useContext(SurveyContext)
  const queryParams = formatUserAnswer(answers)
  console.log(queryParams)

  const theme = useTheme(ThemeContext)
  console.log(theme)

  const { data, error, isLoading } = useFetch(
      `http://www.localhost:8000/results?${queryParams.toString()}`
  )
  const { resultsData } = data

  const displayResults =
    resultsData &&
    resultsData.map(({ title, description }, index) => {
      return (
        <div key={index}>
          <DescriptionWrapper>
            <JobTitle theme={theme}>{title}</JobTitle>
            <JobDescription theme={theme}>{description}</JobDescription>
          </DescriptionWrapper>
        </div>
      )
    })

  const displayResultsTitle =
    resultsData &&
    resultsData.map(({ title, ...rest }, index) => {
      return (
        <JobTitle key={index} theme={theme}>
          {title}
          {index === resultsData.length - 1 ? '' : ', '}
        </JobTitle>
      )
    })

  return !error ? (
    <ResultsContainer>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin:{' '}
      </ResultsTitle>
      <StyledTitleContainer>{displayResultsTitle}</StyledTitleContainer>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        displayResults
      )}
    </ResultsContainer>
  ) : (
    <div>Il y'a un problème</div>
  )
}

export default Results
