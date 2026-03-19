import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/5 pt-16 pb-8 px-6 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <img
              src="/logo-main.png"
              alt="ThinkersLabe"
              className="w-40 md:w-48 dark:filter-none invert dark:invert-0"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Pioneering AI solutions for the curious mind. We make advanced science and education tools accessible to everyone, everywhere.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-6">Products</h4>
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
          <h4 className="text-gray-900 dark:text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold mb-6">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="https://x.com/ThinkersLabe" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.15 9.15 0 01-2.88 1.1 4.52 4.52 0 00-7.73 4.13A12.86 12.86 0 013 2.27a4.52 4.52 0 001.4 6.05 4.48 4.48 0 01-2-.55v.05a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2 .08 4.52 4.52 0 004.22 3.14A9.07 9.07 0 013 19.54a12.86 12.86 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.18 8.18 0 0023 3z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/thinkerslabe" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm13.5 10.29h-3v-4.5c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.44v4.57h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/thinkerslabe-2026/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.3.46-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.45 11.45 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.63.24 2.83.12 3.13.77.84 1.23 1.9 1.23 3.2 0 4.6-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/thinkerslabe" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.403a4.92 4.92 0 011.78 1.03 4.92 4.92 0 011.03 1.78c.164.462.347 1.25.403 2.42.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.403 2.42a4.92 4.92 0 01-1.03 1.78 4.92 4.92 0 01-1.78 1.03c-.462.164-1.25.347-2.42.403-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.403a4.92 4.92 0 01-1.78-1.03 4.92 4.92 0 01-1.03-1.78c-.164-.462-.347-1.25-.403-2.42-.058-1.27-.07-1.65-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.96.403-2.42a4.92 4.92 0 011.03-1.78 4.92 4.92 0 011.78-1.03c.462-.164 1.25-.347 2.42-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.737 0 8.332.013 7.052.072 5.775.13 4.842.308 4.042.587a7.092 7.092 0 00-2.56 1.66A7.092 7.092 0 00.587 4.042c-.28.8-.457 1.733-.515 3.01C.013 8.332 0 8.737 0 12s.013 3.668.072 4.948c.058 1.277.235 2.21.515 3.01a7.092 7.092 0 001.66 2.56 7.092 7.092 0 002.56 1.66c.8.28 1.733.457 3.01.515C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.21-.235 3.01-.515a7.092 7.092 0 002.56-1.66 7.092 7.092 0 001.66-2.56c.28-.8.457-1.733.515-3.01.058-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.235-2.21-.515-3.01a7.092 7.092 0 00-1.66-2.56 7.092 7.092 0 00-2.56-1.66c-.8-.28-1.733-.457-3.01-.515C15.668.013 15.263 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 106.162 6.162A6.163 6.163 0 0012 5.838zm0 10.162a3.998 3.998 0 113.998-3.998A3.998 3.998 0 0112 16zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ThinkersLabe AI. Empowering the future of learning.</p>
      </div>
    </footer>
  );
};

export default Footer;