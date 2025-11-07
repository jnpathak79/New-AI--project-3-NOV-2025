import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InterviewGuide from './pages/InterviewGuide';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InterviewGuide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
