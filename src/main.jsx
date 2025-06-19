import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Usuarios from './pages/Usuarios.jsx';
import Resgates from './pages/Resgates.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/resgates" element={<Resgates />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
