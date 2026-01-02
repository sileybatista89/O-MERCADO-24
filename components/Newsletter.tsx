
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-m24-dark text-white p-12 rounded-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-m24-red/10 rounded-full -mr-32 -mt-32"></div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-oswald font-bold uppercase mb-4 tracking-tight">
          MERCADO 24 | DAILY BRIEFING
        </h2>
        <p className="text-gray-400 text-lg mb-8 font-light italic">
          Receba as principais notícias do mercado e análises exclusivas diretamente no seu email todas as manhãs antes da abertura do PSI.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Endereço de email" 
            className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-m24-red transition-colors text-sm"
            required
          />
          <button 
            type="submit" 
            className="bg-m24-red hover:bg-white hover:text-m24-red text-white px-10 py-4 font-bold uppercase text-xs tracking-[0.2em] transition-all duration-300"
          >
            Subscrever
          </button>
        </form>
        <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest">
          Respeitamos a sua privacidade. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
