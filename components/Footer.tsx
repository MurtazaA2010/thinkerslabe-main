
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">T</span>
            </div>
            <span className="text-xl font-bold text-white">ThinkersLabe</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pioneering AI solutions for the curious mind. We make advanced science and education tools accessible to everyone, everywhere.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/products" className="hover:text-blue-400 transition-colors">AI Science Tools</Link></li>
            <li><Link to="/products" className="hover:text-blue-400 transition-colors">Educational Platforms</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400 transition-colors">Our Research</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400 transition-colors">Learning Hub</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-services" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with our latest AI breakthroughs.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ThinkersLabe AI. Empowering the future of learning.</p>
      </div>
    </footer>
  );
};

export default Footer;
