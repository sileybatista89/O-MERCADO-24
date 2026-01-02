
import React from 'react';
import { PROP_FIRMS } from '../constants';

const PropFirms: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-between border-b-2 border-m24-dark mb-8 pb-2">
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-tight">
          Prop Firms Insider
        </h2>
        <a href="#" className="text-xs font-bold text-m24-red hover:underline uppercase tracking-widest">
          Rankings Completos
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROP_FIRMS.map((firm) => (
          <div key={firm.name} className="border border-m24-border p-6 rounded-sm hover:shadow-lg transition-shadow bg-m24-gray/30">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-m24-dark text-white flex items-center justify-center font-bold text-xl rounded">
                {firm.logo}
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-yellow-500">
                  {"★".repeat(Math.floor(firm.rating))}
                  <span className="text-gray-300">{"★".repeat(5 - Math.floor(firm.rating))}</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  RATING: {firm.rating}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 uppercase">{firm.name}</h3>
            <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden italic">
              "{firm.news}"
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-m24-border">
              <span className="text-[10px] font-bold text-m24-red uppercase">{firm.updateDate}</span>
              <button className="text-[10px] font-bold uppercase hover:text-m24-red">Ver Review</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropFirms;
