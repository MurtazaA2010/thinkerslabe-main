import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS } from '../constants';

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = BLOGS.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Blog Post Not Found</h1>
                <p className="text-gray-400 mb-8">The article you are looking for does not exist.</p>
                <Link to="/blogs" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen">
            {/* Background Elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="flex items-center justify-center space-x-3 text-sm font-bold uppercase tracking-widest mb-6">
                        <span className="text-blue-400">{blog.category}</span>
                        <span className="text-gray-600">&bull;</span>
                        <span className="text-gray-400">{blog.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3">
                            {blog.author.charAt(0)}
                        </div>
                        <span className="text-lg text-gray-300 font-medium">{blog.author}</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-blue-900/20">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div
                    className="glass-card rounded-3xl p-8 md:p-12 text-gray-300 text-lg leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: blog.content }} // Using dangerouslySetInnerHTML for the HTML content in constants
                />

                {/* Navigation */}
                <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                    <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to Articles
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogDetails;
