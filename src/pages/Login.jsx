import logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Fundo com imagem e camada verde */}
      <div className="absolute inset-0">
        <img
          src="https://chaves.pa.gov.br/wp-content/uploads/2021/05/DJI_0540-HDR-1536x1151.jpg"
          alt="Fundo Chaves"
          className="w-full h-full object-cover opacity-80 saturate-80 animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-emerald-800 bg-opacity-80" />
      </div>

      {/* Card de login */}
      <div className="relative z-10 bg-white bg-opacity-98 text-green-900 rounded-2xl shadow-2xl p-8 sm:p-10 w-[90%] max-w-md backdrop-blur-sm">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-12 w-auto mx-auto mb-4 drop-shadow"
        />

        <h2 className="text-center text-lg sm:text-xl font-semibold mb-6">Acesso ao Sistema</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block mb-1 text-sm font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            />
          </div>

          <div>
            <label htmlFor="tipo" className="block mb-1 text-sm font-medium">Tipo de usuário</label>
            <select
              id="tipo"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            >
              <option value="">Selecione</option>
              <option value="admin">Administrador</option>
              <option value="regulador">Regulador</option>
              <option value="solicitante">Solicitante de Resgate</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 text-white font-semibold py-2 rounded-lg hover:bg-emerald-800 shadow-md transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
