
import React from 'react';
import { HERO_NEWS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-sm group">
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-black min-h-[500px]">
        {/* Content Side */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-6 z-10 bg-gradient-to-r from-black via-black to-transparent">
          <div className="flex items-center space-x-2">
            <span className="inline-block bg-m24-red text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
              DIRETO
            </span>
            <span className="text-m24-gray/60 text-[10px] font-bold tracking-widest uppercase">
              {HERO_NEWS.category}
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-oswald font-bold leading-tight group-hover:text-m24-red transition-colors duration-300">
            {HERO_NEWS.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            {HERO_NEWS.subtitle}
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-m24-red text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-m24-red transition-all duration-300">
              LER MAIS
            </button>
            <span className="text-gray-500 text-xs font-bold tracking-widest">
              {HERO_NEWS.timestamp}
            </span>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-7 relative h-[300px] lg:h-auto overflow-hidden">
          <img 
            src={HERO_NEWS.imageUrl} 
            alt={HERO_NEWS.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
