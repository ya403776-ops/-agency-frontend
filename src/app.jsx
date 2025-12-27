import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle, Shield, 
  MessageSquare, Briefcase, Info, Mail, 
  ChevronRight, Lock, Eye, Trash2, LogOut, 
  TrendingUp, Zap, Layers, Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * COMPONENT: Navigation
 */
const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
          onClick={() => setPage('home')}
        >
          LUMINA<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${currentPage === link.id ? 'text-indigo-400' : 'text-slate-300'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setPage(link.id); setIsOpen(false); }}
                  className="text-lg font-medium text-slate-200 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { setPage('contact'); setIsOpen(false); }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Request Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/**
 * PAGE: Home
 */
const HomePage = ({ setPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20"
          >
            Digital Product Agency
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter"
          >
            We build products <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              clients actually love.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed"
          >
            High-performance engineering meets world-class design. We help scale-ups and enterprises ship critical software, faster.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => setPage('contact')}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Request a Free Consultation <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setPage('services')}
              className="bg-slate-800 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-all"
            >
              Our Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-16 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">Trusted by founders globally</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale">
            <div className="flex justify-center text-white text-2xl font-bold">TECHCORP</div>
            <div className="flex justify-center text-white text-2xl font-bold">VELOCITY</div>
            <div className="flex justify-center text-white text-2xl font-bold">QUANTUM</div>
            <div className="flex justify-center text-white text-2xl font-bold">FLUX_UI</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our 4-Step Process</h2>
          <p className="text-slate-400 max-w-xl">We don't just build; we strategize. From Day 1 to Launch, we are your engineering partners.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { step: '01', title: 'Discovery', desc: 'Understanding your business goals and user pain points.' },
            { step: '02', title: 'Strategy', desc: 'Mapping out the architecture and UI/UX blueprint.' },
            { step: '03', title: 'Execution', desc: 'Sprints focused on rapid, high-quality development.' },
            { step: '04', title: 'Scale', desc: 'Launch, monitoring, and iterative improvements.' }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="text-6xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-indigo-500/10 transition-colors">{item.step}</span>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/**
 * PAGE: Services
 */
