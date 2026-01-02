
import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { title: "Rede Mercado 24", items: ["Home", "Breaking News", "Live TV", "Podcasts", "App Mobile"] },
    { title: "Mercados", items: ["Forex", "Índices", "Ações", "Cripto", "Commodities"] },
    { title: "Institucional", items: ["Sobre Nós", "Publicidade", "Contactos", "Carreiras", "Legal"] }
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 border-t-4 border-m24-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="bg-m24-red inline-block text-white font-oswald text-4xl px-4 py-1 font-bold tracking-tighter mb-6">
              MERCADO 24
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8 italic">
              A sua fonte de confiança para notícias financeiras, análise de mercado e trading em Portugal. Cobertura global, foco local.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-m24-red transition-colors rounded-full text-xs uppercase font-bold">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map(group => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-white/10 pb-2">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-m24-red text-sm transition-colors uppercase text-[11px] font-bold tracking-widest">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/5 pt-8 mt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              © 2024 MERCADO 24 BROADCAST NETWORK. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="bg-m24-red/5 border border-m24-red/20 p-4 text-[10px] text-gray-400 italic">
              <strong>Disclaimer:</strong> O Mercado 24 é um portal informativo. O conteúdo apresentado, incluindo análises e opiniões, não constitui recomendação de investimento ou aconselhamento financeiro. O trading acarreta riscos elevados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
