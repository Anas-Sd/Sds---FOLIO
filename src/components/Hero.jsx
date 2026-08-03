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
import { Link } from "react-router-dom";
import { useGlobalStats } from "@/hooks/useGlobalStats";

export const Hero = () => {
  const titles = ["Software Development Engineer", "Full Stack Developer", "AI Powered Applications"];
  const animatedTitle = useTypewriter(titles, 80, 40, 2000);
  const [autoHover, setAutoHover] = useState(false);

  const { viewsCount, downloadsCount, incrementDownloads } = useGlobalStats();

  useEffect(() => {
    setAutoHover(true);
    const timer = setTimeout(() => setAutoHover(false), 2500);

    // Clean up old local storage keys
    localStorage.removeItem("portfolio_profile_views");
    localStorage.removeItem("portfolio_resume_downloads");
    localStorage.removeItem("my_portfolio_real_views");
    localStorage.removeItem("my_portfolio_real_downloads");

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClick = () => {
    incrementDownloads();
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] overflow-hidden"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto pt-6 sm:pt-24 md:pt-32 pb-8 sm:pb-16 z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Top Image (Mobile top, Desktop right) */}
          <div className="flex flex-col items-center justify-center md:justify-end order-1 md:order-2 mb-12 md:mb-0 animate-[scale-in_1.2s_cubic-bezier(0.4,0,0.2,1)_0.8s_both]">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-80 md:h-auto lg:w-full lg:max-w-md">
              <div className="absolute inset-0 bg-zinc-400 dark:bg-white rounded-3xl opacity-[0.08] blur-2xl md:blur-3xl" />
              <div className="relative bg-white dark:bg-zinc-950 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-zinc-300 dark:border-zinc-800 shadow-xl dark:shadow-glow hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <picture>
                  <source media="(min-width: 768px)" srcSet={new URL("@/assets/SYED_ANAS_PROFESSIONAL_IMAGE.png", import.meta.url).href} />
                  <img
                    src="/SYED_ANAS_IMAGE_MOBILE.png"
                    alt="Syed Anas - Full Stack Developer & AI Powered Applications"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </picture>
              </div>
            </div>

            {/* Mobile Only Status Badge */}
            {/* <div className="flex md:hidden items-center justify-center gap-2 px-3.5 py-1.5 mt-5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs relative z-20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div> */}
          </div>

          {/* Left Text Column */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">

            <div className="space-y-3 sm:space-y-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_0.8s_both] w-full flex flex-col items-center md:items-start">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400">Syed Anas</span>
              </h1>
              <div className="min-h-[2.5rem] sm:min-h-[4rem] flex items-center justify-center md:justify-start">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-800 dark:text-zinc-200">
                  {animatedTitle}
                </h2>
              </div>
              <p className="text-sm sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal max-w-md md:max-w-none">
                BTech Final Year,<br />
                Computer Science & Engineering,<br />
                KL University
              </p>
            </div>

            {/* Info Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.2s_both]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 md:bg-transparent md:dark:bg-transparent border border-zinc-300 dark:border-zinc-800 md:border-none">
                <MapPin className="w-4 h-4 flex-shrink-0 text-zinc-700 dark:text-zinc-400" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Briefcase className="w-4 h-4 flex-shrink-0 text-zinc-700 dark:text-zinc-400" />
                <span>Available For Full Time and Internships</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row pt-2 sm:pt-4 gap-3 sm:gap-4 items-center justify-center md:justify-start animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.6s_both]">
              {/* Resume Buttons */}
              <div className="flex flex-row gap-3">
                <div className="flex-shrink-0 inline-flex rounded-lg overflow-hidden border border-zinc-400 dark:border-zinc-800 shadow-sm dark:shadow-glow transition-all duration-300">
                  {/* Download Resume */}
                  <a
                    href="/SYED_ANAS_RESUME.pdf"
                    download="SYED_ANAS_RESUME.pdf"
                    onClick={handleDownloadClick}
                    aria-label="Download Resume"
                    className="flex items-center justify-center px-3 py-1 bg-zinc-900 border-r border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  {/* View Resume */}
                  <a
                    href="/Resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold text-xs sm:text-sm gap-1 px-3.5 py-2.5 sm:px-5 sm:py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <span>View Resume</span>
                  </a>
                </div>

                {/* Contact / Journey Button */}
                <Link to="/my-journey">
                  <Button
                    className="bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all border border-zinc-800 dark:border-zinc-200 shadow-md hover:scale-105 duration-300"
                  >
                    My Journey
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_1.8s_both]">
              <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">Follow me:</span>
              <a href="https://github.com/Anas-Sd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-sm">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/-syedanas/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-sm">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:portfolio.syedanas@gmail.com" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center hover:scale-110 transform transition duration-300 shadow-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Live Telemetry Analytics Bar */}
            <div className="pt-2 sm:pt-3 flex justify-center md:justify-start animate-[fade-in_1s_cubic-bezier(0.4,0,0.2,1)_2s_both]">
              <div className="inline-flex flex-row items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-zinc-800/80 backdrop-blur-md shadow-md dark:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700/80 transition-all duration-300">
                {/* Live Pulse Header */}
                <div className="flex items-center gap-1.5 sm:gap-2 pr-2 sm:pr-3 border-r border-zinc-300 dark:border-zinc-800/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-700 dark:text-zinc-400">
                    Live Stats
                  </span>
                </div>

                {/* Metric 1: Views */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300">
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white font-mono">{viewsCount.toLocaleString()}</span>
                    <span className="text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-400 font-semibold">
                      views
                    </span>
                  </div>
                </div>

                {/* Divider dot */}
                <span className="text-zinc-400 dark:text-zinc-700 font-bold">•</span>

                {/* Metric 2: Downloads */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300">
                    <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white font-mono">{downloadsCount.toLocaleString()}</span>
                    <span className="text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-400 font-semibold">
                      downloads
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
