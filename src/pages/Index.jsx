import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const StackedCard = ({ children, index, total, zoomInOnScroll = false, scaleRange, yRange, opacityRange, heightClass }) => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;

  // Custom scale, opacity, and y behavior based on props or index
  const defaultScale = zoomInOnScroll ? [1, 1.18] : [1, isLast ? 1 : 0.93];
  const defaultY = zoomInOnScroll ? [0, -120] : [0, isLast ? 0 : -40];
  const defaultOpacity = zoomInOnScroll ? [1, 0.25] : [1, isLast ? 1 : 0.5];

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange || defaultScale);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange || defaultOpacity);
  const y = useTransform(scrollYProgress, [0, 1], yRange || defaultY);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full flex flex-col", heightClass || "min-h-screen")}
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale: isDesktop ? scale : 1,
          opacity: isDesktop ? opacity : 1,
          y: isDesktop ? y : 0,
        }}
        className={cn(
          "w-full bg-[#050505] border-t border-zinc-900 shadow-[0_-20px_40px_rgba(0,0,0,0.6)] md:shadow-[0_-30px_60px_rgba(0,0,0,0.9)] flex flex-col justify-center",
          "relative md:sticky md:top-0",
          heightClass ? "h-screen overflow-hidden" : (zoomInOnScroll ? "h-screen overflow-hidden" : "min-h-screen"),
          index > 0 && "rounded-t-[2rem] md:rounded-t-[3.5rem]"
        )}
      >
        <div className="w-full h-full flex flex-col justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const Index = () => {
  const totalSections = 6;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-foreground antialiased">
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
