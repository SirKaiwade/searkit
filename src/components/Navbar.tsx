import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 py-4 mt-12 bg-[hsl(var(--cream))]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-[hsl(var(--coffee))]">
              <Flame size={36} strokeWidth={1.5} />
            </div>
            <span className="text-5xl font-display font-medium tracking-normal">SearKit</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/how-it-works" label="How It Works" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/customize" label="For Restaurants" />
            <a
              href="https://calendly.com/mintysolutions/searkit-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#b84900] hover:bg-[#a33e00] text-white rounded-full font-medium transition-all duration-300"
            >
              Book a Meeting
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[hsl(var(--cream))] border-t border-[hsl(var(--coffee))/10]">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink to="/" label="Home" mobile />
            <NavLink to="/how-it-works" label="How It Works" mobile />
            <NavLink to="/products" label="Products" mobile />
            <NavLink to="/customize" label="For Restaurants" mobile />
            <a
              href="https://calendly.com/mintysolutions/searkit-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 mt-4 bg-[#b84900] hover:bg-[#a33e00] text-white rounded-full text-sm font-medium transition-colors text-center flex items-center justify-center"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label, mobile = false }: { to: string; label: string; mobile?: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`nav-link text-lg relative ${
        isActive 
          ? 'text-[#b84900] font-semibold before:absolute before:inset-0 before:bg-[#b84900]/10 before:rounded-lg' 
          : 'text-[hsl(var(--coffee))] font-bold'
      } ${
        mobile ? 'text-xl py-2' : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;