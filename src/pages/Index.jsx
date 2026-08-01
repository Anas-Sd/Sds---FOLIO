import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const StackedCard = ({ children, index, total, heightClass }) => {
  const containerRef = useRef(null);

  // Track entry progress (as card moves from bottom of screen into view)
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Track exit progress (as card gets covered by next card)
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Smooth entry physics (scale up, slide up, fade in)
  const entryScale = useTransform(entryProgress, [0, 1], [0.92, 1]);
  const entryOpacity = useTransform(entryProgress, [0, 0.6, 1], [0.2, 0.85, 1]);
  const entryY = useTransform(entryProgress, [0, 1], [60, 0]);

  // Smooth exit physics (scale down slightly, fade out)
  const exitScale = useTransform(exitProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const exitOpacity = useTransform(exitProgress, [0, 1], [1, isLast ? 1 : 0.4]);

  // Use entry transforms for incoming sections, exit transforms for active/outgoing
  const scale = isFirst ? exitScale : entryScale;
  const opacity = isFirst ? exitOpacity : entryOpacity;
  const y = isFirst ? 0 : entryY;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full flex flex-col", heightClass || "min-h-screen")}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className={cn(
          "w-full bg-white dark:bg-[#050505] border-t border-zinc-200 dark:border-zinc-800/80 shadow-md dark:shadow-[0_-25px_50px_rgba(0,0,0,0.9)] flex flex-col justify-center text-zinc-900 dark:text-foreground",
          "relative md:sticky md:top-0 transition-shadow duration-500",
          heightClass ? "h-screen overflow-hidden" : "min-h-screen",
          index > 0 && "rounded-t-[2rem] md:rounded-t-[3.5rem]"
        )}
      >
        {index > 0 && (
          <motion.div
            style={{ opacity: entryProgress }}
            className="absolute top-0 inset-x-8 sm:inset-x-24 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent pointer-events-none z-20 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          />
        )}
        <div className="w-full h-full flex flex-col justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const Index = () => {
  const totalSections = 6;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Silently clear hash and query parameters so normal page refresh doesn't trigger scroll redirect
        window.history.replaceState(null, "", window.location.pathname);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#050505] text-zinc-900 dark:text-foreground antialiased">
      <Navigation />
      
      {/* 1. Hero */}
      <StackedCard index={0} total={totalSections} zoomInOnScroll={true}>
        <Hero />
      </StackedCard>

      {/* 2. About */}
      <StackedCard index={1} total={totalSections}>
        <About />
      </StackedCard>

      {/* 3. Skills */}
      <StackedCard index={2} total={totalSections}>
        <Skills />
      </StackedCard>

      {/* 4. Projects */}
      <StackedCard index={3} total={totalSections}>
        <Projects />
      </StackedCard>

      {/* 5. Certifications */}
      <StackedCard index={4} total={totalSections}>
        <Certifications />
      </StackedCard>

      {/* 6. Contact & Footer */}
      <StackedCard index={5} total={totalSections}>
        <div className="flex flex-col min-h-screen justify-between">
          <div className="flex-grow flex items-center">
            <Contact />
          </div>
          <Footer />
        </div>
      </StackedCard>
    </div>
  );
};

export default Index;
