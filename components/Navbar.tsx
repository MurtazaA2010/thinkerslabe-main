
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 my-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="font-bold text-white text-xl">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Thinkers<span className="text-blue-400">Labe</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Trigger (Simplified) */}
        <div className="md:hidden">
            <button className="text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
