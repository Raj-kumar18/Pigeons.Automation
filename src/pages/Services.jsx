import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Wireframe } from '@react-three/drei';
import { Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import MagneticElement from '../components/MagneticElement';

// A dynamic background component that shifts colors deeply based on scroll position
function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.05]);
  const bgOpacity2 = useTransform(scrollYProgress, [0.3, 1], [0.05, 0.2]);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div 
        style={{ opacity: bgOpacity1 }} 
        className="absolute top-[20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-600 blur-[150px] rounded-full mix-blend-screen"
      />
      <motion.div 
        style={{ opacity: bgOpacity2 }} 
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-pink-600 blur-[150px] rounded-full mix-blend-screen"
      />
    </div>
  );
}

function FloatingGeometry({ position, args, type }) {
  const ref = useRef();
  import('@react-three/fiber').then(({ useFrame }) => {
    // Only register useFrame if this isn't SSR and is rendered properly
  }).catch();
  
  try {
    const { useFrame } = require('@react-three/fiber');
    useFrame((state) => {
      if(ref.current) {
        ref.current.rotation.x = state.clock.elapsedTime * 0.1;
        ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      }
    });
  } catch(e) {}

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        {type === 'torus' ? <torusGeometry args={args} /> : <icosahedronGeometry args={args} />}
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

const services = [
  {
    title: "Premium Websites",
    price: "Starting from ₹4,999",
    description: "We build digital experiences that command attention. Zero templates. Every pixel, transition, and layout is uniquely engineered to convert standard traffic into high-ticket clients.",
    features: ["Bespoke animations", "Mobile responsive", "SEO architecture", "Sub-2s loads", "Secure endpoints", "Domain linking"],
    glow: "purple",
    id: 1,
    accent: "text-purple-400"
  },
  {
    title: "AI Agents",
    price: "Custom Pricing",
    description: "Deploy an army of autonomous conversational agents that never sleep. Fully tailored to your business knowledge base, booking leads securely at 3AM without missing a beat.",
    features: ["Custom LLM training", "Multi-platform", "24/7 autonomous", "CRM syncing", "Voice + Text variants", "Real-time logs"],
    glow: "magenta",
    id: 2,
    accent: "text-pink-400",
    isComingSoon: true
  },
  {
    title: "Automations",
    price: "Custom Pricing",
    description: "Stop bleeding time. We interlink your disparate software stacks into a single, cohesive workflow engine that operates completely hands-free.",
    features: ["Complex logic branching", "API integrations", "Scheduled execution", "Database routing", "Error catching", "Scalable limits"],
    glow: "purple",
    id: 3,
    accent: "text-purple-400",
    isComingSoon: true
  }
];

export default function Services() {
  return (
    <div className="w-full relative overflow-x-hidden pt-40 pb-20 bg-[#05050f] min-h-screen">
      
      <DynamicBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HERO */}
        <div className="text-center relative mb-40 h-[60vh] flex flex-col justify-center items-center">
           {/* Increased opacity, and brought it to absolute center behind text */}
           <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none flex justify-center items-center">
             <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
                <ambientLight intensity={2} />
                <FloatingGeometry type="torus" args={[16, 5, 20, 100]} position={[0,0,0]} />
             </Canvas>
           </div>
           
           <AnimatedText text="Capabilities" el="h1" className="font-display text-7xl md:text-[110px] font-bold text-white relative z-10 tracking-tighter drop-shadow-2xl mb-6" />
           <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8 }} 
              className="font-body text-xl text-gray-400 max-w-2xl text-center relative z-10"
           >
             Engineered systems designed to push boundaries and dominate markets.
           </motion.p>
        </div>

        {/* ALTERNATING SECTIONS */}
        <div className="space-y-40">
          {services.map((srv, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div key={srv.id} className={`flex flex-col md:flex-row gap-16 items-center ${isEven ? 'md:flex-row-reverse' : ''} ${srv.isComingSoon ? 'opacity-80 grayscale-[30%]' : ''}`}>
                
                {/* TEXT CONTENT */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="w-full md:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display font-bold text-5xl md:text-6xl text-white uppercase tracking-tight m-0">{srv.title}</h2>
                    {srv.isComingSoon && (
                      <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-full border border-white/20 backdrop-blur-md">Coming Soon</span>
                    )}
                  </div>
                  
                  {!srv.isComingSoon && (
                    <div className="inline-block px-5 py-2 bg-[#ffffff0a] backdrop-blur-md border border-white/10 rounded-full font-heading font-bold text-white mb-8 shadow-xl">
                      <span className={srv.accent}>{srv.price}</span>
                    </div>
                  )}
                  {srv.isComingSoon && (
                    <div className="inline-block px-5 py-2 bg-[#ffffff05] backdrop-blur-md border border-white/5 rounded-full font-heading font-bold text-gray-500 mb-8">
                      <span>{srv.price}</span>
                    </div>
                  )}
                  
                  <p className="text-xl font-body text-gray-400 mb-10 leading-relaxed max-w-lg">{srv.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-12">
                    {srv.features.map((feat, i) => (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once:true }}
                         key={feat} className={`flex items-start gap-4 ${srv.isComingSoon ? 'opacity-50' : ''}`}
                       >
                         <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/10 ${srv.isComingSoon ? 'text-gray-500' : srv.accent}`}>
                           <Check size={14} strokeWidth={3} />
                         </div>
                         <span className="font-body text-sm font-bold text-gray-300 uppercase tracking-widest">{feat}</span>
                       </motion.div>
                    ))}
                  </div>

                  <MagneticElement strength={20}>
                    {srv.isComingSoon ? (
                      <button className="px-10 py-4 rounded-full border border-white/10 text-white/50 font-bold uppercase tracking-widest text-sm bg-white/5 cursor-not-allowed">Join Waitlist</button>
                    ) : (
                      <CTAButton variant="primary" className="rounded-full px-10 border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)]">Request Proposal</CTAButton>
                    )}
                  </MagneticElement>
                </motion.div>

                {/* 3D TILT CARD */}

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="w-full md:w-1/2"
                  style={{ perspective: 1000 }}
                >
                   <motion.div 
                     whileHover={{ rotateY: isEven ? 10 : -10, rotateX: 5, scale: 1.05 }}
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     className="w-full"
                   >
                     <GlassCard glowColor={srv.glow} className={`p-2 relative min-h-[500px] rounded-3xl overflow-hidden border-2 ${srv.glow === 'purple' ? 'border-[#a855f7]/30' : 'border-[#db2777]/30'}`}>
                        <div className="absolute inset-0 bg-[#05050fc2] z-10 p-10 flex flex-col justify-between">
                          
                          <div className="flex justify-between items-center opacity-30">
                             <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                               {srv.id}
                             </div>
                             <div className="text-xl font-body uppercase tracking-[8px] font-bold">Node {srv.id}</div>
                          </div>

                          <div className="w-full flex-grow flex items-center justify-center relative">
                             {/* Abstract geometric focus point */}
                             <div className={`absolute w-64 h-64 border border-white/5 rounded-full blur-[2px] ${srv.glow === 'purple' ? 'bg-purple-500/10' : 'bg-pink-500/10'}`}></div>
                             <div className="absolute w-40 h-40 border border-white/10 rounded-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/5 rounded-full border border-white/20 animate-pulse"></div>
                             </div>
                          </div>
                          
                          <div>
                            <h3 className="font-display text-white/50 text-5xl font-bold uppercase tracking-tighter mix-blend-overlay">{srv.title}</h3>
                          </div>
                        </div>
                     </GlassCard>
                   </motion.div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="mt-40 text-center py-32 border-t border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary-gradient opacity-5 mix-blend-screen pointer-events-none"></div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight relative z-10">Not sure what you need?</h2>
          <p className="text-gray-400 font-body text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">Book a free strategy session. We'll reverse-engineer your operations and show you exactly where premium web tech and custom AI will explode your revenue.</p>
          <MagneticElement strength={30}>
            <CTAButton variant="primary" size="lg" className="rounded-full relative z-10 text-lg px-12" onClick={() => window.location.href='/contact'}>Let's Talk Strategy</CTAButton>
          </MagneticElement>
        </motion.div>
        
      </div>
    </div>
  );
}
