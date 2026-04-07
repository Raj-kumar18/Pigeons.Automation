import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] z-30 pt-10">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-0"></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-primary-gradient z-10 shadow-[0_0_20px_#a855f7]"></div>
       
       <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12 relative z-10">
         <div className="md:col-span-2">
           <div className="flex items-baseline mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-white">Pigeons.</span>
              <span className="font-heading font-bold text-3xl tracking-tighter text-accentGlow">Automation</span>
           </div>
           <p className="text-gray-400 font-body text-base max-w-sm leading-relaxed">Top-tier Awwwards-style web experiences and autonomous AI worker integration. We build the future.</p>
         </div>
         <div>
           <h5 className="text-white font-display font-bold text-lg mb-6 tracking-wide">Navigate</h5>
           <ul className="space-y-4 font-body text-gray-400">
             <li><a href="/" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Home</a></li>
             <li><a href="/work" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Work</a></li>
             <li><a href="/services" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Services</a></li>
           </ul>
         </div>
         <div>
           <h5 className="text-white font-display font-bold text-lg mb-6 tracking-wide">Social</h5>
           <ul className="space-y-4 font-body text-gray-400">
             <li><a href="https://instagram.com/pigeonsautomation" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Instagram</a></li>
             <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Twitter/X</a></li>
             <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">LinkedIn</a></li>
           </ul>
         </div>
       </div>
       <div className="border-t border-white/5 py-8 relative z-10">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-body text-gray-500">
           <span>© 2025 Pigeons Automation.</span>
           <span className="uppercase tracking-widest font-bold text-xs mt-4 md:mt-0 opacity-50">Built Different</span>
         </div>
       </div>
    </footer>
  );
}
