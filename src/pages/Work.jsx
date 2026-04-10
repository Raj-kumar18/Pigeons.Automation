import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import AnimatedText from '../components/AnimatedText';
import CTAButton from '../components/CTAButton';

const projects = [
  { id: 1, title: 'CodeVerse', desc: 'A modern Book Ecommerce Platform built using the MERN Stack, designed for book lovers to explore, search, and manage their reads.', category: 'Websites', tags: ['MERN', 'Full Stack'], image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2', live: 'https://github.com/Raj-kumar18/CodeVerse', code: 'https://github.com/Raj-kumar18/CodeVerse' },
  { id: 2, title: 'AI Code Reviewer', desc: 'An AI-driven code review tool that analyzes your JavaScript code, highlights potential issues, and provides detailed feedback.', category: 'AI Agents', tags: ['AI', 'React'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1', live: 'https://ai-code-reviewer-rose.vercel.app', code: 'https://github.com/Raj-kumar18/AI-Code-Reviewer' },
  { id: 3, title: 'Ledger Bank System', desc: 'Advanced Backend Project Bank Transaction System handling secure workflows.', category: 'Automations', tags: ['Backend', 'JS'], image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1', live: 'https://github.com/Raj-kumar18/Ledger-Bank-Transaction-System-', code: 'https://github.com/Raj-kumar18/Ledger-Bank-Transaction-System-' },
  { id: 4, title: 'Dog Studio Clone', desc: 'Premium 3D web experience clone using Three.js to explore advanced rendering.', category: 'Websites', tags: ['Three.js', 'WebGL'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1', live: 'https://github.com/Raj-kumar18/Dog-Studio-Clone', code: 'https://github.com/Raj-kumar18/Dog-Studio-Clone' },
  { id: 5, title: 'AI Assistant', desc: 'Assistant chat app in MERN stack using Google Gemini API.', category: 'AI Agents', tags: ['Gemini', 'MERN'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2', live: 'https://github.com/Raj-kumar18/AI-Assistant-Chat-App', code: 'https://github.com/Raj-kumar18/AI-Assistant-Chat-App' },
  { id: 6, title: 'Memory Game', desc: 'Test your memory and sharpen your cognitive skills with our interactive Game!', category: 'Websites', tags: ['JS', 'Game'], image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1', live: 'https://memory-game-rho-six.vercel.app', code: 'https://github.com/Raj-kumar18/Memory-Game' },
];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Websites', 'AI Agents', 'Automations'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full relative overflow-x-hidden pt-32 pb-20 min-h-screen">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-600/15 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center mb-16 pt-10">
          <AnimatedText text="Our Work" el="h1" className="font-display text-5xl md:text-[80px] font-bold text-white mb-6" />
          <p className="text-textMuted font-body text-lg max-w-2xl mx-auto mt-4">
            Explore our portfolio of high-end web experiences and intelligent automated systems.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-6 py-2 rounded-full font-heading font-bold text-sm transition-all overflow-hidden"
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary-gradient z-0 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${filter === cat ? 'text-white' : 'text-textMuted hover:text-white'}`}>
                {cat}
              </span>
              {filter !== cat && <div className="absolute inset-0 bg-white/5 rounded-full z-0 pointer-events-none"></div>}
            </button>
          ))}
        </div>

        {/* BENTO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`${project.span} h-full max-h-full`}
              >
                <GlassCard className="group relative overflow-hidden h-full w-full" glowColor="purple">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Normal state gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/90 via-[#05050f]/30 to-transparent transition-opacity duration-500 opacity-100 group-hover:opacity-0"></div>

                  {/* Hover state overlay (70% purple-magenta gradient) */}
                  <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">

                    <div className="flex gap-2 mb-3 transform transition-transform duration-500 group-hover:-translate-y-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold font-body text-white bg-purple-900/60 border border-purple-400/30 px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>

                    <h3 className="font-display text-3xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-4">{project.title}</h3>
                    <p className="font-body text-gray-200 line-clamp-2 max-w-md opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transform translate-y-4 group-hover:-translate-y-4 transition-all duration-500">
                      {project.desc}
                    </p>

                    {/* Buttons show on hover */}
                    <div className="flex gap-4 mt-2 overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transform translate-y-8 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                      <button onClick={() => window.open(project.live, '_blank')} className="px-6 py-2 bg-white text-[#05050f] font-heading font-bold text-sm rounded hover:bg-gray-200 transition-colors shadow-lg pointer-events-auto">
                        View Live
                      </button>
                      <button onClick={() => window.open(project.code, '_blank')} className="px-6 py-2 bg-transparent border border-white text-white font-heading font-bold text-sm rounded hover:bg-white/10 transition-colors pointer-events-auto">
                        Source Code
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
