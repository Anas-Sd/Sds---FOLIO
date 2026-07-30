import {
  ArrowRight,
  Download,
  Eye,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export const Hero = () => {
  const titles = ["Software Development Engineer", "Full Stack Developer", "AI Powered Applications"];
  const animatedTitle = useTypewriter(titles, 80, 40, 2000);
  const [autoHover, setAutoHover] = useState(false);

  useEffect(() => {
    setAutoHover(true);
    const timer = setTimeout(() => setAutoHover(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto pt-10 sm:pt-24 md:pt-32 pb-16 z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6 lg:space-y-8 order-2 md:order-1">
            <div className="space-y-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_0.8s_both]">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Syed Anas</span>
              </h1>
              <div className="h-12 sm:h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-450 text-zinc-300">
                  {animatedTitle}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                BTech Final Year,<br />
                Computer Science & Engineering,<br />
                KL University
              </p>
            </div>

            {/* Info */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-sm text-zinc-400 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.2s_both]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-zinc-500" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 flex-shrink-0 text-zinc-500" />
                <span>Available For Full Time and Internships</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row pt-4 gap-3 sm:gap-4 items-center animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.6s_both]">
              {/* Resume Buttons */}
              <div className="flex flex-row gap-3">
                <div className="flex-shrink-0 inline-flex rounded-lg overflow-hidden border border-zinc-800 shadow-glow transform transition-all duration-[2000ms] animate-float">
                  {/* Download Resume */}
                  <a
                    href="/SYED_ANAS_RESUME_3_2_5.pdf"
                    download="SYED_ANAS_RESUME_3_2_5.pdf"
                    className="flex items-center justify-center px-3 py-1 bg-zinc-900 border-r border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  {/* View Resume */}
                  <a
                    href="/Resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold gap-1 px-4 py-2.5 sm:px-5 sm:py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <span>View Resume</span>
                  </a>
                </div>

                {/* Contact Button */}
                <Link to="/my-journey">
                  <Button
                    className="bg-white px-6 py-5 text-black font-semibold hover:bg-zinc-200 transition-all border border-zinc-200 shadow-glow hover:scale-105 duration-300"
                  >
                    My Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_2s_both]">
              <span className="text-sm text-zinc-500">Follow me:</span>
              <a href="https://github.com/Anas-Sd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/-syedanas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:portfolio.syedanas@gmail.com" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-[scale-in_1.2s_cubic-bezier(0.4,0,0.2,1)_0.8s_both]">
            <div className="relative w-full max-w-lg sm:w-72 md:w-80 lg:w-full lg:max-w-md aspect-video sm:aspect-square mt-12 sm:mt-0">
              <div className="absolute inset-0 bg-white rounded-3xl opacity-[0.03] blur-3xl" />
              <div className="relative bg-zinc-950 rounded-3xl p-2 border border-zinc-800 shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105">
                <img
                  src={new URL("@/assets/SYED_ANAS_PROFESSIONAL_IMAGE.png", import.meta.url).href}
                  alt="Syed Anas - Full Stack Developer & AI Powered Applications"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
