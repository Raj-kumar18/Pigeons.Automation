import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';
import MagneticElement from './MagneticElement';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-5xl transition-all duration-500">
        <motion.div 
          className={`flex justify-between items-center px-4 md:px-8 py-3 rounded-full border transition-all duration-500 ${
            scrolled 
            ? 'bg-[#05050f]/80 backdrop-blur-[40px] border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] shadow-inner shadow-white/5' 
            : 'bg-transparent border-transparent'
          }`}
          layout
        >
          
          <MagneticElement strength={30}>
            <Link to="/" className="flex items-baseline relative z-50 px-2 py-1">
              <span className="font-heading font-bold text-xl tracking-tighter text-white">Pigeons</span>
              <span className="font-heading font-bold text-xl tracking-tighter text-accentGlow">Automation</span>
            </Link>
          </MagneticElement>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex gap-2 mr-4 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <MagneticElement key={link.name} strength={20}>
                    <Link
                      to={link.path}
                      className={`relative font-body text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors ${
                        isActive ? 'text-white' : 'text-textMuted hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span 
                          layoutId="navIndicator"
                          className="absolute inset-0 bg-white/10 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </MagneticElement>
                );
              })}
            </div>
            
            <MagneticElement strength={30}>
              <Link to="/contact">
                <CTAButton size="sm" variant="primary" className="rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] px-6">
                  Start Project
                </CTAButton>
              </Link>
            </MagneticElement>
          </nav>

          {/* Mobile Toggle */}
          <MagneticElement strength={50}>
            <button
              className="md:hidden z-50 text-white p-2 rounded-full bg-white/5 border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </MagneticElement>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#05050f]/95 backdrop-blur-[50px] flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), type: 'spring' }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-4xl uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-accentGlow' : 'text-white hover:text-accentGlow'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="pt-12"
            >
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <CTAButton className="rounded-full shadow-[0_0_40px_rgba(219,39,119,0.5)]">Book a Call</CTAButton>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
