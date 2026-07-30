import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Globe, Database, BookOpen, Wrench, Users, Server, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
      skills: ["Java", "SQL", "C", "JavaScript"],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      tag: "User Experience",
      skills: ["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend & Systems",
      icon: Server,
      tag: "Server & APIs",
      skills: ["Express.js", "Node.js", "SpringBoot", "Auth (JWT)", "RESTful APIs"],
    },
    {
      title: "Database Systems",
      icon: Database,
      tag: "Persistence",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Core CS Fundamentals",
      icon: BookOpen,
      tag: "CS Theory",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
    },
    {
      title: "Tools & Infrastructure",
      icon: Wrench,
      tag: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "Postman"],
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

        {/* Side-Scrollable Horizontal Track */}
        <div
          ref={skillsRef}
          className={`w-full transition-all duration-700 ${
            skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="snap-start flex-shrink-0 w-[300px] sm:w-[360px] bg-[#0c0c0f] border border-zinc-800/80 hover:border-zinc-600 rounded-3xl p-6 sm:p-7 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-600 transition-colors">
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
                        className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-500 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};