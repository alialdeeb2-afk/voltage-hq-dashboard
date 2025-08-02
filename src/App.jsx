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
      <BrowserRouter>
        <Routes>
          <Route path="/login"   element={<Login />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/admin"   element={<AdminPanel />} />
          <Route path="/hq"      element={<HQDashboard />} />
          <Route path="*"        element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
 
