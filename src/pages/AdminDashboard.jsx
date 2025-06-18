// src/pages/AdminDashboard.jsx
import { useState } from 'react';
import { FiUsers, FiClipboard, FiCalendar, FiBarChart2, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-emerald-800 text-white w-64 p-4 space-y-6 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
        <h2 className="text-2xl font-bold mb-6">S.O.S Chaves</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 hover:bg-emerald-700 p-2 rounded">
            <FiUsers /> Usuários
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-emerald-700 p-2 rounded">
            <FiClipboard /> Resgates
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-emerald-700 p-2 rounded">
            <FiCalendar /> Exames
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-emerald-700 p-2 rounded">
            <FiBarChart2 /> Relatórios
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-emerald-700 p-2 rounded">
            <FiSettings /> Configurações
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-red-700 p-2 rounded">
            <FiLogOut /> Sair
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="md:hidden mb-4 text-emerald-800">
          <FiMenu size={24} />
        </button>

        <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Resgates Hoje</p>
            <p className="text-2xl font-bold text-emerald-700">14</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Usuários Ativos</p>
            <p className="text-2xl font-bold text-emerald-700">56</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Exames Agendados</p>
            <p className="text-2xl font-bold text-emerald-700">22</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Pendências</p>
            <p className="text-2xl font-bold text-emerald-700">3</p>
          </div>
        </div>
      </main>
    </div>
  );
}
