
import React from 'react';
import { FOREX_DATA, INDICES_DATA, COMMODITIES_DATA } from '../constants';
import { MarketAsset } from '../types';

const AssetRow: React.FC<{ asset: MarketAsset }> = ({ asset }) => (
  <div className="flex items-center justify-between p-3 border-b border-m24-border hover:bg-white transition-colors">
    <div>
      <div className="font-bold text-sm">{asset.symbol}</div>
      <div className="text-[10px] text-gray-500 uppercase">{asset.name}</div>
    </div>
    <div className="text-right">
      <div className="font-bold text-sm">{asset.price}</div>
      <div className={`text-xs font-bold ${asset.isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {asset.change}
      </div>
    </div>
  </div>
);

const MarketsDashboard: React.FC = () => {
  return (
    <section>
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h2 className="text-2xl font-oswald font-bold uppercase">Mercados Agora</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Forex */}
        <div className="bg-m24-gray p-4 rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-m24-red mb-4 border-b border-m24-border pb-2">
            Forex
          </h3>
          <div className="space-y-1">
            {FOREX_DATA.map(asset => <AssetRow key={asset.symbol} asset={asset} />)}
          </div>
        </div>

        {/* Indices */}
        <div className="bg-m24-gray p-4 rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-m24-red mb-4 border-b border-m24-border pb-2">
            Índices
          </h3>
          <div className="space-y-1">
            {INDICES_DATA.map(asset => <AssetRow key={asset.symbol} asset={asset} />)}
          </div>
        </div>

        {/* Commodities */}
        <div className="bg-m24-gray p-4 rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-m24-red mb-4 border-b border-m24-border pb-2">
            Commodities
          </h3>
          <div className="space-y-1">
            {COMMODITIES_DATA.map(asset => <AssetRow key={asset.symbol} asset={asset} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsDashboard;
