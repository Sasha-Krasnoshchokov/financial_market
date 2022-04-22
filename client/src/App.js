/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import Home from './components/screens/Home';
import News from './components/screens/News';
import LogInOut from './components/screens/LogInOut';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="loginout" element={<LogInOut />} />
      </Routes>
    </div>
  );
}
