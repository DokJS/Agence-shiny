import React from 'react'
import {Link, useParams} from 'react-router-dom';

const Survey = () => {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    
    const prevButton = questionNumberInt > 1 && (<Link to={`survey/${questionNumberInt - 1}`}>Précedent</Link>);
    const nextButton = questionNumberInt < 10 ? (<Link to={`survey/${questionNumberInt + 1}`}>Suivant</Link>)
    : (<Link to='/results'>Résultats</Link>)

  return (
    <div>
        <h1>Questionnaire</h1>
        <h2>Question : {questionNumber}</h2>
        <div>
          {prevButton}
          {nextButton}
        </div>
    </div>
  )
}

export default Survey