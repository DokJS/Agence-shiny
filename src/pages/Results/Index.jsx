import React, {useContext} from 'react';
import { SurveyContext } from '../../Utils/Context/Index';

const Results = () => {
  const {answers} = useContext(SurveyContext);
  console.log(answers)
  return (
    <div>Results</div>
  )
}

export default Results