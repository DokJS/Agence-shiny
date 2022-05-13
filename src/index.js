import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Index';
import Survey from './pages/Survey/Index';
import Header from './components/Header/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/survey' element={<Survey/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

