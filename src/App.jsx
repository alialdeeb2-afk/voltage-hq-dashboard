import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HQDashboard from './components/HQDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HQDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

