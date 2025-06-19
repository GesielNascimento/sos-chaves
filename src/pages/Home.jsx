import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);

  const testimonials = [
    {
      text: "O tempo de atendimento reduziu drasticamente. Antes eram horas, agora são minutos.",
      author: "Dr. Maria Santos",
      role: "Coordenadora de Urgência",
      location: "UBS Ribeirinha Santana"
    },
    {
      text: "Conseguimos acompanhar cada solicitação em tempo real. É uma revolução no atendimento.",
      author: "Enfermeira Ana Paula",
      role: "Gestora de Remoções",
      location: "Base de Apoio Mazagão"
    },
    {
      text: "A digitalização transformou nossa capacidade de resposta às emergências.",
      author: "Técnico João Silva",
      role: "Coordenador de Resgates",
      location: "Central de Operações"
    }
  ];

  const stats = [
    { value: "89%", label: "Redução no Tempo de Atendimento" },
    { value: "156", label: "Vidas Impactadas por Mês" },
    { value: "24/7", label: "Monitoramento Contínuo" },
    { value: "100%", label: "Digitalmente Integrado" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
            backgroundSize: '50px 0px'
          }}></div>
        </div>

        <div className="relative z-10 py-20 px-6 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">❤️</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              S.O.S Chaves
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            A revolução digital que está <span className="text-yellow-300 font-bold">salvando vidas</span> nas comunidades ribeirinhas do Amapá
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-white to-gray-100 text-emerald-800 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <span>▶️</span>
              Ver Demonstração
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <a
              href="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
            >
              Acessar Sistema
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 text-emerald-200 text-2xl">
                  {index === 0 && '⏱️'}
                  {index === 1 && '❤️'}
                  {index === 2 && '🛡️'}
                  {index === 3 && '⚡'}
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500 rounded-full opacity-10 animate-bounce"></div>
      </header>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            O Desafio que <span className="text-red-600">Enfrentamos</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500 transform hover:scale-105 transition-transform">
              <div className="text-red-500 text-4xl font-bold mb-4">4+ Horas</div>
              <p className="text-gray-700 font-semibold mb-2">Tempo médio de espera</p>
              <p className="text-gray-600 text-sm">Para remoções de emergência em áreas ribeirinhas</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500 transform hover:scale-105 transition-transform">
              <div className="text-orange-500 text-4xl font-bold mb-4">78%</div>
              <p className="text-gray-700 font-semibold mb-2">Perda de informação</p>
              <p className="text-gray-600 text-sm">Em registros manuais e comunicação por rádio</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-600 transform hover:scale-105 transition-transform">
              <div className="text-red-600 text-4xl font-bold mb-4">Zero</div>
              <p className="text-gray-700 font-semibold mb-2">Rastreabilidade</p>
              <p className="text-gray-600 text-sm">Das solicitações e do status dos atendimentos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              A <span className="text-emerald-600">Solução Digital</span> que Transforma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              S.O.S Chaves não é apenas um sistema. É uma revolução no atendimento de saúde ribeirinha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Atendimento Instantâneo</h3>
              <p className="text-gray-600 leading-relaxed">Solicitações processadas em segundos, não horas. Interface intuitiva que qualquer profissional domina rapidamente.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Inteligência de Dados</h3>
              <p className="text-gray-600 leading-relaxed">Dashboard em tempo real com métricas, tendências e insights para tomada de decisão estratégica.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Geolocalização Avançada</h3>
              <p className="text-gray-600 leading-relaxed">Rastreamento preciso de embarcações e otimização automática de rotas para emergências.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Gestão Integrada</h3>
              <p className="text-gray-600 leading-relaxed">Coordenação perfeita entre UBS, bases de apoio e equipes de resgate com notificações automáticas.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Segurança Total</h3>
              <p className="text-gray-600 leading-relaxed">Controle de acesso por perfil, auditoria completa e backup automático na nuvem.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Crescimento Escalável</h3>
              <p className="text-gray-600 leading-relaxed">Sistema preparado para expansão, suportando milhares de usuários e operações simultâneas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            Quem Usa, <span className="text-emerald-400">Recomenda</span>
          </h2>
          
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl italic mb-8 leading-relaxed">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </p>
              <div>
                <p className="text-emerald-400 font-bold text-lg">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-emerald-400' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Veja o Sistema em <span className="text-emerald-600">Ação</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <p className="font-semibold">Dashboard Principal</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Visão Geral Completa</h3>
                <p className="text-gray-600 text-sm">Acompanhe todas as operações em tempo real</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <p className="font-semibold">Gestão de Solicitações</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Processo Otimizado</h3>
                <p className="text-gray-600 text-sm">Desde a solicitação até a conclusão</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <p className="font-semibold">Relatórios Inteligentes</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Insights Poderosos</h3>
                <p className="text-gray-600 text-sm">Dados que geram decisões estratégicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagens do Sistema */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Imagens do Sistema</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/prints/print1.png" alt="Print 1" className="rounded shadow hover:shadow-lg transition-shadow" />
          <img src="/prints/print2.png" alt="Print 2" className="rounded shadow hover:shadow-lg transition-shadow" />
          <img src="/prints/print3.png" alt="Print 3" className="rounded shadow hover:shadow-lg transition-shadow" />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto para <span className="text-yellow-300">Revolucionar</span> a Saúde?
          </h2>
          <p className="text-xl mb-12 text-emerald-100 max-w-2xl mx-auto">
            Junte-se aos municípios que já estão transformando o atendimento de saúde ribeirinha. 
            O futuro da medicina preventiva e de emergência está ao seu alcance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5596992078175"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Falar com Gesiel Nascimento
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a
              href="/login"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Testar o Sistema
            </a>
          </div>

          <div className="mt-12 text-emerald-200">
            <p className="mb-2">📱 WhatsApp direto • 🚀 Implementação rápida • 🛡️ Suporte completo</p>
            <p className="text-sm">Desenvolvido especialmente para as necessidades do Amapá</p>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <span className="text-2xl font-bold">S.O.S Chaves</span>
              </div>
              <p className="text-gray-400">
                Tecnologia que salva vidas nas comunidades ribeirinhas.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">Gesiel Nascimento</p>
              <p className="text-gray-400 mb-2">Desenvolvedor Full Stack</p>
              <p className="text-emerald-400">(96) 99207-8175</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Tecnologia</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'AWS', 'PWA'].map((tech) => (
                  <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 S.O.S Chaves. Desenvolvido com ❤️ para o Amapá.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}