
import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const isDisabled =
    loading ||
    !name.trim() ||
    !email.trim() ||
    !message.trim();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');


    const SERVICE_ID = 'thinkerslabe_emails';
    const TEMPLATE_ID = 'thinkerslabe9539259395';
    const PUBLIC_KEY = 'eZfyDVkXR1CYMc6qo';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
          setLoading(false);
          // Reset form after a delay or immediately
          if (form.current) form.current.reset();
        }, (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again later.');
          setLoading(false);
        });
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Let's <span className="text-gradient">Connect</span></h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
            Have questions about our AI products? Or maybe you have an idea for a science tool we should build? Our team of humans and AI are here to listen.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mr-6 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400">hello@thinkerslabe.ai</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mr-6 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Our HQ</h4>
                <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Message Sent!</h2>
              <p className="text-gray-600 dark:text-gray-400">We'll get back to your curious mind shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-lg transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2" >Full Name</label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <select
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 appearance-none"
                >
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" value="General Inquiry">General Inquiry</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" value="Product Support">Product Support</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" value="Partnership Idea">Partnership Idea</option>
                  <option className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" value="Careers">Careers</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="How can we help you learn today?"
                ></textarea>
              </div>
              <button
                disabled={isDisabled}
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center"
              >
                {loading ? "Sending...   " : "Send Message"}
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
