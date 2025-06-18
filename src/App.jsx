import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Imagem de fundo com efeito de zoom */}
      <div className="absolute inset-0">
        <img
          src="https://chaves.pa.gov.br/wp-content/uploads/2021/05/DJI_0540-HDR-1536x1151.jpg"
          alt="Vista aérea de Chaves"
          className="w-full h-full object-cover opacity-80 saturate-80 animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-emerald-900 bg-opacity-80" />
      </div>

      {/* Quadro branco com conteúdo */}
      <main className="relative z-10 bg-white bg-opacity-97 rounded-2xl shadow-xl px-6 py-8 sm:px-8 sm:py-10 w-[90%] max-w-2xl text-center text-green-900 backdrop-blur-sm">
        <img
          src={logo}
          alt="Logo S.O.S Chaves"
          className="mx-auto w-auto max-h-8 sm:max-h-12 mb-4 drop-shadow"
        />

        <p className="text-base sm:text-lg md:text-xl mb-6 font-medium">
          Conectando saúde às comunidades ribeirinhas
        </p>

        <ul className="text-left text-sm md:text-base mb-8 space-y-2 font-medium">
          <li>📌 Sistema inteligente de regulação de resgates</li>
          <li>📍 Atendimento rápido para regiões isoladas</li>
          <li>📡 Monitoramento em tempo real</li>
          <li>📂 Histórico clínico e relatórios unificados</li>
        </ul>

        <Link
          to="/login"
          className="inline-block bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-emerald-800 transition"
        >
          Acessar Sistema
        </Link>
      </main>

      {/* Rodapé */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 text-sm text-white text-center py-6 bg-gradient-to-t from-emerald-700 to-transparent">
        © 2025 - Prefeitura Municipal de Chaves • Secretaria Municipal de Saúde
      </footer>
    </div>
  );
}
