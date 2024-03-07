// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Cricket from './components/Cricket';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Cricket" element={<Cricket />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
