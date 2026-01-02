
import React from 'react';
import { LATEST_NEWS } from '../constants';

const LatestNews: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between border-b-2 border-m24-dark mb-8 pb-2">
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-tight">
          Últimas Notícias
        </h2>
        <a href="#" className="text-xs font-bold text-m24-red hover:underline uppercase tracking-widest">
          Ver Tudo
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LATEST_NEWS.map((news) => (
          <article key={news.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-m24-red text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                {news.category}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-m24-red transition-colors duration-200 line-clamp-2">
              {news.title}
            </h3>
            <div className="mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {news.timestamp}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
