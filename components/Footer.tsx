import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/5 pt-16 pb-8 px-6 mt-20 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo + Description */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            
            <img
              src="/logo-main.png"
              alt="ThinkersLabe"
              className="w-40 md:w-48 dark:filter-none invert dark:invert-0"
            />

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Pioneering AI solutions for the curious mind. We make advanced science and education tools accessible to everyone, everywhere.
            </p>

          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-6">
            Products
          </h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Phi AI
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-6">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} ThinkersLabe AI. Empowering the future of learning.
        </p>
      </div>

    </footer>
  );
};

export default Footer;