import { useState } from 'react';
import { FiPlus, FiArrowLeft, FiEye, FiTrash2 } from 'react-icons/fi';
import SystemLayout from '../components/SystemLayout';
import { useNavigate } from 'react-router-dom';

export default function Exames() {
  const [exames, setExames] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [exameSelecionado, setExameSelecionado] = useState(null);
  const [formulario, setFormulario] = useState({
    sus: '', nome: '', ubs: '', localidade: '', tipo: '', dataAgendada: ''
  });
  const navigate = useNavigate();

  const examesPorData = (data) => exames.filter(e => e.dataAgendada === data).length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (examesPorData(formulario.dataAgendada) >= 25) {
      alert("Limite de 25 exames por dia atingido para esta data.");
      return;
    }
    const novoExame = {
      ...formulario,
      id: Date.now(),
      status: 'Agendado',
      solicitante: 'João Silva'
    };
    setExames([...exames, novoExame]);
    setFormulario({ sus: '', nome: '', ubs: '', localidade: '', tipo: '', dataAgendada: '' });
    setMostrarModal(false);
  };

  const excluirExame = (id) => {
    if (window.confirm('Deseja excluir este exame?')) {
      setExames(exames.filter(e => e.id !== id));
    }
  };

  return (
    <SystemLayout>
      <main className="max-w-7xl mx-auto pt-28 px-4 pb-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Exames</h1>
          <div className="flex gap-2">
            <button onClick={() => navigate('/admin')} className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
              <FiArrowLeft /> Voltar
            </button>
            <button onClick={() => setMostrarModal(true)} className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800">
              <FiPlus /> Novo Exame
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-emerald-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">SUS</th>
                <th className="px-4 py-3 text-left">Paciente</th>
                <th className="px-4 py-3 text-left">UBS</th>
                <th className="px-4 py-3 text-left">Localidade</th>
                <th className="px-4 py-3 text-left">Tipo</th>
                <th className="px-4 py-3 text-left">Data</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Solicitante</th>
                <th className="px-4 py-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {exames.length === 0 ? (
                <tr><td colSpan="9" className="text-center py-4 text-gray-500">Nenhum exame agendado.</td></tr>
              ) : (
                exames.map(exame => (
                  <tr key={exame.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{exame.sus}</td>
                    <td className="px-4 py-2">{exame.nome}</td>
                    <td className="px-4 py-2">{exame.ubs}</td>
                    <td className="px-4 py-2">{exame.localidade}</td>
                    <td className="px-4 py-2">{exame.tipo}</td>
                    <td className="px-4 py-2">{exame.dataAgendada}</td>
                    <td className="px-4 py-2 text-yellow-600">{exame.status}</td>
                    <td className="px-4 py-2">{exame.solicitante}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Visualizar"
                          onClick={() => setExameSelecionado(exame)}
                        >
                          <FiEye />
                        </button>
                        <button onClick={() => excluirExame(exame.id)} className="text-red-600 hover:text-red-800" title="Excluir">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Novo Exame</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="sus" required placeholder="Nº Cartão SUS*" className="input" value={formulario.sus} onChange={handleChange} />
                <input type="text" name="nome" required placeholder="Nome do Paciente*" className="input" value={formulario.nome} onChange={handleChange} />
                <input type="text" name="ubs" placeholder="UBS" className="input" value={formulario.ubs} onChange={handleChange} />
                <input type="text" name="localidade" placeholder="Localidade" className="input" value={formulario.localidade} onChange={handleChange} />
                <select name="tipo" required className="input" value={formulario.tipo} onChange={handleChange}>
                  <option value="">Tipo de Exame*</option>
                  <option>Hemograma</option>
                  <option>Raio-X</option>
                  <option>Ultrassom</option>
                  <option>Urina</option>
                </select>
                <input type="date" name="dataAgendada" required className="input" value={formulario.dataAgendada} onChange={handleChange} />

                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" onClick={() => setMostrarModal(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancelar</button>
                  <button type="submit" className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800">Agendar</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {exameSelecionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Detalhes do Exame</h2>
              <div className="space-y-2 text-sm">
                <p><strong>SUS:</strong> {exameSelecionado.sus}</p>
                <p><strong>Paciente:</strong> {exameSelecionado.nome}</p>
                <p><strong>UBS:</strong> {exameSelecionado.ubs}</p>
                <p><strong>Localidade:</strong> {exameSelecionado.localidade}</p>
                <p><strong>Tipo:</strong> {exameSelecionado.tipo}</p>
                <p><strong>Data Agendada:</strong> {exameSelecionado.dataAgendada}</p>
                <p><strong>Status:</strong> {exameSelecionado.status}</p>
                <p><strong>Solicitante:</strong> {exameSelecionado.solicitante}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={() => setExameSelecionado(null)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Fechar</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </SystemLayout>
  );
}
