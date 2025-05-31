import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Atom as Tiktok, Mail, Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Flame size={24} className="text-orange-500" />
              <span className="font-bold text-xl">SearKit</span>
            </div>
            <p className="text-gray-300 mb-6">
              Grill Anywhere. No Kitchen Needed.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Tiktok size={20} />
              </a>
              <a href="mailto:info@searkit.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">All Kits</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Steak Version</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Korean BBQ Kit</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Chicken Skewer Box</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-orange-500 transition-colors">How It Works</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-orange-500 transition-colors">Partner With Us</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Early Access</h3>
            <p className="text-gray-300 mb-4">Subscribe to get early access to new drops & limited runs.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 flex-grow"
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SearKit. All rights reserved.</p>
          <p className="mt-2 text-sm">SearKit is a trademark of SearKit GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;