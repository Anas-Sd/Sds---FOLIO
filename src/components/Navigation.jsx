import { Home, BookOpen, Folder, Code, Award, Mail, Menu, Crown, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Navigation = () => {
  const activeSection = useActiveSection();
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTemporarilyExpanded, setIsTemporarilyExpanded] = useState(true);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Auto-collapse after 3 seconds on load when not in hero section
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsTemporarilyExpanded(false);
    }, 3000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsHovered(true);
    setIsTemporarilyExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsTemporarilyExpanded(false);
    }, 3000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // Expanded condition: Always ALWAYS expanded in Hero ("home") section!
  const isExpanded = activeSection === "home" || isHovered || isTemporarilyExpanded;

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: BookOpen, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "github", icon: Github, label: "GitHub" },
    { id: "certifications", icon: Award, label: "Certifications" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "journey", icon: Crown, label: "My Journey", isPage: true },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 z-50 animate-[slide-down_1s_cubic-bezier(0.4,0,0.2,1)_both]">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-soft flex items-center justify-center hover:bg-muted transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isPage) {
                      navigate("/my-journey");
                      setOpen(false);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left",
                    activeSection === item.id
                      ? "bg-foreground text-background"
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
              <div className="mt-4 px-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Desktop Floating Navigation */}
      <nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-[slide-down_1s_cubic-bezier(0.4,0,0.2,1)_both]"
      >
        <motion.div
          initial={{ y: -24, opacity: 0, scale: 0.94 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 bg-white/90 dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/80 rounded-full p-2 shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isPage) {
                    navigate("/my-journey");
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={cn(
                  "flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-2.5 sm:px-3 sm:py-2 whitespace-nowrap relative group",
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/80"
                )}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                
                {/* Ultra-Smooth Expandable Label */}
                <span
                  className={cn(
                    "inline-flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isExpanded
                      ? "max-w-[180px] opacity-100 pl-2 translate-x-0"
                      : "max-w-0 opacity-0 pl-0 -translate-x-1 pointer-events-none"
                  )}
                >
                  <span className="text-xs font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}

          <div className="ml-1 border-l border-zinc-200 dark:border-zinc-800/80 pl-2">
            <ThemeToggle />
          </div>
        </motion.div>
      </nav>
    </>
  );
};
