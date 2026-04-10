import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = "918969110880"; 
  // WhatsApp api link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Pigeons%20Automation!`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[90] flex items-center justify-center cursor-pointer group"
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[10px] opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M12.031 0C5.399 0 0 5.401 0 12.035c0 2.128.555 4.195 1.611 6.012L.15 23.364l5.467-1.433a12.028 12.028 0 0 0 6.414 1.836h.005c6.629 0 12.03-5.4 12.03-12.031S18.663 0 12.031 0zm.005 19.743c-1.802 0-3.567-.482-5.111-1.396l-.367-.217-3.8.995.996-3.7-.238-.378a9.986 9.986 0 0 1-1.528-5.321c0-5.513 4.48-9.996 9.988-9.996 2.671 0 5.183 1.042 7.072 2.934a9.96 9.96 0 0 1 2.93 7.062c0 5.515-4.482 9.996-9.99 9.996h-.002l-.05.021zm5.474-7.481c-.301-.151-1.785-.882-2.062-.984-.277-.101-.48-.151-.68.151-.202.302-.782.984-.959 1.185-.176.202-.353.227-.655.076-1.554-.775-2.736-1.411-3.79-3.21-.176-.301.176-.277.755-1.432.076-.151.038-.285-.019-.436-.057-.151-.68-1.642-.926-2.251-.24-.59-.484-.51-.68-.521h-.58c-.201 0-.528.076-.804.378-.277.302-1.055 1.034-1.055 2.52s1.08 2.923 1.232 3.125c.151.202 2.128 3.25 5.158 4.56 2.054.891 2.87.907 3.398.761.6-.171 1.785-.731 2.037-1.437.252-.705.252-1.311.176-1.437-.076-.126-.277-.202-.578-.353z"/>
        </svg>
      </div>
    </motion.div>
  );
}
