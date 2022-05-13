import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/survey/42"}>Questionnaire</Link>
        <Link to={"/results"}>Résultats</Link>
        <Link to={"/freelances"}>Freelances</Link>
    </nav>
  )
}

export default Header