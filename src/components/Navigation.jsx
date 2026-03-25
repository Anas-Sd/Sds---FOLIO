import { Home, BookOpen, Folder, Code, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const activeSection = useActiveSection();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: BookOpen, label: "About" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "skills", icon: Code, label: "Skills & Certifications" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "journey", icon: Mail, label: "My Journey", isPage: true },
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

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-[slide-down_1s_cubic-bezier(0.4,0,0.2,1)_both]">
        <div className="flex items-center gap-1 bg-card/80 backdrop-blur-lg border border-border rounded-full px-2 py-2 shadow-soft">
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
                "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap",
                activeSection === item.id
                  ? "bg-foreground text-background"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};
