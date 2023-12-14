// src/index.js

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes for other pages if needed */}
    </Routes>
  </Router>,
  document.getElementById('root')
);



