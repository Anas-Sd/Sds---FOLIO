import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Star, User, Zap, ChevronRight, Code, BrainCircuit, Database, Cloud, Terminal, Laptop, Cpu, Globe, Lock, Users, Heart } from 'lucide-react';
import timelineData from '../assets/episodes.js';
import { Navigate, useNavigate } from 'react-router-dom';

const MyJourney = () => {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 px-4 font-sans flex justify-center relative overflow-hidden">
      
      {/* 1. Full-Screen Volumetric Light Beam (Applies across complete background edge-to-edge) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-75"
        style={{
          background: "conic-gradient(from 180deg at 50% -5%, rgba(255,255,255,0.35) 0deg, rgba(255,255,255,0.15) 35deg, rgba(255,255,255,0.04) 70deg, transparent 90deg, transparent 270deg, rgba(255,255,255,0.04) 290deg, rgba(255,255,255,0.15) 325deg, rgba(255,255,255,0.35) 360deg)",
          filter: "drop-shadow(0 0 60px rgba(255,255,255,0.4))",
        }}
      />

      {/* 2. Full-Screen God Ray Streaks spanning complete screen width */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30 mix-blend-overlay"
        style={{
          background: "repeating-conic-gradient(from 180deg at 50% -5%, rgba(255,255,255,0.5) 0deg, transparent 4deg, transparent 8deg, rgba(255,255,255,0.4) 12deg)",
        }}
      />

      {/* Ambient Grid Texture across full background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="w-full max-w-3xl relative z-10">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-zinc-400 hover:text-white transition flex items-center gap-1 font-medium"
          >
            ← Back to Home
          </button>
        </div>
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm text-white"
          >
            The Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-xl italic"
          >
            "From print('Hello World') to architecting intelligent web systems."
          </motion.p>
        </div>

        {/* The Timeline Container */}
        <div className="relative border-l-[3px] border-dashed border-zinc-800 ml-4 sm:ml-6 space-y-20 pb-16">

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                className="relative pl-8 sm:pl-10 cursor-pointer group"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : item.id)}
              >
                {/* Timeline Icon Marker */}
                <motion.div
                  layout
                  className={`absolute -left-[24px] top-1 w-11 h-11 rounded-full ${item.color} shadow-lg flex items-center justify-center transition-all duration-300 ${isActive ? 'shadow-xl ring-4 ring-white/20 scale-110' : ''}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>
                {/* Content Area */}
                <div className="transition-all duration-300 rounded-2xl">
                  {/* Header (Always Visible) */}
                  <div className="py-2 flex items-center justify-between relative z-10 overflow-hidden">
                    <div className=''>
                      <p className='mb-1 text-zinc-400 text-xs font-mono uppercase tracking-widest'>Episode {item.id} </p>
                      <h3 className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${isActive ? 'text-white scale-[1.02] transform origin-left drop-shadow-sm' : 'text-zinc-300 opacity-80'}`}>
                        {item.episode}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`p-2 rounded-full ${isActive ? 'text-white bg-zinc-800' : 'text-zinc-500 opacity-60'}`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                  {/* Expandable Matter */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, scale: 0.98 }}
                        animate={{ height: 'auto', opacity: 1, scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0.98 }}
                        transition={{
                          height: { type: "spring", stiffness: 300, damping: 25 },
                          opacity: { duration: 0.2 },
                          scale: { duration: 0.2 }
                        }}
                      >
                        <div className="pt-3 pb-6 flex flex-col space-y-4">
                          <div className="flex gap-3 items-center">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300`}>
                              {item.date}
                            </span>
                          </div>

                          {/* Thematic Punchline */}
                          <p className={`italic font-medium text-sm sm:text-base border-l-2 pl-3 ${isActive ? 'border-white/60 text-zinc-200' : 'border-transparent text-zinc-400'} transition-colors duration-500`}>
                            {item.punchline}
                          </p>

                          {/* Deep Description */}
                          <p className="leading-relaxed text-base sm:text-lg text-zinc-300">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyJourney;