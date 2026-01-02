
export interface NewsItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  imageUrl: string;
  timestamp: string;
}

export interface MarketAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export interface PropFirmItem {
  name: string;
  logo: string;
  rating: number;
  news: string;
  updateDate: string;
}

export interface OpinionPiece {
  author: string;
  authorImage: string;
  title: string;
}
