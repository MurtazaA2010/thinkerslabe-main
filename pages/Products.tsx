import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Our <span className="text-gradient">Products</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Carefully crafted AI tools designed to enhance learning, reasoning, and problem-solving.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-12">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="glass-card rounded-[32px] overflow-hidden flex flex-col md:flex-row hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Image */}
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full">
                {product.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-10 md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Core Features
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                  <Link to={product.link} target="_blank">Learn More</Link>
                </button>
                <button className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                  <Link to = {product.link}>Try It Free</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
