import { useState } from 'react';
import { PlusCircle, Eye, Trash2, FileText, MessageCircle, ArrowLeft } from 'lucide-react';
import SystemLayout from "../components/SystemLayout";
import { useNavigate } from 'react-router-dom';

export default function Resgates() {
  const [showModal, setShowModal] = useState(false);
  const [resgates, setResgates] = useState([]);
  const [formData, setFormData] = useState({
    sus: '', nome: '', acompanhante: '', ubs: '', localidade: '', prioridade: '', observacoes: '', fotos: []
  });
  const [resgateSelecionado, setResgateSelecionado] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      sus: '', nome: '', acompanhante: '', ubs: '', localidade: '', prioridade: '', observacoes: '', fotos: []
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fotos') {
      setFormData({ ...formData, fotos: [...files] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResgates([...resgates, {
      ...formData,
      status: 'Aguardando',
      solicitante: 'João Silva'
    }]);
    handleCloseModal();
  };

  const handleDelete = (index) => {
    const updated = [...resgates];
    updated.splice(index, 1);
    setResgates(updated);
  };

  const handleVisualizar = (resgate) => {
    setResgateSelecionado(resgate);
  };

  const handleFecharVisualizacao = () => {
    setResgateSelecionado(null);
  };

  return (
    <SystemLayout>
      <main className="max-w-7xl mx-auto pt-28 px-4 pb-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/admin')} className="text-green-700 hover:text-green-900">
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Resgates</h1>
          </div>
          <button
            onClick={handleOpenModal}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
          >
            <PlusCircle size={20} /> Novo Resgate
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Nº SUS</th>
                <th className="px-4 py-3 text-left">Paciente</th>
                <th className="px-4 py-3 text-left">Localidade</th>
                <th className="px-4 py-3 text-left">UBS</th>
                <th className="px-4 py-3 text-left">Prioridade</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Solicitante</th>
                <th className="px-4 py-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {resgates.map((r, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{r.sus}</td>
                  <td className="px-4 py-3">{r.nome}</td>
                  <td className="px-4 py-3">{r.localidade}</td>
                  <td className="px-4 py-3">{r.ubs}</td>
                  <td className="px-4 py-3">{r.prioridade}</td>
                  <td className="px-4 py-3 text-yellow-600 font-semibold">{r.status}</td>
                  <td className="px-4 py-3">{r.solicitante}</td>
                  <td className="px-4 py-3 flex justify-center gap-2">
                    <button title="Visualizar" onClick={() => handleVisualizar(r)} className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                    <button title="Gerar PDF" onClick={() => setShowPdfPreview(true)} className="text-gray-600 hover:text-gray-800"><FileText size={18} /></button>
                    <button title="Chat" onClick={() => setShowChat(true)} className="text-green-600 hover:text-green-800"><MessageCircle size={18} /></button>
                    <button title="Excluir" onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal de Visualização */}
        {resgateSelecionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Visualização do Resgate</h2>
              <div className="space-y-2 text-sm">
                <p><strong>SUS:</strong> {resgateSelecionado.sus}</p>
                <p><strong>Paciente:</strong> {resgateSelecionado.nome}</p>
                <p><strong>Acompanhante:</strong> {resgateSelecionado.acompanhante}</p>
                <p><strong>UBS:</strong> {resgateSelecionado.ubs}</p>
                <p><strong>Localidade:</strong> {resgateSelecionado.localidade}</p>
                <p><strong>Prioridade:</strong> {resgateSelecionado.prioridade}</p>
                <p><strong>Status:</strong> {resgateSelecionado.status}</p>
                <p><strong>Solicitante:</strong> {resgateSelecionado.solicitante}</p>
                <p><strong>Observações:</strong> {resgateSelecionado.observacoes}</p>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={handleFecharVisualizacao} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Fechar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Chat */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Chat Simulado</h2>
              <div className="h-40 overflow-y-auto border p-3 rounded mb-4 text-sm">
                <p><strong>João Silva:</strong> Solicito resgate urgente, paciente com febre alta.</p>
                <p><strong>Regulador:</strong> Entendido. Encaminharemos a equipe.</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setShowChat(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Fechar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de PDF Preview */}
        {showPdfPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Pré-visualização da Ficha</h2>
              <p className="text-sm">Aqui você poderá gerar a ficha de resgate em PDF com todos os dados preenchidos do paciente.</p>
              <div className="mt-4 flex justify-end">
                <button onClick={() => setShowPdfPreview(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Fechar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Novo Resgate */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
              <h2 className="text-xl font-semibold mb-4">Nova Solicitação de Resgate</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="sus" required placeholder="Nº Cartão SUS*" value={formData.sus} onChange={handleChange} className="input" />
                  <input type="text" name="nome" placeholder="Nome do Paciente" value={formData.nome} onChange={handleChange} className="input" />
                  <input type="text" name="acompanhante" placeholder="Nome do Acompanhante" value={formData.acompanhante} onChange={handleChange} className="input" />
                  <input type="text" name="ubs" placeholder="UBS de Origem" value={formData.ubs} onChange={handleChange} className="input" />
                  <input type="text" name="localidade" placeholder="Localidade" value={formData.localidade} onChange={handleChange} className="input" />
                  <select name="prioridade" required value={formData.prioridade} onChange={handleChange} className="input">
                    <option value="">Prioridade*</option>
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                  </select>
                </div>
                <textarea name="observacoes" placeholder="Condição Clínica / Observações" value={formData.observacoes} onChange={handleChange} className="input w-full h-24"></textarea>
                <label className="block text-sm font-medium mt-2">Anexar Foto(s)*</label>
                <input type="file" name="fotos" accept="image/*" required multiple onChange={handleChange} className="block w-full" />
                <div className="flex justify-end gap-2 mt-4">
                  <button onClick={handleCloseModal} type="button" className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancelar</button>
                  <button type="submit" className="px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </SystemLayout>
  );
}
