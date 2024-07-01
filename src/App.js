import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