const ServicesPage = () => {
  const services = [
    {
      icon: <Smartphone className="text-indigo-400" size={32} />,
      title: "Mobile Development",
      desc: "Native and cross-platform mobile apps that provide seamless experiences across iOS and Android.",
      features: ["React Native", "Swift/Kotlin", "Performance Optimization"]
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Web Applications",
      desc: "Scalable, high-speed web apps built with modern stacks like React, Next.js, and Node.js.",
      features: ["Fullstack JS", "Cloud Architecture", "API Design"]
    },
    {
      icon: <Layers className="text-purple-400" size={32} />,
      title: "Product Design",
      desc: "User-centric design that prioritizes conversion and accessibility without sacrificing aesthetic.",
      features: ["UX Audits", "UI Systems", "Prototyping"]
    },
    {
      icon: <TrendingUp className="text-green-400" size={32} />,
      title: "Growth Engineering",
      desc: "Technical SEO, landing page optimization, and analytics tracking to drive actual revenue.",
      features: ["Conversion Rate Opt.", "SEO Audit", "Data Pipelines"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expertise we bring.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">We specialize in turning complex problems into simple, high-performing digital solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="p-8 bg-slate-800/50 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all"
          >
            <div className="mb-6">{s.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.features.map((f, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 text-xs text-slate-300 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * PAGE: About
 */
const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">We are more than just an agency.</h1>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            Founded on the principle that quality software requires both technical rigor and empathetic design, Lumina Studio acts as your external CTO and Product team.
          </p>
          <div className="space-y-6 mb-8">
            {[
              { title: "Direct Project Management", desc: "No middle-men. You speak directly with engineers and designers." },
              { title: "Quality Assurance", desc: "Every line of code is reviewed; every pixel is measured." },
              { title: "Long-term Partnerships", desc: "We don't just ship and leave. We scale with you." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="text-indigo-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-slate-800 rounded-3xl border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-500 text-sm font-mono">[ Founder Image Placeholder ]</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-indigo-600 rounded-2xl shadow-2xl">
            <p className="text-4xl font-black text-white">100%</p>
            <p className="text-xs text-indigo-100 uppercase font-bold tracking-widest">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE: Contact / Intake Form
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', project: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      console.log("Submitting lead to API...", formData);
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-green-500" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Message Received!</h2>
        <p className="text-slate-400 text-lg mb-8">We've sent a confirmation to your email. One of our project managers will reach out within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-indigo-400 font-bold flex items-center gap-2 mx-auto"
        >
          Send another message <ArrowRight size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's build something great.</h1>
          <p className="text-slate-400 text-lg mb-10">Ready to scale? Fill out the form and let's discuss your roadmap.</p>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-white/5">
                <Mail className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Email us</p>
                <p className="text-white font-medium">hello@luminastudio.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-white/5">
                <Briefcase className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Current Status</p>
                <p className="text-white font-medium">Accepting New Projects (Q1 2025)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 p-8 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-bold">Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-bold">Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-bold">Project Budget</label>
              <select 
                required
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
              >
                <option value="">Select a range</option>
                <option value="5-10k">$5k — $10k</option>
                <option value="10-25k">$10k — $25k</option>
                <option value="25-50k">$25k — $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-bold">Project Description</label>
              <textarea 
                required
                rows={4}
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button 
              disabled={status === 'loading'}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-indigo-600/20"
            >
              {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE: Admin Dashboard
 */
const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@webflow.com', budget: '25-50k', status: 'New', date: '2024-05-12' },
    { id: 2, name: 'Bob Smith', email: 'bob@startup.io', budget: '10-25k', status: 'Contacted', date: '2024-05-10' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@bigcorp.com', budget: '50k+', status: 'Closed', date: '2024-05-08' },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 w-full max-w-md shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <Lock className="text-indigo-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-2">Admin Login</h2>
          <p className="text-slate-500 text-center mb-8 text-sm">Restricted access for agency staff only.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
              placeholder="Admin Password"
            />
            <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Lead Dashboard</h1>
          <p className="text-slate-500">Manage incoming inquiries and track conversion.</p>
        </div>
        <button onClick={() => setIsLoggedIn(false)} className="bg-slate-800 text-slate-400 p-3 rounded-xl border border-white/5 hover:text-white flex items-center gap-2 transition-all">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="bg-slate-800/50 rounded-3xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Client</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Budget</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-6">
                  <p className="text-white font-bold">{lead.name}</p>
                  <p className="text-slate-500 text-sm">{lead.email}</p>
                </td>
                <td className="px-6 py-6 text-slate-300 font-medium">{lead.budget}</td>
                <td className="px-6 py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    lead.status === 'New' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                    lead.status === 'Contacted' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:text-indigo-400 border border-white/5"><Eye size={16} /></button>
                    <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:text-red-400 border border-white/5"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * PAGE: Legal
 */
const LegalPage = ({ type }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">{type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h1>
      <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
        <p>Last Updated: May 20, 2024</p>
        <p>Lumina Studio ("we," "us," or "our") operates the website and provides software agency services. This document outlines our practices regarding your data and the usage of our site.</p>
        <h3 className="text-white text-xl font-bold mt-8">1. Information Collection</h3>
        <p>We collect information you provide directly through our contact form, including your name, email address, and project details. This data is used solely for the purpose of communicating about potential projects.</p>
        <h3 className="text-white text-xl font-bold mt-8">2. Use of Information</h3>
        <p>Your information is never sold to third parties. We use standard industry practices to secure the data collected through our API and database.</p>
        {/* Mock legal text continues... */}
      </div>
    </div>
  );
};

/**
 * COMPONENT: Footer
 */
const Footer = ({ setPage }) => (
  <footer className="bg-slate-900 border-t border-white/5 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-2 md:col-span-1">
        <div className="text-2xl font-bold text-white mb-6">LUMINA<span className="text-indigo-500">.</span></div>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">A premium digital product agency dedicated to building high-performance software for growth-focused companies.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-slate-500 text-sm">
          <li><button onClick={() => setPage('about')} className="hover:text-white transition-colors">About Us</button></li>
          <li><button onClick={() => setPage('services')} className="hover:text-white transition-colors">Our Services</button></li>
          <li><button onClick={() => setPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Legal</h4>
        <ul className="space-y-4 text-slate-500 text-sm">
          <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
          <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Connect</h4>
        <ul className="space-y-4 text-slate-500 text-sm">
          <li className="hover:text-white cursor-pointer">Twitter</li>
          <li className="hover:text-white cursor-pointer">LinkedIn</li>
          <li className="hover:text-white cursor-pointer">Dribbble</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 text-center md:text-left">
      <p className="text-slate-600 text-xs font-medium">© 2024 Lumina Studio Agency. All rights reserved. <span className="hidden md:inline ml-4 cursor-pointer hover:text-white" onClick={() => setPage('admin')}>Staff Login</span></p>
    </div>
  </footer>
);

/**
 * MAIN APP
 */
export default function App() {
  const [page, setPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'admin': return <AdminPage />;
      case 'privacy': return <LegalPage type="privacy" />;
      case 'terms': return <LegalPage type="terms" />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-400">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {page !== 'admin' && <Footer setPage={setPage} />}
    </div>
  );
}
