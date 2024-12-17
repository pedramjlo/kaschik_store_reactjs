import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './components/Home';
import Authnetication from './components/auth/Authentication';




function App() {


  return (
    <Router>

        <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='authnetication/' element={<Authnetication/>} />
      
        </Routes>

      </Router>

  );
}

export default App;