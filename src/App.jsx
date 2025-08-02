import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Login       from './components/Login';
import RequestForm from './components/RequestForm';
import AdminPanel  from './components/AdminPanel';
import HQDashboard from './components/HQDashboard';

export default function App() {
  return (
    <AuthProvider>
      {/* Test mount indicator */}
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        🚀 App Mounted 🚀
      </h1>

      <HashRouter>
        <Routes>
          {/* Redirect root hash (#/) straight to #/login */}
          <Route path="/"       element={<Navigate to="/login" replace />} />

          {/* Your real routes */}
          <Route path="login"   element={<Login />} />
          <Route path="request" element={<RequestForm />} />
          <Route path="admin"   element={<AdminPanel />} />
          <Route path="hq"      element={<HQDashboard />} />

          {/* Catch-all: send anything unknown back to login */}
          <Route path="*"       element={<Navigate to="/login" replace />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}
