import { useEffect, useRef, useState, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github, GitCommit, ExternalLink, Flame, Calendar, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export const GithubSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [stats, setStats] = useState({
    totalContributions: 0,
    currentStreak: 0,
    bestStreak: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  // High-Contrast Deep Black & Vibrant Green theme
  const githubGreenTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  // Calculate live streak statistics from real GitHub contribution data
  const handleDataTransform = useCallback((contributions) => {
    if (!contributions || contributions.length === 0) return contributions;

    let total = 0;
    let best = 0;
    let temp = 0;

    contributions.forEach((day) => {
      total += day.count;
      if (day.count > 0) {
        temp += 1;
        if (temp > best) best = temp;
      } else {
        temp = 0;
      }
    });

    // Calculate current streak backwards from latest day
    let current = 0;
    let streakActive = true;
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        current += 1;
      } else if (i === contributions.length - 1) {
        // Today might not have commits yet, check previous days
        continue;
      } else {
        if (streakActive && current > 0) break;
      }
    }

    setStats({
      totalContributions: total,
      currentStreak: current,
      bestStreak: best,
    });

    return contributions;
  }, []);

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative min-h-[auto] md:min-h-screen py-8 sm:py-16 flex flex-col justify-center px-3 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl w-full mx-auto z-10">

        {/* Section Header */}
        <div
          className={`text-center mb-4 sm:mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500">
            Open Source & Activity
          </span>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase text-zinc-900 dark:text-white flex items-center justify-center gap-1.5 sm:gap-3">
            <Github className="w-5 h-5 sm:w-10 sm:h-10 text-emerald-600 dark:text-emerald-400" />
            GitHub <span className="text-zinc-600 dark:text-zinc-400">Contributions</span>
          </h2>
          <p className="text-[11px] sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1 sm:mt-2">
            Real-time contribution data fetched directly from my GitHub profile.
          </p>
        </div>

        {/* Main Glassmorphic Card Outer Wrapper */}
        <div
          className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Card className="p-3 sm:p-8 bg-[#fcfcfc] dark:bg-[#090b0e] border border-zinc-300 dark:border-emerald-500/20 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-[0_25px_50px_rgba(0,0,0,0.9)] space-y-4 sm:space-y-8">

            {/* Top 3 Stat Blocks (3 columns on mobile & desktop) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">

              {/* Stat 1: Total Contributions */}
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#12161c] border border-zinc-200 dark:border-zinc-800/90 text-center flex flex-col justify-center items-center group hover:border-emerald-500/50 transition-colors shadow-xs">
                <span className="text-base sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
                  {stats.totalContributions > 0 ? stats.totalContributions.toLocaleString() : "---"}
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 hidden sm:inline text-emerald-500" />
                  <span className="hidden sm:inline">Contributions (last year)</span>
                  <span className="sm:hidden">Total</span>
                </span>
              </div>

              {/* Stat 2: Current Streak */}
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#12161c] border border-zinc-200 dark:border-zinc-800/90 text-center flex flex-col justify-center items-center group hover:border-emerald-500/50 transition-colors shadow-xs">
                <span className="text-base sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
                  {stats.currentStreak > 0 ? `${stats.currentStreak}d` : "0d"}
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1 flex items-center gap-1">
                  <Flame className="w-3 h-3 hidden sm:inline text-emerald-500" />
                  <span className="hidden sm:inline">Current Streak</span>
                  <span className="sm:hidden">Current</span>
                </span>
              </div>

              {/* Stat 3: Best Streak */}
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#12161c] border border-zinc-200 dark:border-zinc-800/90 text-center flex flex-col justify-center items-center group hover:border-emerald-500/50 transition-colors shadow-xs">
                <span className="text-base sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
                  {stats.bestStreak > 0 ? `${stats.bestStreak}d` : "---"}
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1 flex items-center gap-1">
                  <Trophy className="w-3 h-3 hidden sm:inline text-emerald-500" />
                  <span className="hidden sm:inline">Best Streak</span>
                  <span className="sm:hidden">Best</span>
                </span>
              </div>

            </div>

            {/* Middle: Live GitHub Calendar Heatmap */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-none flex justify-start sm:justify-center">
              <div className="min-w-[560px] sm:min-w-[720px] p-2.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0d1117] border border-zinc-800 flex justify-center text-white">
                <GitHubCalendar
                  username="Anas-Sd"
                  theme={githubGreenTheme}
                  colorScheme="dark"
                  showWeekdayLabels={true}
                  blockSize={isMobile ? 9 : 12}
                  blockMargin={isMobile ? 2.5 : 4}
                  fontSize={isMobile ? 10 : 12}
                  transformData={handleDataTransform}
                  labels={{
                    totalCount: "",
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Pill Badge CTA */}
            <div className="flex flex-row items-center justify-between gap-2 border-t border-zinc-200 dark:border-zinc-800/80 pt-3 sm:pt-4">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <GitCommit className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">Live GitHub Sync</span>
              </div>

              {/* Pill Badge Button */}
              <a
                href="https://github.com/Anas-Sd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-xs shrink-0"
              >
                <Github className="w-3.5 h-3.5" /> @Anas-Sd <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </Card>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
