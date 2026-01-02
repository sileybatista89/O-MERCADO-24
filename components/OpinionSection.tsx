
import React from 'react';
import { OPINIONS } from '../constants';

const OpinionSection: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between border-b-2 border-m24-dark mb-8 pb-2">
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-tight">
          Opinião & Editorial
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {OPINIONS.map((opinion, idx) => (
          <div key={idx} className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={opinion.authorImage} 
                alt={opinion.author} 
                className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-300 object-cover"
              />
              <div className="font-bold text-xs uppercase tracking-widest text-m24-red">
                {opinion.author}
              </div>
            </div>
            <h3 className="text-xl font-bold italic leading-tight hover:text-m24-red cursor-pointer transition-colors duration-200">
              "{opinion.title}"
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Uma análise aprofundada sobre as dinâmicas recentes do mercado e como elas impactam o investidor retalhista em Portugal.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpinionSection;
