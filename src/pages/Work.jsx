import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AnimatedText from '../components/AnimatedText';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

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
    <div className="w-full relative overflow-x-hidden pt-32 pb-24 min-h-screen bg-[#000000]">
      {/* Background Blobs - subtle and elegant */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 pt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="md:w-2/3">
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">Works.</span>
            </h1>
            <p className="text-gray-400 font-body text-xl max-w-xl leading-relaxed">
              Explore our portfolio of high-end web experiences, intelligent automated systems, and premium Awwwards-winning interfaces.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-white/50 text-sm font-heading tracking-widest uppercase mb-2">Filter By</span>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-full font-heading text-sm font-medium transition-all duration-300 ${
                    filter === cat 
                    ? 'text-white border-transparent' 
                    : 'text-gray-400 border border-white/10 hover:border-white/30 hover:text-white bg-transparent'
                  }`}
                >
                  {filter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-primary-gradient rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BENTO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className={`${project.span} h-full`}
              >
                <GlassCard className="group relative overflow-hidden h-full w-full rounded-3xl border border-white/5 bg-white/[0.02]" glowColor="purple">
                  {/* Image Background */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Complex Gradients for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                  {/* Top Tags */}
                  <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-lg">
                          {tag}
                        </span>
                      ))}
                     </div>
                     <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                     </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end z-20">
                    <h3 className="font-display text-3xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {project.title}
                    </h3>

                    <div className="overflow-hidden">
                      <p className="font-body text-gray-300 text-sm max-w-md opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transform translate-y-4 group-hover:-translate-y-0 transition-all duration-500 mb-4 ease-in-out">
                        {project.desc}
                      </p>
                    </div>

                    <div className="w-full h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mb-4"></div>

                    <button
                      onClick={() => window.open(project.live, '_blank')}
                      className="flex items-center gap-2 group/btn text-white font-heading font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors w-fit"
                    >
                      {project.live.includes('github') ? (
                         <><GithubIcon size={16} /> View Repository</>
                      ) : (
                         <>View Live Project <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></>
                      )}
                    </button>
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