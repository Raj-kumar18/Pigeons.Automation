import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Zap, UserCheck, Activity, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useMousePosition from '../hooks/useMousePosition';
import CTAButton from '../components/CTAButton';
import GlassCard from '../components/GlassCard';
import AnimatedText from '../components/AnimatedText';
import MagneticElement from '../components/MagneticElement';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Home() {
  const mouse = useMousePosition();
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  // Parallax transforms based on scroll
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const textY = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full flex w-screen flex-col overflow-x-hidden relative bg-[#05050f]">

      {/* GLOBAL CINEMATIC GRID & VIGNETTE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}
      />
      <div className="fixed inset-0 z-40 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)] mix-blend-overlay"></div>

      {/* BACKGROUND BLOBS GLOBAL */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-pink-600/20 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden z-10">

        {/* Ambient Glowing Background */}
        <motion.div style={{ y: heroY, opacity: opacityFade }} className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center mix-blend-lighten">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-purple-600/30 blur-[120px] md:blur-[180px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-pink-500/20 blur-[100px] md:blur-[140px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '3s' }}></div>
        </motion.div>

        {/* CENTERED PREMIUM TYPOGRAPHY */}
        <motion.div style={{ y: textY }} className="w-full relative z-10 flex flex-col items-center justify-center pointer-events-none px-4 mt-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">

            <motion.div variants={fadeUpVariant} className="mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-purple-500/50 block"></span>
              <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-purple-400 font-bold">Pigeons Automation</span>
              <span className="h-[1px] w-8 bg-purple-500/50 block"></span>
            </motion.div>

            <div className="overflow-hidden pb-4">
              <motion.h1
                variants={fadeUpVariant}
                className="font-display font-light text-[10vw] md:text-[8vw] leading-[1] tracking-tight text-white/90 drop-shadow-2xl"
              >
                Intelligence <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Takes Flight.</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden max-w-2xl mt-4 px-4 pointer-events-auto">
              <motion.p variants={fadeUpVariant} className="font-body text-lg md:text-xl text-gray-300/80 font-light tracking-wide leading-relaxed">
                We craft autonomous digital entities and ultra-premium web architectures. Empowering your brand with relentless AI systems that never sleep.
              </motion.p>
            </div>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-16 pointer-events-auto z-50">
              <MagneticElement strength={20}>
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-full px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 font-bold text-white tracking-widest text-sm shadow-[0_0_40px_rgba(219,39,119,0.4)] hover:shadow-[0_0_60px_rgba(219,39,119,0.7)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 blur-md transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                  <span className="relative z-10">INITIALIZE AGENT</span>
                </button>
              </MagneticElement>
              <MagneticElement strength={20}>
                <button
                  onClick={() => navigate('/work')}
                  className="rounded-full px-10 py-4 bg-transparent border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 text-white font-bold tracking-widest text-sm transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_30px_rgba(219,39,119,0.2)]"
                >
                  VIEW CASE STUDIES
                </button>
              </MagneticElement>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FLOATING HUD ELEMENTS */}
        <motion.div style={{ y: heroY }} className="absolute right-[5%] bottom-[25%] hidden lg:flex flex-col items-end z-20 pointer-events-none gap-2 opacity-60">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 border-b border-white/10 pb-1 w-32 text-right">System Status</div>
          <div className="flex items-center gap-2 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-mono">ALL SECURE</span>
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="absolute left-[5%] top-[30%] hidden lg:flex flex-col items-start z-20 pointer-events-none gap-2 opacity-60">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 border-b border-white/10 pb-1 w-32">Agent Swarm</div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-xs font-mono text-purple-400">ACTIVE OVERLAY</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 z-10 mix-blend-difference"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-normal mb-3 font-body opacity-50">Scroll to Explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="w-8 h-8 text-purple-400" />, title: "Bank-grade Security", desc: "Enterprise level protection built into the core architecture.", glow: 'purple' },
              { icon: <Zap className="w-8 h-8 text-pink-400" />, title: "Sub-2s Load Times", desc: "Optimized pipelines, smart caching, and perfectly tailored assets guaranteeing blazing speed.", glow: 'magenta' },
              { icon: <UserCheck className="w-8 h-8 text-purple-400" />, title: "100% Human-built", desc: "Crafted by expert engineers. We avoid generic AI generation and build tailored code.", glow: 'purple' },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
              >
                <GlassCard className="p-10 h-full w-full relative z-10 transition-colors group-hover:bg-[#ffffff0c]" glowColor={card.glow}>
                  <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                    {card.icon}
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-primary-gradient transition-all duration-300">{card.title}</h4>
                  <p className="text-gray-400 font-body leading-relaxed">{card.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-40 relative z-10 border-y border-white/5 bg-[#030308]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <motion.div className="md:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <AnimatedText text="Our Capabilities" el="h2" className="font-display text-5xl md:text-[60px] font-bold text-white mb-6 leading-tight" />
            <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg font-body mb-8">
              We specialize in the intersection of premium visual aesthetics and autonomous intelligence.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <MagneticElement strength={20}>
                <CTAButton variant="ghost" className="rounded-full">Explore All Services</CTAButton>
              </MagneticElement>
            </motion.div>
          </motion.div>

          <div className="md:w-2/3 flex flex-col md:flex-row gap-6 w-full">
            {[
              { title: "Premium Websites", subtitle: "Awwwards quality experiences", tags: ["React", "Three.js"], glow: "purple" },
              { title: "AI Agents", subtitle: "Autonomous GPT entities", tags: ["Vapi", "OpenAI"], glow: "magenta" }
            ].map((srv, i) => (
              <motion.div
                key={i}
                className="w-full flex-1 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <GlassCard glowColor={srv.glow} className="p-8 h-full flex flex-col">
                  <h3 className="font-heading text-3xl font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-gray-400 font-body mb-8 flex-grow">{srv.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {srv.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK (BENTO GRID WITH DEEP HOVER) */}
      <section className="py-40 relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <AnimatedText text="Featured Work" el="h2" className="font-display text-5xl md:text-[70px] font-bold text-white mb-4" />
          <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg">Case studies showing raw output capability.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden glass-panel border-white/10 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1200&q=80" alt="Work 1" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-[#05050f]/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* Vibrant Overlay on hover */}
            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-80 transition-all duration-700 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>

            <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
              <div className="overflow-hidden mb-2">
                <h3 className="font-display font-bold text-4xl text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">OmniFlow Interface</h3>
              </div>
              <div className="flex gap-2 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500 delay-75">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">React</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">Three.js</span>
              </div>

              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-8 group-hover:translate-x-0 transition-all duration-500 delay-150">
                <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-bold">
                  &rarr;
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass-panel border-white/10 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" alt="Work 2" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-[#05050f]/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>

            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-80 transition-all duration-700 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 text-white">
              <h3 className="font-display font-bold text-3xl mb-2 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">NeonAI Voice</h3>
              <p className="text-sm font-body text-gray-200 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Autonomous voice agent handling 800+ calls daily.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS (MARQUEE) */}
      {/* <section className="py-24 relative z-10 w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="mb-16 text-center">
          <span className="text-xs font-bold text-accentGlow uppercase tracking-[4px] mb-4 block">Social Proof</span>
          <h2 className="font-display font-bold text-white text-4xl">What The Elite Say</h2>
        </div>
        <div className="relative w-full flex whitespace-nowrap overflow-hidden py-8 fade-edges">
          <div className="animate-marquee inline-block whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="inline-block mx-6 whitespace-normal align-top">
                <GlassCard glowColor="purple" className="w-[400px] p-10 shrink-0 border-white/5 bg-[#ffffff03]">
                  <p className="text-gray-300 font-body text-lg mb-8 italic leading-relaxed">"Honestly, the most futuristic website we've ever seen. Pigeons Automation delivered an experience that our competitors are still trying to figure out."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-accentGlow/50 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white font-heading tracking-wide">Alex Mercer</h5>
                      <span className="text-xs text-textMuted uppercase font-bold tracking-widest mt-1 block">CEO, TechNova</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
          <div className="animate-marquee inline-block whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <div key={i + 4} className="inline-block mx-6 whitespace-normal align-top">
                <GlassCard glowColor="purple" className="w-[400px] p-10 shrink-0 border-white/5 bg-[#ffffff03]">
                  <p className="text-gray-300 font-body text-lg mb-8 italic leading-relaxed">"The AI agent they built handles 85% of our inbound calls. ROI was positive in exactly 4 days. Absolutely insane work ethic."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-pink-500/50 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white font-heading tracking-wide">Sarah Jenkins</h5>
                      <span className="text-xs text-textMuted uppercase font-bold tracking-widest mt-1 block">Director, ApexRealty</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA BANNER */}
      <section className="relative py-40 z-10 flex justify-center text-center overflow-hidden border-t-4 border-b-4 border-transparent">
        <div className="absolute inset-0 bg-[#0a0a14] z-0"></div>
        <div className="absolute inset-0 bg-primary-gradient opacity-15 mix-blend-screen skew-y-6 scale-125 transform origin-left"></div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <AnimatedText el="h2" text="Ready to build something real?" className="font-display font-bold text-5xl md:text-[80px] leading-tight md:leading-none text-white mb-10 tracking-tighter drop-shadow-2xl" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <MagneticElement strength={40}>
              <button className="group relative px-12 py-6 bg-white overflow-hidden rounded-full font-bold text-black font-heading text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 tracking-wider">Start Project &rarr;</span>
              </button>
            </MagneticElement>
          </motion.div>
        </div>
      </section>

      {/* Inline styles for marquee edges, scrollbar hiding, and gradient animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .fade-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
