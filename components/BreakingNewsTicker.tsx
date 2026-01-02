
import React from 'react';
import { BREAKING_NEWS_TEXT } from '../constants';

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-m24-red text-white h-10 flex items-center overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 bg-m24-red z-10 px-4 flex items-center font-oswald font-bold text-sm shadow-[10px_0_15px_rgba(177,18,38,0.5)]">
        ÚLTIMA HORA
      </div>
      <div className="flex whitespace-nowrap animate-ticker pl-[150px]">
        <span className="text-sm font-medium tracking-wide">
          {BREAKING_NEWS_TEXT} — {BREAKING_NEWS_TEXT} — {BREAKING_NEWS_TEXT}
        </span>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
