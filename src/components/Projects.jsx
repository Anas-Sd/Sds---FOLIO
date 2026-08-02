import { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, Github, ArrowRight, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS_DATA } from "@/data/projectsData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Automatic Photo Carousel (Borderless)
const AutoLoopingImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] bg-zinc-100 dark:bg-zinc-950/80 rounded-2xl overflow-hidden flex items-center justify-center p-2 sm:p-4 group border border-zinc-200 dark:border-zinc-800/80">
      {/* Ambient background dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/50 dark:from-zinc-950 via-transparent to-zinc-200/30 dark:to-zinc-900/50 pointer-events-none" />

      {/* Looping Image Display */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={currentImage}
          alt={`${title} preview ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-h-[360px] sm:max-h-[400px] lg:max-h-[300px] w-full h-auto object-contain rounded-xl shadow-xl dark:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
        />
      </AnimatePresence>

      {/* Photo Loop Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? "w-6 bg-zinc-900 dark:bg-white" : "w-1.5 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-500 dark:hover:bg-zinc-400"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Photo Badge */}
      <div className="absolute top-4 right-4 z-20 text-[10px] uppercase font-mono tracking-widest bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-400 px-3 py-1 rounded-full backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xs">
        {images.length > 1 ? ` ${currentIndex + 1} / ${images.length}` : "PREVIEW"}
      </div>
    </div>
  );
};

export const Projects = () => {
  const location = useLocation();
  
  const getInitialIndex = () => {
    const params = new URLSearchParams(location.search);
    const projectIdParam = params.get("project");
    if (projectIdParam) {
      const foundIdx = PROJECTS_DATA.findIndex((p) => p.id === projectIdParam);
      if (foundIdx !== -1) return foundIdx;
    }
    return 0;
  };

  const [activeProjectIndex, setActiveProjectIndex] = useState(getInitialIndex);
  const [showRestrictedModal, setShowRestrictedModal] = useState(false);
  const activeIndexRef = useRef(getInitialIndex());
  const cardFrameWrapperRef = useRef(null);
  const lastTransitionTimeRef = useRef(0);

  // Sync index if location search changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectIdParam = params.get("project");
    if (projectIdParam) {
      const foundIdx = PROJECTS_DATA.findIndex((p) => p.id === projectIdParam);
      if (foundIdx !== -1) {
        setActiveProjectIndex(foundIdx);
      }
    }
  }, [location.search]);

  // Sync ref to avoid stale closures
  useEffect(() => {
    activeIndexRef.current = activeProjectIndex;
  }, [activeProjectIndex]);

  const currentProject = PROJECTS_DATA[activeProjectIndex];

  // Helper function to switch project with strict 950ms momentum filter
  const changeProject = useCallback((newIndex) => {
    const now = Date.now();
    if (now - lastTransitionTimeRef.current < 950) return;
    if (newIndex < 0 || newIndex >= PROJECTS_DATA.length) return;

    lastTransitionTimeRef.current = now;
    setActiveProjectIndex(newIndex);
  }, []);

  // Wheel Listener attached STRICTLY to project card container for Laptop/Desktop views
  useEffect(() => {
    const el = cardFrameWrapperRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Do not intercept wheel/scroll on mobile devices!
      if (window.innerWidth < 1024) return;

      // Always lock laptop page scrolling when hovering over project card
      e.preventDefault();
      e.stopPropagation();

      const index = activeIndexRef.current;
      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;

      const now = Date.now();
      if (now - lastTransitionTimeRef.current < 950) {
        return;
      }

      if (Math.abs(e.deltaY) < 12) return;

      if (isDown && index < PROJECTS_DATA.length - 1) {
        changeProject(index + 1);
      }

      if (isUp && index > 0) {
        changeProject(index - 1);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [changeProject]);

  // Touch Swipe for Mobile (Captures HORIZONTAL left/right swipes for switching projects, allows VERTICAL page scrolling)
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    const index = activeIndexRef.current;
    const now = Date.now();

    // Strictly trigger project transition ONLY when HORIZONTAL swipe is dominant (> Math.abs(diffY))
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30 && now - lastTransitionTimeRef.current >= 300) {
      if (diffX > 0 && index < PROJECTS_DATA.length - 1) {
        changeProject(index + 1);
      } else if (diffX < 0 && index > 0) {
        changeProject(index - 1);
      }
    }
  };

  // Ultra-sleek 3D Fade Backwards Depth Animation (Optimized for 60fps mobile transitions)
  const cardVariants = {
    enter: {
      scale: 1.04,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      scale: 0.92,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-10 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white overflow-hidden flex flex-col justify-center min-h-[auto] md:min-h-screen"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase text-zinc-900 dark:text-white">
            Selected <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-zinc-300 dark:bg-zinc-800 mx-auto mt-3" />
        </div>

        {/* Card Frame Wrapper (Attached strictly to project card area!) */}
        <div
          ref={cardFrameWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-6xl cursor-pointer touch-pan-y"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-[0_30px_90px_rgba(0,0,0,0.95)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Ambient Card Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-200/50 dark:bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                {/* Left Column: Photo Carousel */}
                <div className="lg:col-span-6 w-full">
                  <AutoLoopingImageCarousel
                    images={currentProject.images}
                    title={currentProject.title}
                  />
                </div>

                {/* Right Column: Project Information */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Counter & Subtitle Header */}
                  <div className="sm:flex items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-900 pb-3">
                    <span className="text-[0.25cm] ml-3 sm:-ml-3 sm:text-[0.3cm] font-mono text-zinc-700 dark:text-zinc-400 font-bold uppercase tracking-widest">
                      PROJECT 0{activeProjectIndex + 1} / 0{PROJECTS_DATA.length}
                    </span>
                    <div className="flex items-center gap-2">
                      {currentProject.isOngoing && (
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          ONGOING
                        </span>
                      )}
                      {currentProject.isFreelance && (
                        <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                          FREELANCE
                        </span>
                      )}
                      <span className="text-xs mt-2 sm:-mt-2 font-bold px-3 py-1 rounded-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 shadow-xs">
                        {currentProject.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    {(currentProject.isFreelance || currentProject.isOngoing) && (
                      <div className="sm:hidden mb-2 flex items-center gap-2">
                        {currentProject.isOngoing && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            ONGOING
                          </span>
                        )}
                        {currentProject.isFreelance && (
                          <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                            FREELANCE
                          </span>
                        )}
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white mb-3">
                      {currentProject.title === "CollabX" ? (
                        <>Collab<span className="text-yellow-500 dark:text-yellow-400">X</span></>
                      ) : (
                        currentProject.title
                      )}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800/80 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with Dedicated Standalone Page Navigation */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                    {currentProject.Live && (
                      <Button asChild className="bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm">
                        <a href={currentProject.Live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {currentProject.github && (
                      <Button asChild variant="outline" className="border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 shadow-xs">
                        <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    )}

                    {activeProjectIndex < 4 && (
                      currentProject.isRestricted ? (
                        <Button
                          onClick={() => setShowRestrictedModal(true)}
                          variant="secondary"
                          className="bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-amber-600 dark:text-amber-400 font-medium border border-amber-500/30 flex items-center gap-2 shadow-xs"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          Full Case Study
                        </Button>
                      ) : (
                        <Button asChild variant="secondary" className="bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-zinc-800 shadow-xs">
                          <Link to={`/project/${currentProject.id}`} className="flex items-center gap-2">
                            Full Case Study
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      )
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Navigation Controls & Dot Indicators (Centered below card) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
          <button
            onClick={() => changeProject(activeProjectIndex - 1)}
            disabled={activeProjectIndex === 0}
            aria-label="Previous project"
            className="p-2 rounded-xl bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-all shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {PROJECTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeProject(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeProjectIndex
                    ? "w-8 bg-zinc-900 dark:bg-white"
                    : "w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-500 dark:hover:bg-zinc-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => changeProject(activeProjectIndex + 1)}
            disabled={activeProjectIndex === PROJECTS_DATA.length - 1}
            aria-label="Next project"
            className="p-2 rounded-xl bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-all shadow-xs active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Restricted Case Study Modal */}
      <Dialog open={showRestrictedModal} onOpenChange={setShowRestrictedModal}>
        <DialogContent className="max-w-md bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white p-6 rounded-2xl shadow-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-600 dark:text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-lg font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white">
                  Restricted Case Study
                </DialogTitle>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Freelance Commercial Project
                </span>
              </div>
            </div>
            <DialogDescription className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed pt-2">
              Detailed case study documentation, source code, and backend schemas for <strong className="text-zinc-900 dark:text-white font-semibold">{currentProject.title}</strong> are restricted under a client Non-Disclosure Agreement (NDA). Please use the Live Demo to explore the application's public features.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-900">
            <Button
              onClick={() => setShowRestrictedModal(false)}
              variant="outline"
              className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Close
            </Button>
            {currentProject.Live && (
              <Button asChild className="bg-zinc-900 text-white dark:bg-white dark:text-black font-bold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200">
                <a href={currentProject.Live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Launch Live Demo
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
