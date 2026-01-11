
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Products</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our suite of AI-powered tools designed to help general consumers master science and achieve educational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Core Features</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 text-white font-bold rounded-xl transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 glass-card rounded-[40px] text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <h2 className="text-3xl font-bold mb-4">Want a Custom Learning Path?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our AI engine can create a tailored product bundle just for your educational needs.</p>
        <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-colors">
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default Products;
