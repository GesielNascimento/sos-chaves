import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Usuarios from './pages/Usuarios.jsx';
import Resgates from './pages/Resgates.jsx';
import Exames from './pages/Exames';
import Configuracoes from './pages/Configuracoes';



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
        <Route path="/exames" element={<Exames />} />
        <Route path="/configuracoes" element={<Configuracoes />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
