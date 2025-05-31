import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flame } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import ProductsPage from './pages/ProductsPage';
import CustomizationTool from './pages/CustomizationTool';
import PartnershipsPage from './pages/PartnershipsPage';

const Banner = () => (
  <div className="fixed top-0 left-0 right-0 z-40 bg-[hsl(var(--coffee))] text-[hsl(var(--cream))] h-12 flex items-center whitespace-nowrap overflow-hidden">
    <div className="flex animate-marquee">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-sm flex items-center shrink-0">
          <Flame size={16} className="mr-2" />
          Now shipping to Berlin, Hamburg, and Munich
          <span className="mx-2">•</span>
          Free delivery on orders over €50
          <span className="mx-2">•</span>
          New: Korean BBQ Kit available
          <span className="mx-2">•</span>
        </span>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Banner />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/customize" element={<CustomizationTool />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;