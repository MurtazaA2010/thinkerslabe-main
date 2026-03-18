
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../constants';

const Blogs: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Insights & <span className="text-gradient">Innovations</span></h1>
        <p className="text-gray-600 dark:text-gray-400">Discover how AI is transforming the way consumers approach science and learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-semibold text-sm">Read Article &rarr;</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
                <span className="text-blue-500">{blog.category}</span>
                <span className="text-gray-600 dark:text-gray-600">&bull;</span>
                <span className="text-gray-500">{blog.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p>
              <div className="pt-4 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3">
                  {blog.author.charAt(0)}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{blog.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Newsletter */}
      <div className="mt-20 glass-card p-10 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:max-w-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Stay Curiously Ahead</h2>
          <p className="text-gray-600 dark:text-gray-400">Subscribe to our blogs to get the latest updates on AI and STEM .</p>
        </div>
        <div className="w-full md:w-96 flex flex-col space-y-3">
          <Link to="https://thinkerslabe.substack.com/" target="_blank">
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30">
              Subscribe Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
