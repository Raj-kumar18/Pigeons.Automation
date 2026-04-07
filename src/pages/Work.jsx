import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import AnimatedText from '../components/AnimatedText';
import CTAButton from '../components/CTAButton';

const projects = [
  { id: 1, title: 'LuxNova Real Estate', desc: 'A premium 3D home browsing experience reducing bounce rates by 60%.', category: 'Websites', tags: ['React', 'Three.js'], image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, title: 'AutoServe Voice AI', desc: 'Autonomous call handling for a fleet management corp.', category: 'AI Agents', tags: ['Vapi', 'OpenAI'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 3, title: 'SyncFlow CRM', desc: 'End-to-end data pipeline automation.', category: 'Automations', tags: ['Zapier', 'Make'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 4, title: 'Quantum Tech Store', desc: 'High conversion e-commerce platform.', category: 'Websites', tags: ['Next.js', 'Framer'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 5, title: 'HealthBot 24/7', desc: 'Medical appointment setter bot.', category: 'AI Agents', tags: ['Twilio', 'Python'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
  { id: 6, title: 'LeadGen Pipeline', desc: 'Automated lead qualification and outreach sequence.', category: 'Automations', tags: ['Stripe', 'Node.js'], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1' },
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
                className={`${project.span} h-full`}
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
                        <button className="px-6 py-2 bg-white text-[#05050f] font-heading font-bold text-sm rounded hover:bg-gray-200 transition-colors shadow-lg">
                          View Live
                        </button>
                        <button className="px-6 py-2 bg-transparent border border-white text-white font-heading font-bold text-sm rounded hover:bg-white/10 transition-colors">
                          Case Study
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
