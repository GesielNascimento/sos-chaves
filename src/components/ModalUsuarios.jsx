import { useState, useEffect } from 'react';

export default function ModalUsuarios({ isOpen, onClose, onSalvar, usuarioEditando }) {
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    matricula: "",
    ubs: "",
    localidade: "",
    telefone: "",
    email: "",
    nascimento: "",
    tipo: "Administrador"
  });

  useEffect(() => {
    if (usuarioEditando) {
      setNovoUsuario(usuarioEditando);
    } else {
      setNovoUsuario({
        nome: "",
        matricula: "",
        ubs: "",
        localidade: "",
        telefone: "",
        email: "",
        nascimento: "",
        tipo: "Administrador"
      });
    }
  }, [usuarioEditando, isOpen]);

  const handleSubmit = () => {
    onSalvar(novoUsuario);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {usuarioEditando ? "Editar Usuário" : "Cadastrar Novo Usuário"}
        </h2>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-emerald-700 text-xl font-bold">+</span> {usuarioEditando ? "Editar Usuário" : "Novo Usuário"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="border p-2 rounded"
              value={novoUsuario.nome}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
            />
            <input
              type="text"
              placeholder="Matrícula"
              className="border p-2 rounded"
              value={novoUsuario.matricula}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, matricula: e.target.value })}
            />
            <input
              type="text"
              placeholder="UBS"
              className="border p-2 rounded"
              value={novoUsuario.ubs}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, ubs: e.target.value })}
            />
            <input
              type="text"
              placeholder="Localidade"
              className="border p-2 rounded"
              value={novoUsuario.localidade}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, localidade: e.target.value })}
            />
            <input
              type="text"
              placeholder="Telefone"
              className="border p-2 rounded"
              value={novoUsuario.telefone}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border p-2 rounded"
              value={novoUsuario.email}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={novoUsuario.nascimento}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, nascimento: e.target.value })}
            />
            <select
              className="border p-2 rounded"
              value={novoUsuario.tipo}
              onChange={(e) => setNovoUsuario({ ...novoUsuario, tipo: e.target.value })}
            >
              <option>Administrador</option>
              <option>Regulador</option>
              <option>Solicitante</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800"
          >
            {usuarioEditando ? "Salvar Alterações" : "Adicionar Usuário"}
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
