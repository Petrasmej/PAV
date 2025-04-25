import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import HomeEN from './pages/HomeEN';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
    </Router>
  );
};

export default App;
