import { useState } from 'react';
import { 
    FiEdit, 
    FiTrash2, 
    FiPlus,
    FiArrowLeft } from 'react-icons/fi';
import ModalUsuarios from '../components/ModalUsuarios';
import SystemLayout from '../components/SystemLayout';
import { Link } from 'react-router-dom';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nome: "Maria Andrade",
      matricula: "1001",
      ubs: "UBS Central",
      localidade: "Centro",
      telefone: "(96) 99111-2233",
      email: "maria@ubs.com",
      nascimento: "1992-04-12",
      tipo: "Regulador"
    },
    {
      id: 2,
      nome: "João Silva",
      matricula: "1002",
      ubs: "UBS Ribeirinha",
      localidade: "Comunidade Aramã",
      telefone: "(96) 99222-3344",
      email: "joao@ubs.com",
      nascimento: "1988-09-23",
      tipo: "Solicitante"
    }
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const adicionarOuAtualizarUsuario = (usuario) => {
    if (usuarioEditando) {
      // Atualiza usuário existente
      const atualizados = usuarios.map((u) =>
        u.id === usuarioEditando.id ? { ...usuario, id: usuarioEditando.id } : u
      );
      setUsuarios(atualizados);
    } else {
      // Adiciona novo
      setUsuarios([...usuarios, { ...usuario, id: Date.now() }]);
    }
    setMostrarModal(false);
    setUsuarioEditando(null);
  };

  const excluirUsuario = (id) => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmacao) {
      setUsuarios(usuarios.filter((user) => user.id !== id));
    }
  };

  const abrirModalNovo = () => {
    setUsuarioEditando(null);
    setMostrarModal(true);
  };

  const abrirModalEdicao = (usuario) => {
    setUsuarioEditando(usuario);
    setMostrarModal(true);
  };

  return (
    <SystemLayout>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">

        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-emerald-800">
            Gerenciamento de Usuários
        </h2>

        <div className="flex gap-2">
            <Link
            to="/admin"
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            >
            <FiArrowLeft /> Voltar
            </Link>

            <button
            className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800"
            onClick={abrirModalNovo}
            >
            <FiPlus /> Novo Usuário
            </button>
        </div>
        </div>





        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-emerald-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Nome</th>
                <th className="px-4 py-2">Matrícula</th>
                <th className="px-4 py-2">UBS</th>
                <th className="px-4 py-2">Localidade</th>
                <th className="px-4 py-2">Telefone</th>
                <th className="px-4 py-2">E-mail</th>
                <th className="px-4 py-2">Tipo</th>
                <th className="px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {usuarios.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{user.nome}</td>
                  <td className="px-4 py-2 text-center">{user.matricula}</td>
                  <td className="px-4 py-2 text-center">{user.ubs}</td>
                  <td className="px-4 py-2 text-center">{user.localidade}</td>
                  <td className="px-4 py-2 text-center">{user.telefone}</td>
                  <td className="px-4 py-2 text-center">{user.email}</td>
                  <td className="px-4 py-2 text-center">{user.tipo}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Editar"
                        onClick={() => abrirModalEdicao(user)}
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => excluirUsuario(user.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Excluir"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {usuarios.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    Nenhum usuário cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ModalUsuarios
        isOpen={mostrarModal}
        onClose={() => {
          setMostrarModal(false);
          setUsuarioEditando(null);
        }}
        onSalvar={adicionarOuAtualizarUsuario}
        usuarioEditando={usuarioEditando}
      />
    </SystemLayout>
  );
}
