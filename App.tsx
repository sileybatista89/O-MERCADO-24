
import React from 'react';
import Navbar from './components/Navbar';
import BreakingNewsTicker from './components/BreakingNewsTicker';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import MarketsDashboard from './components/MarketsDashboard';
import PropFirms from './components/PropFirms';
import EconomyPortugal from './components/EconomyPortugal';
import OpinionSection from './components/OpinionSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1) Breaking News Bar */}
      <BreakingNewsTicker />
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-6 md:py-8 space-y-12">
        {/* 2) Section Principal (Hero) */}
        <Hero />

        {/* 3) Section Últimas Notícias */}
        <LatestNews />

        {/* 4) Section Mercados Agora */}
        <MarketsDashboard />

        {/* 5) Section Prop Firms */}
        <PropFirms />

        {/* 6) Section Economia & Portugal */}
        <EconomyPortugal />

        {/* 7) Section Opinião */}
        <OpinionSection />

        {/* 8) Section Newsletter */}
        <Newsletter />
      </main>

      {/* 9) Rodapé Institucional */}
      <Footer />
    </div>
  );
};

export default App;
