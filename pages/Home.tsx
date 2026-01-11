
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { askEducationalAI } from '../services/geminiService';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    const res = await askEducationalAI(query);
    setResponse(res);
    setLoading(false);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Redefining Consumer Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
            AI Built for <span className="text-gradient">Science</span> <br /> & <span className="text-gradient">Education</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            ThinkersLabe brings high-end laboratory intelligence and deep academic insights directly to your home. Simple, powerful, and made for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/25">
              Explore Products
            </Link>
            <Link to="/blogs" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-xl transition-all">
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured AI Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ask Our Science Engine</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Experience the power of our educational intelligence. Ask anything about science or learning, and let ThinkersLabe AI guide you.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                  placeholder="Ask something like: 'How do black holes work?'" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  onClick={handleAskAI}
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Thinking...' : 'Ask AI'}
                </button>
              </div>
              
              {response && (
                <div className="p-6 glass-card rounded-2xl border-l-4 border-blue-500 animate-fadeIn">
                  <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{response}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://picsum.photos/seed/ai-tech/800/600" 
              alt="AI Visualization" 
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ThinkersLabe?</h2>
            <p className="text-gray-400">Innovation with a human touch, designed for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Hyper Fast</h3>
              <p className="text-gray-400 leading-relaxed">Experience zero-latency AI responses across all our consumer applications.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Always Accurate</h3>
              <p className="text-gray-400 leading-relaxed">Our models are trained on verified scientific papers and trusted educational curricula.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy First</h3>
              <p className="text-gray-400 leading-relaxed">Your data is your property. We use edge processing to keep your learning habits private.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
