import React from 'react';
import { ArrowUpRight, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000] z-30 pt-16 overflow-hidden">
      {/* Decorative top edges */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-[1px] bg-primary-gradient z-10 shadow-[0_0_30px_#a855f7]"></div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link to="/" onClick={scrollToTop} className="flex items-baseline mb-6 group cursor-pointer">
              <span className="font-heading font-bold text-4xl tracking-tighter text-white group-hover:text-gray-200 transition-colors">Pigeons.</span>
              <span className="font-heading font-bold text-4xl tracking-tighter text-accentGlow drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">Automation</span>
            </Link>
            <p className="text-gray-400 font-body text-base leading-relaxed mb-8 max-w-md">
              Top-tier Awwwards-style web experiences and autonomous AI worker integration. We build the future of digital presence and operational automation.
            </p>
            <div className="flex gap-4">
               <a href="https://instagram.com/pigeonsautomation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                 <InstagramIcon />
               </a>
               <a href="https://x.com/PigeonsA2mation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                 <TwitterIcon />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                 <LinkedinIcon />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-display font-bold text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
              Navigate
            </h5>
            <ul className="space-y-4 font-body text-gray-400">
              <li>
                <Link to="/" onClick={scrollToTop} className="group flex items-center gap-2 hover:text-white transition-all duration-300 w-fit">
                  <span className="relative overflow-hidden">
                    <span className="block transform group-hover:-translate-y-full transition-transform duration-300">Home</span>
                    <span className="block absolute top-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={scrollToTop} className="group flex items-center gap-2 hover:text-white transition-all duration-300 w-fit">
                  <span className="relative overflow-hidden">
                    <span className="block transform group-hover:-translate-y-full transition-transform duration-300">Work</span>
                    <span className="block absolute top-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Work</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="group flex items-center gap-2 hover:text-white transition-all duration-300 w-fit">
                  <span className="relative overflow-hidden">
                    <span className="block transform group-hover:-translate-y-full transition-transform duration-300">Services</span>
                    <span className="block absolute top-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Services</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="group flex items-center gap-2 hover:text-white transition-all duration-300 w-fit">
                  <span className="relative overflow-hidden">
                    <span className="block transform group-hover:-translate-y-full transition-transform duration-300">Contact</span>
                    <span className="block absolute top-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">Contact</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
             <h5 className="text-white font-display font-bold text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
              Connect
            </h5>
            <ul className="space-y-4 font-body text-gray-400">
              <li>
                <a href="mailto:hello@pigeonsautomation.com" className="group flex items-start gap-3 hover:text-white transition-all duration-300">
                  <Mail size={18} className="mt-1 flex-shrink-0 text-purple-400/70 group-hover:text-purple-400 transition-colors" />
                  <span>
                    <span className="block text-sm text-gray-500 mb-1 font-medium">Email Us</span>
                    hello@pigeonsautomation.com
                  </span>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 transition-all duration-300">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-purple-400/70" />
                  <span>
                    <span className="block text-sm text-gray-500 mb-1 font-medium">Location</span>
                    Global Remote
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-2 flex flex-col justify-between">
             <div className="hidden lg:block relative h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 overflow-hidden group">
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <h6 className="text-white font-display font-bold mb-2">Ready to scale?</h6>
                <p className="text-xs text-gray-400 mb-6 font-body">Let's build something extraordinary together.</p>
                <Link to="/contact" onClick={scrollToTop} className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all group/btn">
                  Start Project <ArrowUpRight size={16} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-body text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} Pigeons Automation.</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-700"></span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-700"></span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span className="uppercase tracking-widest font-bold text-xs opacity-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </span>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-900/30 hover:border-purple-500/50 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
