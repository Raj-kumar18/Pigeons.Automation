import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import AnimatedText from '../components/AnimatedText';

const projects = [
  { id: 1, title: 'Dog Studio Clone', desc: 'Premium 3D web experience clone using Three.js to explore advanced rendering.', category: 'Websites', tags: ['Three.js', 'WebGL'], image: './dog.png', span: 'col-span-1 md:col-span-2 row-span-1', live: 'https://dogstudiio.netlify.app/' },
  { id: 2, title: 'Your Finance Son', desc: 'Premium Finance web experience in React Js.', category: 'Websites', tags: ['React', 'Finance'], image: './yourFinanceSon.png', span: 'col-span-1 md:col-span-1 row-span-1', live: 'https://your-finance-son.vercel.app/' },
  { id: 3, title: 'AI Code Reviewer', desc: 'An AI-driven code review tool that analyzes your JavaScript code and provides detailed feedback.', category: 'AI Agents', tags: ['AI', 'React'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1', live: 'https://ai-code-reviewer-rose.vercel.app' },
  { id: 4, title: 'Ledger Bank System', desc: 'Advanced Backend Project Bank Transaction System handling secure workflows.', category: 'Automations', tags: ['Backend', 'JS'], image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1', live: 'https://github.com/Raj-kumar18/Ledger-Bank-Transaction-System-' },
  { id: 5, title: 'CodeVerse', desc: 'A modern Book Ecommerce Platform built using the MERN Stack, designed for book lovers.', category: 'Websites', tags: ['MERN', 'Full Stack'], image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2', live: 'https://github.com/Raj-kumar18/CodeVerse' },
  { id: 6, title: 'AI Assistant', desc: 'Assistant chat app in MERN stack using Google Gemini API.', category: 'AI Agents', tags: ['Gemini', 'MERN'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2', live: 'https://github.com/Raj-kumar18/AI-Assistant-Chat-App' },
  { id: 7, title: 'Memory Game', desc: 'Test your memory and sharpen your cognitive skills with our interactive Game!', category: 'Websites', tags: ['JS', 'Game'], image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1', live: 'https://memory-game-rho-six.vercel.app' },
];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Websites', 'AI Agents', 'Automations'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full relative overflow-x-hidden pt-32 pb-20 min-h-screen bg-[#05050f]">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 pt-10">
          <AnimatedText text="Our Work" el="h1" className="font-display text-5xl md:text-7xl font-bold text-white mb-6" />
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Explore our portfolio of high-end web experiences and intelligent automated systems.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-6 py-2 rounded-full font-heading font-bold text-sm transition-all"
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary-gradient z-0 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${filter === cat ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                {cat}
              </span>
              {filter !== cat && <div className="absolute inset-0 bg-white/5 rounded-full z-0 pointer-events-none"></div>}
            </button>
          ))}
        </div>

        {/* BENTO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`${project.span} h-full`}
              >
                <GlassCard className="group relative overflow-hidden h-full w-full rounded-2xl" glowColor="purple">
                  {/* Image with improved visibility */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                  />

                  {/* Gradient: Darker at bottom for text readability, disappears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                  {/* Hover Purple Overlay */}
                  <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                    <div className="flex gap-2 mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {project.title}
                    </h3>

                    <p className="font-body text-gray-200 text-sm line-clamp-2 max-w-md opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transform translate-y-4 group-hover:-translate-y-2 transition-all duration-500">
                      {project.desc}
                    </p>

                    <div className="flex mt-4 overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transform translate-y-8 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                      <button
                        onClick={() => window.open(project.live, '_blank')}
                        className="w-full py-3 bg-white text-black font-heading font-bold text-xs rounded-lg hover:bg-purple-500 hover:text-white transition-all shadow-xl"
                      >
                        VIEW LIVE PROJECT
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}