import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Index';
import Survey from './pages/Survey/Index';
import Header from './components/Header/Index';
import Error from './components/Error/Index';
import Results from './pages/Results/Index';
import Freelances from './pages/Freelances/Index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
div {
  font-family: 'Trebuchet MS' , Helvetica, sans-serif,
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/survey/:questionNumber' element={<Survey/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/results' element={<Results/>}/>
      <Route path='/freelances' element={<Freelances/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

