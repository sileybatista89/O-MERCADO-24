
import React from 'react';
import { ECONOMY_PT } from '../constants';

const EconomyPortugal: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between border-b-2 border-m24-dark mb-8 pb-2">
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-tight">
          Economia & Portugal
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {ECONOMY_PT.map((news) => (
          <div key={news.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[200px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-m24-red uppercase tracking-widest mb-2">
                {news.category}
              </span>
              <h3 className="text-2xl font-oswald font-bold leading-tight group-hover:text-m24-red transition-colors duration-200">
                {news.title}
              </h3>
              <p className="mt-4 text-sm text-gray-500 font-light line-clamp-2">
                As principais métricas indicam que a economia portuguesa continua a demonstrar resiliência perante o contexto macroeconómico europeu.
              </p>
              <div className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {news.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EconomyPortugal;
