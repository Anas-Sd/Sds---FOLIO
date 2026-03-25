import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Star, User, Zap, ChevronRight, Code, BrainCircuit, Database, Cloud, Terminal, Laptop, Cpu, Globe, Lock, Users, Heart } from 'lucide-react';
import timelineData from '../assets/episodes.js'
import { Navigate, useNavigate } from 'react-router-dom';
const MyJourney = () => {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-hero py-16 px-4 font-sans flex justify-center text-foreground mb-36">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← Back to Home
          </button>
        </div>
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm"
          >
            The Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-xl italic"
          >
            "From print('Hello World') to architecting intelligent web systems."
          </motion.p>
        </div>

        {/* The Timeline Container */}
        <div className="relative border-l-[3px] border-dashed border-primary/20 ml-4 sm:ml-6 space-y-20 pb-10">

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
                {/* Timeline Icon Marker - Added Spring hover effect */}
                <motion.div
                  layout
                  className={`absolute -left-[24px] top-1 w-11 h-11 rounded-full ${item.color} shadow-lg flex items-center justify-center transition-all duration-300 ${isActive ? 'shadow-xl ring-4 ring-primary/20 scale-110' : ''}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>
                {/* Content Area */}
                <div className="transition-all duration-300 rounded-2xl">
                  {/* Header (Always Visible) */}
                  <div className="py-2 flex items-center justify-between relative z-10 overflow-hidden">
                    <div className=''>
                      <p className='mb-1 text-white/70'>Episode {item.id} </p>
                      <h3 className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${isActive ? 'text-primary scale-[1.02] transform origin-left drop-shadow-sm' : 'opacity-80'}`}>
                        {item.episode}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`p-2 rounded-full ${isActive ? 'text-primary bg-primary/10' : 'opacity-50'}`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                  {/* Expandable Matter with highly smooth physics */}
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
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-background/50 backdrop-blur-md shadow-sm ${item.textColor}`}>
                              {item.date}
                            </span>
                          </div>

                          {/* Thematic Punchline */}
                          <p className={`italic font-medium text-sm sm:text-base border-l-2 pl-3 ${isActive ? 'border-primary/50' : 'border-transparent'} transition-colors duration-500`}>
                            {item.punchline}
                          </p>

                          {/* Deep Description */}
                          <p className="leading-relaxed text-base sm:text-lg opacity-90">
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