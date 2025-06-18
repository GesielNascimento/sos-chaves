import logo from '../assets/logob.png';
import ges from '../assets/ges.png'; // imagem real do usuário logado

export default function SystemLayout({ children }) {
  const user = {
    nome: "Gesiel Nascimento",
    imagem: ges // aqui você pode trocar para null para testar a letra
  };

  const primeiraLetra = user.nome ? user.nome.charAt(0).toUpperCase() : "?";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-emerald-800 text-white px-4 py-4 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo + Título */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-[200px] h-15 object-contain" />
          </div>

          {/* Perfil do Usuário */}
          <div className="flex items-center gap-3">
            <span className="text-sm hidden sm:block">Bem-vindo, {user.nome.split(" ")[0]}</span>

            {user.imagem ? (
              <img
                src={user.imagem}
                alt="Usuário"
                className="w-10 h-10 rounded-full border-2 border-white shadow"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold shadow">
                {primeiraLetra}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 w-full">{children}</main>

      {/* Rodapé */}
      <footer className="bg-emerald-800 text-white text-center text-sm py-3 mt-auto">
        &copy; {new Date().getFullYear()} Sistema de Saúde Inteligente — Desenvolvido por <span className="font-semibold">Gesiel</span>
      </footer>
    </div>
  );
}
