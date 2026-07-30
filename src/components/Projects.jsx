import { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, Github, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 7 Portfolio Projects Data
const PROJECTS_DATA = [
  {
    id: "prompt2paint",
    title: "Prompt 2 Paint [v2]",
    subtitle: "AI-Powered Image Generation SaaS",
    description: "An AI-powered SaaS platform that converts text prompts into high-quality images. Built with a scalable MERN architecture, secure authentication, and a credit-based monetization system.",
    images: [
      new URL("@/assets/prompt2paint-screenshot.png", import.meta.url).href,
      new URL("@/assets/Screenshot 2026-03-23 152614.png", import.meta.url).href,
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"],
    Live: "https://prompt2paint.app",
    github: "https://github.com/Anas-Sd/Prompt_2_Paint",
    details: {
      overview:
        "Prompt 2 Paint is a full-stack AI SaaS platform that transforms natural language prompts into high-quality images. It started as a foundational learning project (Version 1) and evolved into a production-ready system (Version 2) with real-world authentication, monetization, and user management features.",
      features: [
        "AI text-to-image generation engine",
        "JWT & OAuth authentication protocols",
        "OTP-based account verification",
        "Credit-based usage & subscription system",
        "Payment integration with promotional coupons",
        "Favorites & cloud image storage",
        "User dashboard & profile analytics",
        "High-resolution download & preview capabilities"
      ],
      stack: "React.js, Node.js, Express.js, MongoDB, JWT, OAuth 2.0, REST APIs, Vercel, Railway",
      role: "Designed, developed, and deployed both versions independently — including frontend, backend, authentication, payment systems, and overall architecture.",
      roadmap: [
        "Performance optimization & caching",
        "Advanced image generation controls",
        "Improved scaling infrastructure"
      ],
      versions: [
        {
          title: "Version 1 – Foundation",
          content: "The first version focused on building a complete end-to-end MERN application. It included authentication, AI image generation, download functionality, and payment integration."
        },
        {
          title: "Version 2 – Production Upgrade",
          content: "Version 2 transformed the project into a production-ready SaaS platform. It introduced secure JWT + OAuth authentication, OTP verification, credit-based monetization, coupon systems, user dashboards, and structured account management."
        }
      ]
    }
  },
  {
    id: "islamiq",
    title: "IslamiQ",
    subtitle: "Modern Quran Companion & Spiritual Platform",
    description: "IslamiQ is a responsive Quran reading platform that enables instant navigation across Surahs, Aayahs, Rukus, and pages. It integrates translation support, real-time Salah timings, and daily content features for an enhanced user experience.",
    images: [
      new URL("@/assets/IslamiQ_LOGO.png", import.meta.url).href,
    ],
    tags: ["React.js", "Tailwind CSS", "Firebase", "Supabase", "REST APIs"],
    Live: "https://islamiq.vercel.app",
    github: "https://github.com/Anas-Sd/ISLAMIQ",
    details: {
      overview:
        "IslamiQ is a modern Quran companion designed to make reading simple, accessible, and structured. It eliminates the need to search through multiple screens by allowing users to instantly jump to any Surah, Aayah, Ruku, or page — creating a smooth and distraction-free reading experience.",
      features: [
        "Direct navigation by Surah, Aayah, Ruku, and Page",
        "English translation alongside Arabic text",
        "Real-time Salah timings based on geolocation",
        "Daily Verse & Hadith generator",
        "Reference section for navigation clarity",
        "Mobile-first responsive obsidian design"
      ],
      stack: "React.js, Tailwind CSS, Supabase Auth, Firebase, REST APIs, Framer Motion",
      role: "Designed and developed the entire application with a focus on usability, accessibility, and real-world user needs.",
      roadmap: [
        "Mobile app version (React Native)",
        "Telugu translation support",
        "Cloud bookmarking system",
        "Audio recitation player"
      ]
    }
  },
  {
    id: "sstraders",
    title: "SS TRADERS",
    subtitle: "Commercial Inventory Management System",
    description: "Inventory management system for structured item listing with category-based organization. Public users can browse inventory while admin controls all the modifications.",
    images: [
      new URL("@/assets/SS-TRADERS_LOGO.png", import.meta.url).href,
    ],
    tags: ["Freelance", "React", "Supabase", "Cloudinary"],
    Live: "https://sstraders1.vercel.app/",
    github: "https://github.com/Anas-Sd/SS-TRADERS",
    details: {
      overview: "SS Traders is an inventory management system designed to organize and display items in a structured A–Z category format with nested parts and admin-controlled operations.",
      features: [
        "Category-based A–Z item listing",
        "Nested item structure (items with parts)",
        "Admin authentication and access control",
        "Add, update, and delete inventory items",
        "Cloud-based image upload and storage"
      ],
      stack: "React, Supabase, Firebase, Cloudinary",
      role: "Developed the complete frontend, database integration, authentication system, and inventory management features for client delivery."
    }
  },
  {
    id: "flip2win",
    title: "Flip 2 Win",
    subtitle: "Interactive Memory Game & State Logic",
    description: "A JavaScript-based Memory Card Matching Game featuring shuffle logic, score tracking, life system, and smooth flip animations. Built using HTML, CSS, and DOM manipulation to practice core frontend and game logic concepts.",
    images: [
      new URL("@/assets/flip the card logo.png", import.meta.url).href,
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    Live: "https://flip2win.vercel.app/",
    github: "https://github.com/Anas-Sd/FLIP---THE---CARD",
    details: {
      overview: "A web-based memory game designed to challenge recall ability through interactive card matching. Built with a focus on performance, smooth visual feedback, and a distraction-free user experience.",
      features: [
        "Dynamic card flipping with fluid visual transitions",
        "Randomized game setup for unique gameplay each session",
        "Point-based progression system",
        "Limited attempts mechanic to increase difficulty",
        "Instant reset functionality for replayability"
      ],
      stack: "HTML, CSS, JavaScript, Vercel",
      role: "Independently developed the complete application including UI design, interaction logic, and game state handling."
    }
  },
  {
    id: "passwordgen",
    title: "PASSWORD GENERATOR",
    subtitle: "Security Tool & Algorithmic Randomization",
    description: "Generates secure passwords based on user-defined length with efficient randomization logic. Designed for simplicity and quick usage while ensuring strong password creation. Focuses on core JavaScript logic and input handling.",
    images: [
      new URL("@/assets/lock.png", import.meta.url).href,
    ],
    tags: ["API", "JavaScript", "Security Utility"],
    Live: "https://password-chesko.vercel.app/",
    github: "https://github.com/Anas-Sd/Strong_Password_Generator",
    details: {
      overview: "A web-based utility designed to generate strong passwords based on user-defined length, focusing on randomness and efficient input handling.",
      features: [
        "User-defined password length input",
        "Randomized secure password generation",
        "Instant output rendering & one-click copy",
        "Minimalist dark interface"
      ],
      stack: "HTML, CSS, JavaScript",
      role: "Developed the complete application including UI, input handling, and password generation logic."
    }
  },
  {
    id: "jokesgen",
    title: "JOKES GENERATOR",
    subtitle: "Asynchronous API Integration App",
    description: "Fetches and displays random jokes using API integration with real-time updates. Built to demonstrate asynchronous data handling and dynamic content rendering. Provides a simple and interactive API-based experience.",
    images: [
      new URL("@/assets/jokes_logo.png", import.meta.url).href,
    ],
    tags: ["REST API", "JavaScript", "Async JS"],
    Live: "https://navvuko.vercel.app/",
    github: "https://github.com/Anas-Sd/JOKES-API",
    details: {
      overview: "An API-based application that retrieves and displays random jokes, focusing on asynchronous operations and real-time UI updates.",
      features: [
        "API-based joke fetching engine",
        "One-click content generation",
        "Dynamic UI rendering",
        "Lightweight and responsive design"
      ],
      stack: "HTML, CSS, JavaScript, REST API",
      role: "Implemented API integration, asynchronous data handling, and UI updates."
    }
  },
  {
    id: "qrgen",
    title: "QR CODE GENERATOR",
    subtitle: "Real-time Encoding & Image Rendering",
    description: "Generates QR codes from user-defined text using API-based image rendering. Designed for instant visual output with real-time input handling. Focuses on simplicity and practical API usage.",
    images: [
      new URL("@/assets/qr_code_logo.png", import.meta.url).href,
    ],
    tags: ["QR API", "JavaScript", "Tooling"],
    Live: "https://scan-chey.netlify.app/",
    github: "https://github.com/Anas-Sd/QR_CODE_GENERATOR",
    details: {
      overview: "A web tool that converts user input into QR codes in real-time, emphasizing API usage and dynamic content generation.",
      features: [
        "User input-based QR code generation",
        "Instant image rendering engine",
        "Real-time updates",
        "Simple and intuitive UI"
      ],
      stack: "HTML, CSS, JavaScript, QR API",
      role: "Built the complete application including API integration, input handling, and real-time rendering."
    }
  }
];

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
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] bg-zinc-950/80 rounded-2xl overflow-hidden flex items-center justify-center p-4 sm:p-6 group">
      {/* Ambient background dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-zinc-900/50 pointer-events-none" />

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
          className="relative z-10 max-h-[280px] sm:max-h-[320px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
        />
      </AnimatePresence>

      {/* Photo Loop Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Photo Badge */}
      <div className="absolute top-4 right-4 z-20 text-[10px] uppercase font-mono tracking-widest bg-zinc-900/90 text-zinc-400 px-3 py-1 rounded-full backdrop-blur-md">
        {images.length > 1 ? `PHOTO ${currentIndex + 1} / ${images.length}` : "PREVIEW"}
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const cardFrameWrapperRef = useRef(null);
  const lastTransitionTimeRef = useRef(0);

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

  // Wheel Listener attached STRICTLY to project card container with momentum lock
  useEffect(() => {
    const el = cardFrameWrapperRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // 1. ALWAYS prevent screen scrolling when cursor is over the project card!
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      // 2. Strict 950ms timestamp cooldown swallows all residual trackpad momentum!
      if (now - lastTransitionTimeRef.current < 950) {
        return;
      }

      // 3. Minimum scroll delta threshold (filters out micro trackpad drifts < 12px)
      if (Math.abs(e.deltaY) < 12) return;

      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;
      const index = activeIndexRef.current;

      // Scroll DOWN inside card
      if (isDown && index < PROJECTS_DATA.length - 1) {
        changeProject(index + 1);
      }

      // Scroll UP inside card
      if (isUp && index > 0) {
        changeProject(index - 1);
      }
    };

    // Attach wheel listener strictly to card container
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [changeProject]);

  // Touch Swipe for Mobile
  const touchStartY = useRef(0);
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;
    const index = activeIndexRef.current;
    const now = Date.now();

    if (Math.abs(diffY) > 40 && now - lastTransitionTimeRef.current >= 950) {
      if (diffY > 0 && index < PROJECTS_DATA.length - 1) {
        changeProject(index + 1);
      } else if (diffY < 0 && index > 0) {
        changeProject(index - 1);
      }
    }
  };

  // Ultra-sleek 3D Fade Backwards Depth Animation
  const cardVariants = {
    enter: {
      scale: 1.06,
      opacity: 0,
      filter: "blur(4px)",
    },
    center: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      scale: 0.84, // Card recedes backwards into deep 3D background depth!
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden flex flex-col justify-center min-h-screen"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Featured Portfolio Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase">
            Selected <span className="text-zinc-400">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-zinc-800 mx-auto mt-3" />
        </div>

        {/* Card Frame Wrapper (Attached strictly to project card area!) */}
        <div
          ref={cardFrameWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-6xl cursor-pointer touch-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#0c0c0f] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.95)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Ambient Card Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                {/* Left Column: Photo Carousel */}
                <div className="lg:col-span-6 w-full">
                  <AutoLoopingImageCarousel
                    images={currentProject.images}
                    title={currentProject.title}
                  />
                </div>

                {/* Right Column: Project Information */}
                <div className="lg:col-span-6 space-y-5">
                  
                  {/* Counter & Subtitle Header */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      PROJECT 0{activeProjectIndex + 1} / 0{PROJECTS_DATA.length}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 text-zinc-400">
                      {currentProject.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Key Engineering Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentProject.details.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & Case Study Modal */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-900">
                    {currentProject.Live && (
                      <Button asChild className="bg-white text-black font-semibold hover:bg-zinc-200 transition-all">
                        <a href={currentProject.Live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    <Button asChild variant="outline" className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900">
                      <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="text-zinc-400 hover:text-white underline underline-offset-4">
                          Full Case Study
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-zinc-950 border-zinc-800 text-white">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold uppercase tracking-tight flex items-center gap-3">
                            <Layers className="w-5 h-5 text-zinc-400" />
                            {currentProject.title} — Technical Deep Dive
                          </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 pt-4 text-sm text-zinc-400">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Architectural Overview</h4>
                            <p className="leading-relaxed">{currentProject.details.overview}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Core Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {currentProject.details.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-zinc-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 border-t border-zinc-900 pt-4">
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Tech Stack</h4>
                              <p className="text-xs text-zinc-300">{currentProject.details.stack}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Engineering Role</h4>
                              <p className="text-xs text-zinc-300">{currentProject.details.role}</p>
                            </div>
                          </div>

                          {currentProject.details.versions && (
                            <div className="border-t border-zinc-900 pt-4 space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Version History</h4>
                              {currentProject.details.versions.map((v, idx) => (
                                <div key={idx} className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                  <p className="text-xs font-bold text-white mb-1">{v.title}</p>
                                  <p className="text-xs text-zinc-400">{v.content}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Dot Indicators (Centered below card) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {PROJECTS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeProject(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeProjectIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
