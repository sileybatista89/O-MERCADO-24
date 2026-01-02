
import React from 'react';
import { NewsItem, MarketAsset, PropFirmItem, OpinionPiece } from './types';

export const BREAKING_NEWS_TEXT = "Última Hora | Mercados em movimento: PSI abre em alta de 0.8% | Atualizações em tempo real do BCE | Reservas Federais dos EUA mantêm taxas de juro inalteradas.";

export const HERO_NEWS: NewsItem = {
  id: 'hero-1',
  title: "BCE: Lagarde sugere manutenção de taxas perante inflação resiliente",
  subtitle: "A presidente do Banco Central Europeu alertou que a luta contra a subida de preços ainda não terminou, enviando ondas de choque para o setor bancário português.",
  category: "ECONOMIA",
  imageUrl: "https://picsum.photos/id/180/1200/600",
  timestamp: "HÁ 15 MINUTOS"
};

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'ln-1',
    title: "PSI segue tendência europeia e fecha no verde",
    category: "MERCADOS",
    imageUrl: "https://picsum.photos/id/1/400/250",
    timestamp: "HÁ 1 HORA"
  },
  {
    id: 'ln-2',
    title: "EUR/USD testa suporte crítico nos 1.0850",
    category: "FOREX",
    imageUrl: "https://picsum.photos/id/10/400/250",
    timestamp: "HÁ 2 HORAS"
  },
  {
    id: 'ln-3',
    title: "Nova Prop Firm entra no mercado português com capital 500k",
    category: "PROP FIRMS",
    imageUrl: "https://picsum.photos/id/20/400/250",
    timestamp: "HÁ 3 HORAS"
  },
  {
    id: 'ln-4',
    title: "Preço do petróleo Brent atinge máximos de 6 meses",
    category: "COMMODITIES",
    imageUrl: "https://picsum.photos/id/30/400/250",
    timestamp: "HÁ 4 HORAS"
  }
];

export const FOREX_DATA: MarketAsset[] = [
  { symbol: "EUR/USD", name: "Euro / Dólar", price: "1.0845", change: "+0.12%", isPositive: true },
  { symbol: "GBP/USD", name: "Libra / Dólar", price: "1.2678", change: "-0.05%", isPositive: false },
  { symbol: "USD/JPY", name: "Dólar / Iene", price: "148.22", change: "+0.33%", isPositive: true },
];

export const INDICES_DATA: MarketAsset[] = [
  { symbol: "PSI", name: "Lisboa", price: "6,245.20", change: "+0.85%", isPositive: true },
  { symbol: "DAX 40", name: "Alemanha", price: "17,120.45", change: "+1.12%", isPositive: true },
  { symbol: "S&P 500", name: "EUA", price: "5,022.10", change: "-0.15%", isPositive: false },
];

export const COMMODITIES_DATA: MarketAsset[] = [
  { symbol: "GOLD", name: "Ouro (oz)", price: "$2,024.50", change: "+0.45%", isPositive: true },
  { symbol: "BRENT", name: "Petróleo", price: "$83.22", change: "+1.20%", isPositive: true },
  { symbol: "NAT GAS", name: "Gás Natural", price: "$1.84", change: "-2.34%", isPositive: false },
];

export const PROP_FIRMS: PropFirmItem[] = [
  { name: "FTMO", logo: "FT", rating: 4.9, news: "Lança novo desafio de 500k sem limite de tempo.", updateDate: "HOJE" },
  { name: "The5ers", logo: "5ers", rating: 4.8, news: "Aumento de alavancagem para ativos de Forex.", updateDate: "HÁ 2 DIAS" },
  { name: "Apex Trader", logo: "AT", rating: 4.7, news: "Promoção de 90% em contas de futuros termina amanhã.", updateDate: "HOJE" }
];

export const ECONOMY_PT: NewsItem[] = [
  { id: 'ep-1', title: "Inflação em Portugal abranda para 2.3% em Janeiro", category: "PORTUGAL", imageUrl: "https://picsum.photos/id/50/400/250", timestamp: "HOJE" },
  { id: 'ep-2', title: "Governo anuncia novas medidas de apoio ao crédito habitação", category: "ECONOMIA", imageUrl: "https://picsum.photos/id/60/400/250", timestamp: "HÁ 5 HORAS" }
];

export const OPINIONS: OpinionPiece[] = [
  { author: "Ricardo Santos", authorImage: "https://picsum.photos/id/101/100/100", title: "O renascimento do PSI: Por que 2024 é o ano da bolsa portuguesa" },
  { author: "Ana Martins", authorImage: "https://picsum.photos/id/102/100/100", title: "Trading Algorítmico: A revolução silenciosa no mercado de Forex" },
  { author: "João Pereira", authorImage: "https://picsum.photos/id/103/100/100", title: "Prop Firms vs Brokerages: Qual o melhor caminho para o trader moderno?" }
];
