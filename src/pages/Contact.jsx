import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import emailjs from '@emailjs/browser';
import MagneticElement from '../components/MagneticElement';
import { Mail, AtSign, User, Briefcase, IndianRupee, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

function NodeNetwork() {
  const ref = useRef();

  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 2.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    setSphere(coords);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#a855f7" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    project_type: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.send(
      'service_yl044gm',
      'template_ak89j7l',
      {
        from_name: form.name,
        from_email: form.email,
        project_type: form.project_type,
        budget: form.budget,
        message: form.message,
      },
      'gVP0icmFyH8wuyTEy'
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: '', email: '', project_type: '', budget: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.error(err);
      });
  };

  const inputContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const inputStyles = "w-full bg-[#1a1a2e]/60 backdrop-blur-md border border-white/10 rounded-xl pl-12 pr-4 py-3.5 md:py-4 text-white font-body text-sm md:text-base focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 placeholder-white/30";

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 w-full min-h-screen flex items-center relative overflow-hidden bg-[#05050f]">

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-purple-600/15 blur-[120px] rounded-full mix-blend-screen opacity-50 md:opacity-100" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-50 md:opacity-100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        {/* LEFT SIDE: Typography & 3D Network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center relative"
        >
          {/* 3D Canvas — visible on both, but positioned differently */}
          <div className="absolute inset-0 z-0 h-[60vh] lg:h-[80vh] w-full lg:w-[150%] left-0 lg:-left-1/4 opacity-30 lg:opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <NodeNetwork />
            </Canvas>
          </div>

          <div className="relative z-10 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs md:text-sm font-body font-medium mb-6 md:mb-8 tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[85px] leading-[1.05] lg:leading-[0.9] mb-5 lg:mb-8 text-white tracking-tighter drop-shadow-xl">
              Let's Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">The Future.</span>
            </h1>
            <p className="text-gray-400 font-body text-base sm:text-lg lg:text-xl mb-10 lg:mb-16 max-w-md leading-relaxed">
              Drop us a line. We're ready to engineer your market dominance with cutting-edge solutions.
            </p>

            <div className="space-y-6 lg:space-y-8">
              <MagneticElement strength={10} className="w-fit">
                <a href="mailto:pigeonsautomation@gmail.com" className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-gray-500 text-xs tracking-[2px] uppercase mb-1">Direct Line</h4>
                    <p className="font-display font-bold text-white text-base sm:text-xl group-hover:text-purple-400 transition-colors duration-300 break-all">
                      pigeonsautomation@gmail.com
                    </p>
                  </div>
                </a>
              </MagneticElement>

              <MagneticElement strength={10} className="w-fit">
                <a href="https://instagram.com/pigeonsautomation" target="_blank" rel="noreferrer" className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <AtSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-gray-500 text-xs tracking-[2px] uppercase mb-1">Social</h4>
                    <p className="font-display font-bold text-white text-base sm:text-xl group-hover:text-pink-400 transition-colors duration-300">
                      @pigeonsautomation
                    </p>
                  </div>
                </a>
              </MagneticElement>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: GLASSMORPHISM FORM */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="relative z-20 w-full"
        >
          <form
            ref={formRef}
            className="space-y-4 md:space-y-6 bg-[#0a0a1a]/80 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group"
            onSubmit={handleSubmit}
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
              <motion.div variants={inputContainerVariants} className="relative group/input">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-purple-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div variants={inputContainerVariants} className="relative group/input">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-purple-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="you@company.com"
                  required
                />
              </motion.div>
            </div>

            {/* Project Type + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
              <motion.div variants={inputContainerVariants} className="relative group/input cursor-pointer">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-purple-400 transition-colors z-10" />
                <select
                  name="project_type"
                  value={form.project_type}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none cursor-pointer relative z-0`}
                  required
                >
                  <option value="" disabled className="text-gray-500 bg-[#0a0a1a]">Project Type...</option>
                  <option value="web" className="text-white bg-[#0a0a1a]">Premium Website / 3D</option>
                  <option value="ai" className="text-white bg-[#0a0a1a]">AI Agents</option>
                  <option value="automation" className="text-white bg-[#0a0a1a]">Business Automation</option>
                  <option value="both" className="text-white bg-[#0a0a1a]">Multiple Services</option>
                </select>
              </motion.div>
              <motion.div variants={inputContainerVariants} className="relative group/input cursor-pointer">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-purple-400 transition-colors z-10" />
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none cursor-pointer relative z-0`}
                  required
                >
                  <option value="" disabled className="text-gray-500 bg-[#0a0a1a]">Budget Range...</option>
                  <option value="low" className="text-white bg-[#0a0a1a]">₹6k - ₹13k</option>
                  <option value="mid" className="text-white bg-[#0a0a1a]">₹20k - ₹35L</option>
                  <option value="high" className="text-white bg-[#0a0a1a]">₹50k+</option>
                </select>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={inputContainerVariants} className="relative group/input z-10">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within/input:text-purple-400 transition-colors" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className={`${inputStyles} resize-none min-h-[120px]`}
                placeholder="Tell us about what you want to build..."
                required
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={inputContainerVariants} className="pt-2 md:pt-4 relative z-10">
              <MagneticElement strength={20} className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden bg-white/10 border border-white/20 font-heading font-bold text-sm md:text-base py-4 md:py-5 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span className="relative z-20 flex items-center justify-center gap-2 text-white transition-colors duration-500 tracking-[0.15em] uppercase">
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Initializing...
                      </>
                    ) : (
                      <>
                        Initiate Sequence
                        <Send className="w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 rounded-xl" />
                </button>
              </MagneticElement>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3 mt-4"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="font-body text-sm font-medium">Transmission Successful. We will connect shortly.</p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 mt-4"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-body text-sm font-medium">System Error. Please attempt again later.</p>
                </motion.div>
              )}
            </motion.div>

          </form>
        </motion.div>

      </div>
    </div>
  );
}
