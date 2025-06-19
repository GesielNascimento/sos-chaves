import { useState } from 'react';
import { FiUser, FiSettings, FiEdit2, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import SystemLayout from '../components/SystemLayout';
import { useNavigate } from 'react-router-dom';

export default function Configuracoes() {
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState({
    nome: 'Rafael Ferreira',
    email: 'secretaria.saude@chaves.pa.gov.br',
    cargo: 'Secretário Municipal de Saúde',
    });

  const [preferencias, setPreferencias] = useState({
    examesPorDia: 25,
    mostrarBoasVindas: true,
    modoNoturno: false,
  });

  const resetarSistema = () => {
    if (confirm('Deseja realmente apagar todos os dados simulados do sistema?')) {
      localStorage.clear();
      alert('Dados de teste apagados. Atualize a página.');
    }
  };

  return (
    <SystemLayout>
      <main className="max-w-4xl mx-auto pt-28 px-4 pb-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Configurações do Sistema</h1>
          <button onClick={() => navigate('/admin')} className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            <FiArrowLeft /> Voltar
          </button>
        </div>

        <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4"><FiUser /> Perfil do Administrador</h2>
        <div className="space-y-2 text-sm">
            <p><strong>Nome:</strong> {perfil.nome}</p>
            <p><strong>E-mail:</strong> {perfil.email}</p>
            <p><strong>Cargo:</strong> {perfil.cargo}</p>
        </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4"><FiSettings /> Preferências do Sistema</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block font-medium mb-1">Limite de exames por dia</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={preferencias.examesPorDia}
                onChange={(e) => setPreferencias({ ...preferencias, examesPorDia: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Mensagem de boas-vindas</label>
              <select
                className="w-full p-2 border rounded"
                value={preferencias.mostrarBoasVindas ? 'sim' : 'nao'}
                onChange={(e) => setPreferencias({ ...preferencias, mostrarBoasVindas: e.target.value === 'sim' })}
              >
                <option value="sim">Ativar</option>
                <option value="nao">Desativar</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Modo Noturno (experimental)</label>
              <select
                className="w-full p-2 border rounded"
                value={preferencias.modoNoturno ? 'sim' : 'nao'}
                onChange={(e) => setPreferencias({ ...preferencias, modoNoturno: e.target.value === 'sim' })}
              >
                <option value="sim">Ativar</option>
                <option value="nao">Desativar</option>
              </select>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-red-700"><FiTrash2 /> Ações Críticas</h2>
          <button
            onClick={resetarSistema}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Apagar todos os dados de teste (localStorage)
          </button>
        </section>
      </main>
    </SystemLayout>
  );
}
