
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Products from './Products';
const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);



  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 min-h-screen min-w-screen mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-400/10 rounded-full border border-blue-200 dark:border-blue-400/20">
            Redefining Consumer Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">
            Building intelligent tools for  <br /> <span className="text-gradient">curious</span> <span className="text-gradient">minds</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            ThinkersLabe create AI-powered products that help educators, students, creators, and thinkers learn faster, think deeper, and solve smarter.          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/25">
              Explore Products
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-bold rounded-xl transition-all">
              Our Story
            </Link>
          </div>
        </div>

        {/* products*/}
      </section>
      {/* Products Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Products</h2>
            <p className="text-gray-600 dark:text-gray-400">AI products for creative minds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="p-8 glass-card rounded-3xl"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                  <img src={product.image} alt={product.name} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {product.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
                <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-500 mt-4 mb-4"></div>
                <Link to={`/products/${product.id}`} className="text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-white/80 hover:opacity-80 font-medium">
                  Try It Free
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why ThinkersLabe?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Thoughtfully engineered AI products that put people first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Built for Speed</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Optimized systems deliver fast, seamless AI experiences without breaking your flow.
              </p>
            </div>

            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Precision-Driven AI</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Each model is purpose-trained to understand context, reduce errors, and deliver reliable results.
              </p>
            </div>

            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Privacy by Design</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We respect your data. Our systems are designed to protect privacy and minimize unnecessary data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
