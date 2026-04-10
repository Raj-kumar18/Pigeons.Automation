import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import emailjs from '@emailjs/browser';
import MagneticElement from '../components/MagneticElement';

// A dynamic, interactive particle 3D node network
function NodeNetwork() {
  const ref = useRef();

  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const coords = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const radius = 2 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  try {
    const { useFrame } = require('@react-three/fiber');
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    });
  } catch (e) { }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#a855f7" size={0.02} sizeAttenuation={true} depthWrite={false} />
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

    // IMPORTANT: The user must replace YOUR_TEMPLATE_ID and YOUR_PUBLIC_KEY
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
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.error(error);
      });
  };

  const inputStyles = "w-full bg-[#1a1a2e]/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white font-body text-lg focus:outline-none focus:border-[#db2777] focus:shadow-[0_0_20px_rgba(219,39,119,0.3)] transition-all duration-300 placeholder-white/30";

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center relative overflow-hidden bg-[#05050f]">

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] left-[30%] w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="w-full grid md:grid-cols-2 gap-24 items-center relative z-10 mt-10">

        {/* LEFT SIDE: Typography & 3D Network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col h-full justify-center relative"
        >
          <div className="absolute inset-0 z-0 h-[80vh] w-[150%] -left-1/4 opacity-40 pointer-events-none hidden md:block">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <NodeNetwork />
            </Canvas>
          </div>

          <div className="relative z-10 pointer-events-auto mt-10 md:mt-0">
            <h1 className="font-display font-bold text-5xl md:text-[90px] leading-[1] md:leading-[0.9] mb-8 text-white tracking-tighter drop-shadow-xl mix-blend-difference">Let's Build<br />The Future.</h1>
            <p className="text-gray-400 font-body text-xl md:text-2xl mb-16 max-w-md leading-relaxed mix-blend-difference">
              Drop us a line. We're ready to engineer your market dominance.
            </p>

            <div className="space-y-8 mix-blend-difference">
              <MagneticElement strength={10} className="items-start justify-start flex">
                <div>
                  <h4 className="font-body font-bold text-gray-500 text-xs tracking-[4px] uppercase mb-2">Direct Line</h4>
                  <a href="mailto:pigeonsautomation@gmail.com" className="font-display font-bold text-white text-2xl hover:text-accentGlow transition-colors duration-300">pigeonsautomation@gmail.com</a>
                </div>
              </MagneticElement>
              <MagneticElement strength={10} className="items-start justify-start flex">
                <div>
                  <h4 className="font-body font-bold text-gray-500 text-xs tracking-[4px] uppercase mb-2">Social</h4>
                  <a href="https://instagram.com/pigeonsautomation" className="font-display font-bold text-white text-2xl hover:text-accentGlow transition-colors duration-300">@pigeonsautomation</a>
                </div>
              </MagneticElement>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: GLASSMORPHISM FORM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-20"
        >
          <form ref={formRef} className="space-y-6 md:space-y-8 bg-[#05050f]/60 backdrop-blur-2xl p-6 md:p-14 rounded-3xl border border-white/5 shadow-2xl" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative group">
                <input type="text" name="name" value={form.name} onChange={handleChange} className={inputStyles} placeholder="Your name" required />
              </div>
              <div className="relative group">
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputStyles} placeholder="you@company.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative group cursor-pointer">
                <select name="project_type" value={form.project_type} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`} required>
                  <option value="" disabled className="text-gray-500 bg-[#05050f]">Project Type...</option>
                  <option value="web" className="text-white bg-[#05050f]">Premium 3D Website</option>
                  <option value="ai" className="text-white bg-[#05050f]">AI Voice Agent</option>
                  <option value="automation" className="text-white bg-[#05050f]">Business Automation</option>
                  <option value="both" className="text-white bg-[#05050f]">Multiple Services</option>
                </select>
              </div>
              <div className="relative group cursor-pointer">
                <select name="budget" value={form.budget} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`} required>
                  <option value="" disabled className="text-gray-500 bg-[#05050f]">Budget Range...</option>
                  <option value="low" className="text-white bg-[#05050f]">₹15k - ₹50k</option>
                  <option value="mid" className="text-white bg-[#05050f]">₹50k - ₹1.5L</option>
                  <option value="high" className="text-white bg-[#05050f]">₹1.5L+</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" className={`${inputStyles} resize-none`} placeholder="Tell us about what you want to build..." required></textarea>
            </div>

            <div className="pt-6">
              <MagneticElement strength={30} className="w-full">
                <button type="submit" disabled={loading} className="group relative w-full overflow-hidden bg-white font-heading font-bold text-xl py-6 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] disabled:opacity-80 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed">
                  <span className="relative z-20 flex items-center justify-center gap-4 text-black group-hover:text-white transition-colors duration-500 tracking-[0.2em]">
                    {loading ? "INITIALIZING..." : (
                      <>INITIATE <span className="transform transition-all duration-500 ease-out group-hover:translate-x-4">&rarr;</span></>
                    )}
                  </span>

                  {/* Sleek Sweep Effect on Hover */}
                  <div className="absolute inset-0 bg-primary-gradient -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10 rounded-xl"></div>
                </button>
              </MagneticElement>

              {success && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 font-body text-center mt-6 tracking-widest text-xs uppercase font-bold">Transmission Successful. We will contact you shortly.</motion.p>
              )}
              {error && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-body text-center mt-6 tracking-widest text-xs uppercase font-bold">System Error. Please verify criteria.</motion.p>
              )}
            </div>

          </form>
        </motion.div>

      </div>
    </div>
  );
}
