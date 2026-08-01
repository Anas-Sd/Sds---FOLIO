import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Globe, Database, BookOpen, Wrench, Users, Server, ChevronLeft, ChevronRight, Sparkles, Flower } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltSkillCard = ({ category, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["16deg", "-16deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="snap-start flex-shrink-0 w-[300px] sm:w-[360px] py-2"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="h-full w-full"
      >
        <Card className="h-full bg-[#0c0c0f] border border-zinc-800/80 hover:border-zinc-500 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between group">
          <div>
            {/* Category Header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-500 transition-colors">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white leading-tight">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    {category.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-400 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      tag: "Core Syntax",
      skills: ["Java", "SQL", "C"],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      tag: "User Experience",
      skills: ["HTML5", "CSS3", "TailwindCSS", "React.js", "Next.js"],
    },
    {
      title: "Backend & Systems",
      icon: Server,
      tag: "Server & APIs",
      skills: ["Express.js", "Node.js", "SpringBoot", "Web Sockets", "Auth (JWT)", "RESTful APIs"],
    },
    {
      title: "Database Systems",
      icon: Database,
      tag: "Persistence",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    },
    {
      title: "Devops & Tools",
      icon: Wrench,
      tag: "Devops & Tools",
      skills: ["Git", "GitHub", "Docker", "CICD"],
    },
    {
      title: "Core CS Fundamentals",
      icon: BookOpen,
      tag: "CS Theory",
      skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems"],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      tag: "Developer Tools",
      skills: ["Claude", "Gemini", "Antigravity", "GitHub Copilot", "Flow", "Stitch"],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Users,
      tag: "Mindset",
      skills: [
        "Problem Solving",
        "Self-Learning",
        "Adaptability",
        "Communication",
        "Leadership",
        "Teamwork",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden flex flex-col justify-center min-h-screen w-full"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header with Navigation Controls */}
        <div
          ref={titleRef}
          className={`w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase">
              Skills & <span className="text-zinc-400">Expertise</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-2xl bg-[#0c0c0f] border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-2xl bg-[#0c0c0f] border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Side-Scrollable Horizontal Track with 3D Tilt Hover & Outer Padding */}
        <div
          ref={skillsRef}
          className={`w-full transition-all duration-700 ${
            skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-8 pt-4 px-4 sm:px-6 -mx-4 sm:-mx-6 snap-x snap-mandatory scrollbar-none scroll-smooth w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {skillCategories.map((category, index) => (
              <TiltSkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};