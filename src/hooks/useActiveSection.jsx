import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

    const handleScroll = () => {
      const focalPoint = window.innerHeight * 0.4; // 40% from top of screen

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= focalPoint && rect.bottom >= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
